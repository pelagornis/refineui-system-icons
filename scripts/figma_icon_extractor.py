#!/usr/bin/env python3
"""
RefineUI System Icons - Figma Icon Extractor
Figma에서 아이콘을 추출하고 assets 폴더에 저장합니다.
"""

import os
import sys
import json
import requests
from pathlib import Path
from typing import Dict, List, Optional

class FigmaIconExtractor:
    def __init__(self, figma_token: str, file_key: str):
        self.figma_token = figma_token
        self.file_key = file_key
        self.base_url = "https://api.figma.com/v1"
        self.headers = {
            "X-Figma-Token": figma_token
        }
    
    def get_file_info(self) -> Optional[Dict]:
        """Figma 파일 정보를 가져옵니다."""
        url = f"{self.base_url}/files/{self.file_key}"
        response = requests.get(url, headers=self.headers)
        
        if response.status_code == 200:
            return response.json()
        else:
            print(f"❌ Figma 파일 정보 가져오기 실패: {response.status_code}")
            return None
    
    def get_file_nodes(self, node_ids: List[str]) -> Optional[Dict]:
        """특정 노드들의 정보를 가져옵니다."""
        url = f"{self.base_url}/files/{self.file_key}/nodes"
        params = {"ids": ",".join(node_ids)}
        response = requests.get(url, headers=self.headers, params=params)
        
        if response.status_code == 200:
            return response.json()
        else:
            print(f"❌ Figma 노드 정보 가져오기 실패: {response.status_code}")
            return None
    
    def get_image_urls(self, node_ids: List[str], format: str = "svg") -> Optional[Dict]:
        """노드들의 이미지 URL을 가져옵니다."""
        url = f"{self.base_url}/images/{self.file_key}"
        params = {
            "ids": ",".join(node_ids),
            "format": format,
            "scale": 1
        }
        response = requests.get(url, headers=self.headers, params=params)
        
        if response.status_code == 200:
            return response.json()
        else:
            print(f"❌ Figma 이미지 URL 가져오기 실패: {response.status_code}")
            return None
    
    def download_icon(self, url: str, file_path: Path) -> bool:
        """아이콘을 다운로드합니다."""
        try:
            response = requests.get(url)
            if response.status_code == 200:
                file_path.parent.mkdir(parents=True, exist_ok=True)
                with open(file_path, 'wb') as f:
                    f.write(response.content)
                return True
            else:
                print(f"❌ 아이콘 다운로드 실패: {response.status_code}")
                return False
        except Exception as e:
            print(f"❌ 아이콘 다운로드 중 오류: {e}")
            return False
    
    def extract_icons(self, output_dir: Path) -> bool:
        """Figma에서 아이콘을 추출합니다."""
        print("🎨 Figma에서 아이콘 추출 시작...")
        
        # 1. 파일 정보 가져오기
        file_info = self.get_file_info()
        if not file_info:
            return False
        
        # 2. 아이콘 노드 찾기 (예시 - 실제 구현에서는 더 정교한 로직 필요)
        icon_nodes = self._find_icon_nodes(file_info)
        if not icon_nodes:
            print("⚠️  아이콘 노드를 찾을 수 없습니다.")
            return False
        
        print(f"📋 {len(icon_nodes)}개의 아이콘 노드 발견")
        
        # 3. 이미지 URL 가져오기
        node_ids = [node["id"] for node in icon_nodes]
        image_info = self.get_image_urls(node_ids)
        if not image_info:
            return False
        
        # 4. 아이콘 다운로드
        success_count = 0
        for node in icon_nodes:
            node_id = node["id"]
            node_name = node["name"]
            
            if node_id in image_info["images"]:
                image_url = image_info["images"][node_id]
                file_path = output_dir / f"{node_name}.svg"
                
                if self.download_icon(image_url, file_path):
                    success_count += 1
                    print(f"✅ {node_name} 다운로드 완료")
                else:
                    print(f"❌ {node_name} 다운로드 실패")
        
        print(f"🎉 아이콘 추출 완료: {success_count}/{len(icon_nodes)}")
        return success_count > 0
    
    def _find_icon_nodes(self, file_info: Dict) -> List[Dict]:
        """파일 정보에서 아이콘 노드를 찾습니다."""
        # 실제 구현에서는 더 정교한 로직이 필요합니다
        # 여기서는 예시로 간단하게 구현
        icon_nodes = []
        
        def traverse_nodes(node):
            if "children" in node:
                for child in node["children"]:
                    if self._is_icon_node(child):
                        icon_nodes.append(child)
                    traverse_nodes(child)
        
        if "document" in file_info:
            traverse_nodes(file_info["document"])
        
        return icon_nodes
    
    def _is_icon_node(self, node: Dict) -> bool:
        """노드가 아이콘인지 확인합니다."""
        # 실제 구현에서는 더 정교한 로직이 필요합니다
        node_name = node.get("name", "").lower()
        return any(keyword in node_name for keyword in ["icon", "ic_", "symbol"])

def main():
    """메인 함수"""
    # 환경 변수에서 Figma 토큰 가져오기
    figma_token = os.getenv("FIGMA_TOKEN")
    if not figma_token:
        print("❌ FIGMA_TOKEN 환경 변수가 설정되지 않았습니다.")
        print("환경 변수를 설정하거나 .env 파일을 생성하세요.")
        sys.exit(1)
    
    # Figma 파일 키 (예시)
    file_key = os.getenv("FIGMA_FILE_KEY", "your_file_key_here")
    
    # 출력 디렉토리
    project_root = Path(__file__).parent.parent
    output_dir = project_root / "assets" / "extracted_from_figma"
    
    # Figma 아이콘 추출기 생성
    extractor = FigmaIconExtractor(figma_token, file_key)
    
    # 아이콘 추출 실행
    if extractor.extract_icons(output_dir):
        print("🎉 Figma 아이콘 추출 완료!")
    else:
        print("❌ Figma 아이콘 추출 실패!")
        sys.exit(1)

if __name__ == "__main__":
    main()
