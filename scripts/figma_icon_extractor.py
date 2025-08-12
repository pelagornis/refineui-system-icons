#!/usr/bin/env python3
"""
Figma Icon Extractor
Figma에서 System Icons를 자동으로 추출하여 공용 assets 구조로 저장하는 스크립트
"""

import os
import json
import requests
import re
from pathlib import Path
from typing import Dict, List, Optional, Tuple
from dataclasses import dataclass
from urllib.parse import urlparse
import logging

# .env 파일 로드 (python-dotenv가 설치된 경우)
try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass

# 로깅 설정
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

@dataclass
class IconMetadata:
    """아이콘 메타데이터 클래스"""
    name: str
    slug: str
    size: int
    node_id: str
    style: str  # regular/filled
    file_path: str

class FigmaIconExtractor:
    """Figma 아이콘 추출기"""
    
    def __init__(self, figma_token: str, file_key: str, page_name: str = "System Icons"):
        self.figma_token = figma_token
        self.file_key = file_key
        self.page_name = page_name
        self.base_url = "https://api.figma.com/v1"
        
        # 지원하는 아이콘 크기
        self.supported_sizes = [16, 20, 24, 28, 32, 48]
        
        # 공용 assets 구조
        self.assets_dir = "assets"

    def slugify(self, name: str) -> str:
        """아이콘 이름을 slug 처리"""
        # 기본 kebab-case 변환
        slug = re.sub(r'[^a-zA-Z0-9\s-]', '', name)
        slug = re.sub(r'\s+', '-', slug.lower())
        slug = re.sub(r'-+', '-', slug).strip('-')
        return slug
    
    def to_title_case(self, name: str) -> str:
        """아이콘 이름을 Title Case로 변환"""
        # kebab-case를 Title Case로 변환
        words = name.split('-')
        title_case = ' '.join(word.capitalize() for word in words)
        return title_case
    

    
    def get_icon_style(self, name: str) -> str:
        """아이콘 이름에서 스타일 추출 (regular/filled)"""
        name_lower = name.lower()
        if 'filled' in name_lower or 'solid' in name_lower:
            return 'filled'
        elif 'regular' in name_lower or 'outline' in name_lower:
            return 'regular'
        else:
            # 기본값은 regular
            return 'regular'
    
    def generate_filename(self, icon_name: str, size: int, style: str) -> str:
        """새로운 네이밍 규칙으로 파일명 생성"""
        slug = self.slugify(icon_name)
        
        # ic_refineui_아이콘네임_사이즈_스타일.svg
        return f"ic_refineui_{slug}_{size}_{style}.svg"

    def get_figma_file(self) -> Dict:
        """Figma 파일 정보 가져오기"""
        url = f"{self.base_url}/files/{self.file_key}"
        headers = {"X-Figma-Token": self.figma_token}
        
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        
        return response.json()

    def find_icon_page(self, document: Dict) -> Optional[Dict]:
        """지정된 페이지에서 아이콘 찾기"""
        for page in document.get("document", {}).get("children", []):
            if page.get("name") == self.page_name:
                # 페이지 안에 같은 이름의 프레임이 있는지 확인
                for child in page.get("children", []):
                    if child.get("name") == self.page_name and child.get("type") == "FRAME":
                        logger.info(f"'{self.page_name}' 프레임을 찾았습니다.")
                        return child
                
                # 프레임이 없으면 페이지 자체 반환
                logger.info(f"'{self.page_name}' 페이지를 사용합니다.")
                return page
        return None

    def extract_icons_from_page(self, page: Dict) -> List[Dict]:
        """페이지에서 아이콘 컴포넌트 추출"""
        icons = []
        
        def traverse_nodes(node, parent_name=""):
            if node.get("type") == "COMPONENT":
                name = node.get("name", "")
                
                # 크기/테마/상태 프레임 제외 (더 구체적으로)
                if (name.startswith("Size=") or name.startswith("Theme=") or 
                    name.startswith("State=") or name.count("=") >= 2 or
                    name.isdigit() or name in ["Regular", "Filled"]):
                    # 조직 프레임이지만 부모 이름이 있으면 계속 진행
                    if parent_name:
                        icon_name = parent_name
                    else:
                        return
                else:
                    # 일반적인 아이콘 이름
                    icon_name = name
                
                # 특정 카테고리 제외
                excluded_prefixes = ["Navigation", "Blocks", "Layout", "Form", "Button"]
                if any(icon_name.startswith(prefix) for prefix in excluded_prefixes):
                    return
                
                # 아이콘 크기 확인
                size = self.extract_icon_size(node)
                
                if size in self.supported_sizes:
                    # 스타일 추출
                    style = self.get_icon_style(name)
                    
                    icons.append({
                        "name": icon_name,
                        "node_id": node.get("id"),
                        "size": size,
                        "style": style
                    })
            
            # 자식 노드들도 탐색 (현재 노드 이름을 부모 이름으로 전달)
            current_name = node.get("name", "")
            for child in node.get("children", []):
                # 크기/테마 프레임이 아닌 경우에만 부모 이름으로 전달
                if not (current_name.startswith("Size=") or current_name.startswith("Theme=") or 
                       current_name.startswith("State=") or "=" in current_name):
                    traverse_nodes(child, current_name)
                else:
                    traverse_nodes(child, parent_name)
            
            # 자식 노드들도 탐색 (현재 노드 이름을 부모 이름으로 전달)
            current_name = node.get("name", "")
            for child in node.get("children", []):
                # 크기/테마 프레임이 아닌 경우에만 부모 이름으로 전달
                if not (current_name.startswith("Size=") or current_name.startswith("Theme=") or 
                       current_name.startswith("State=") or "=" in current_name):
                    traverse_nodes(child, current_name)
                else:
                    traverse_nodes(child, parent_name)
        
        traverse_nodes(page)
        return icons

    def extract_icon_size(self, node: Dict) -> int:
        """노드에서 아이콘 크기 추출"""
        # 기본적으로 정사각형 아이콘 가정
        width = node.get("absoluteBoundingBox", {}).get("width", 0)
        height = node.get("absoluteBoundingBox", {}).get("height", 0)
        
        # 가장 가까운 지원 크기로 반올림
        size = max(width, height)
        return min(self.supported_sizes, key=lambda x: abs(x - size))

    def get_svg_urls(self, node_ids: List[str]) -> Dict[str, str]:
        """아이콘들의 SVG URL 가져오기 (배치 처리)"""
        all_images = {}
        batch_size = 50  # Figma API 제한: 한 번에 최대 50개
        
        # 배치별로 처리
        for i in range(0, len(node_ids), batch_size):
            batch_ids = node_ids[i:i + batch_size]
            logger.info(f"배치 처리 중... ({i+1}-{min(i+batch_size, len(node_ids))}/{len(node_ids)})")
            
            url = f"{self.base_url}/images/{self.file_key}"
            params = {
                "ids": ",".join(batch_ids),
                "format": "svg",
                "scale": 1
            }
            headers = {"X-Figma-Token": self.figma_token}
            
            try:
                response = requests.get(url, params=params, headers=headers)
                response.raise_for_status()
                
                batch_images = response.json().get("images", {})
                all_images.update(batch_images)
                
                # API 제한 방지를 위한 짧은 대기
                import time
                time.sleep(0.1)
                
            except requests.exceptions.RequestException as e:
                logger.error(f"배치 {i//batch_size + 1} 처리 실패: {e}")
                continue
        
        return all_images

    def download_svg(self, url: str, file_path: str) -> bool:
        """SVG 파일 다운로드"""
        try:
            response = requests.get(url)
            response.raise_for_status()
            
            os.makedirs(os.path.dirname(file_path), exist_ok=True)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(response.text)
            
            return True
        except Exception as e:
            logger.error(f"SVG 다운로드 실패: {file_path} - {e}")
            return False

    def create_assets_structure(self):
        """공용 assets 디렉토리 구조 생성"""
        os.makedirs(self.assets_dir, exist_ok=True)

    def save_icon_metadata(self, icon_name: str, icon_data: List[Dict]):
        """개별 아이콘의 메타데이터 저장"""
        folder_name = self.to_title_case(icon_name)
        icon_dir = os.path.join(self.assets_dir, folder_name)
        metadata_file = os.path.join(icon_dir, "metadata.json")
        
        # 사용 가능한 크기와 스타일 추출
        sizes = list(set(file_info["size"] for file_info in icon_data))
        styles = list(set(file_info["style"].title() for file_info in icon_data))
        
        metadata = {
            "name": folder_name,
            "size": sorted(sizes),
            "style": sorted(styles),
            "keyword": "refineui-icon",
            "description": f"Used in {folder_name.lower()} scenarios."
        }
        
        with open(metadata_file, 'w', encoding='utf-8') as f:
            json.dump(metadata, f, indent=2, ensure_ascii=False)

    def extract_icons(self) -> List[IconMetadata]:
        """메인 추출 프로세스"""
        logger.info("Figma 파일에서 아이콘 추출 시작...")
        
        # Figma 파일 정보 가져오기
        file_data = self.get_figma_file()
        
        # 아이콘 페이지 찾기
        icon_page = self.find_icon_page(file_data)
        if not icon_page:
            raise ValueError(f"'{self.page_name}' 페이지를 찾을 수 없습니다.")
        
        # 아이콘 컴포넌트 추출
        icons = self.extract_icons_from_page(icon_page)
        logger.info(f"{len(icons)}개의 아이콘을 찾았습니다.")
        
        if len(icons) == 0:
            logger.warning("아이콘을 찾을 수 없습니다. 페이지 이름과 컴포넌트 설정을 확인해주세요.")
            return []
        
        # 테스트용: 처음 5개만 처리 (환경변수로 제어)
        test_limit = os.getenv('FIGMA_TEST_LIMIT')
        if test_limit:
            try:
                limit = int(test_limit)
                icons = icons[:limit]
                logger.info(f"테스트 모드: 처음 {len(icons)}개 아이콘만 처리합니다.")
            except ValueError:
                logger.warning("FIGMA_TEST_LIMIT는 숫자여야 합니다.")
        
        # 진행 상황 표시
        logger.info(f"처리 예상 시간: 약 {len(icons) * 0.5:.1f}초")
        
        # SVG URL 가져오기
        node_ids = [icon["node_id"] for icon in icons]
        svg_urls = self.get_svg_urls(node_ids)
        
        # 공용 assets 디렉토리 구조 생성
        self.create_assets_structure()
        
        # 아이콘별로 그룹화 (중복 제거)
        icon_groups = {}
        seen_combinations = set()  # 중복 체크용
        
        for icon in icons:
            icon_name = icon["name"]
            size = icon["size"]
            style = icon["style"]
            
            # 아이콘명 + 크기 + 스타일 조합으로 중복 체크
            combination = f"{icon_name}_{size}_{style}"
            if combination in seen_combinations:
                continue
            
            seen_combinations.add(combination)
            
            if icon_name not in icon_groups:
                icon_groups[icon_name] = []
            icon_groups[icon_name].append(icon)
        
        # 아이콘별로 처리
        all_metadata = []
        for icon_name, icon_list in icon_groups.items():
            logger.info(f"아이콘 처리 중: {icon_name}")
            
            # 아이콘별 디렉토리 생성 (Title Case로 변환)
            folder_name = self.to_title_case(icon_name)
            icon_dir = os.path.join(self.assets_dir, folder_name)
            svg_dir = os.path.join(icon_dir, "svg")
            os.makedirs(svg_dir, exist_ok=True)
            
            icon_files = []
            
            for icon in icon_list:
                node_id = icon["node_id"]
                if node_id not in svg_urls:
                    logger.warning(f"SVG URL을 찾을 수 없음: {icon_name}")
                    continue
                
                svg_url = svg_urls[node_id]
                size = icon["size"]
                style = icon["style"]
                
                # 새로운 네이밍 규칙으로 파일명 생성
                filename = self.generate_filename(icon_name, size, style)
                full_path = os.path.join(svg_dir, filename)
                
                # SVG 다운로드
                if self.download_svg(svg_url, full_path):
                    
                    all_metadata.append(IconMetadata(
                        name=icon_name,
                        slug=self.slugify(icon_name),
                        size=size,
                        node_id=node_id,
                        style=style,
                        file_path=full_path
                    ))
                    
                    icon_files.append({
                        "size": size,
                        "style": style,
                        "filename": filename,
                        "path": full_path
                    })
                    
                    logger.info(f"저장됨: {full_path}")
            
            # 개별 아이콘 메타데이터 저장
            if icon_files:
                self.save_icon_metadata(icon_name, icon_files)
        
        # 전체 메타데이터 저장
        self.save_all_metadata(all_metadata)
        logger.info(f"총 {len(all_metadata)}개의 아이콘 파일이 생성되었습니다.")
        
        return all_metadata

    def save_all_metadata(self, metadata: List[IconMetadata]):
        """전체 메타데이터 저장"""
        metadata_dir = "metadata"
        os.makedirs(metadata_dir, exist_ok=True)
        
        # 아이콘별로 그룹화
        icons_data = {}
        for item in metadata:
            if item.slug not in icons_data:
                icons_data[item.slug] = {
                    "name": item.name,
                    "slug": item.slug,
                    "files": []
                }
            
            icons_data[item.slug]["files"].append({
                "size": item.size,
                "style": item.style,
                "node_id": item.node_id,
                "file_path": item.file_path
            })
        
        # 전체 메타데이터 저장
        with open(f"{metadata_dir}/icons.json", 'w', encoding='utf-8') as f:
            json.dump(icons_data, f, indent=2, ensure_ascii=False)

def main():
    """메인 실행 함수"""
    import argparse
    import os
    
    parser = argparse.ArgumentParser(description="Figma에서 System Icons 추출")
    parser.add_argument("--token", help="Figma API 토큰 (환경변수 FIGMA_TOKEN에서도 읽어옴)")
    parser.add_argument("--file-key", help="Figma 파일 키 (환경변수 FIGMA_FILE_KEY에서도 읽어옴)")
    parser.add_argument("--page", default="System Icons", help="아이콘이 있는 페이지 이름")
    
    args = parser.parse_args()
    
    # 환경변수에서 토큰과 파일 키 가져오기
    figma_token = args.token or os.getenv('FIGMA_TOKEN')
    figma_file_key = args.file_key or os.getenv('FIGMA_FILE_KEY')
    
    if not figma_token:
        print("❌ Figma API 토큰이 필요합니다.")
        print("다음 중 하나의 방법으로 설정해주세요:")
        print("1. --token 인수 사용")
        print("2. FIGMA_TOKEN 환경변수 설정")
        print("3. .env 파일 사용")
        print("\n자세한 내용은 docs/FIGMA_SETUP.md를 참조하세요.")
        return 1
    
    if not figma_file_key:
        print("❌ Figma 파일 키가 필요합니다.")
        print("다음 중 하나의 방법으로 설정해주세요:")
        print("1. --file-key 인수 사용")
        print("2. FIGMA_FILE_KEY 환경변수 설정")
        print("3. .env 파일 사용")
        print("\n자세한 내용은 docs/FIGMA_SETUP.md를 참조하세요.")
        return 1
    
    try:
        extractor = FigmaIconExtractor(
            figma_token=figma_token,
            file_key=figma_file_key,
            page_name=args.page
        )
        
        metadata = extractor.extract_icons()
        print(f"\n✅ 추출 완료! {len(metadata)}개의 아이콘이 생성되었습니다.")
        print("📁 생성된 파일들:")
        print("  - assets/ (공용 아이콘 파일)")
        print("  - metadata/icons.json (전체 메타데이터)")
        
    except Exception as e:
        logger.error(f"추출 실패: {e}")
        return 1
    
    return 0

if __name__ == "__main__":
    exit(main())
