#!/usr/bin/env python3
"""
RefineUI System Icons - Figma Icon Extractor
Extracts icons from Figma and saves them to the assets folder.
Supports three modes:
  - traverse: Find icon nodes by traversing document (default)
  - cache: Use figma_cache.json to extract individual icons
  - build-cache: Traverse Figma document and build/update figma_cache.json (includes Navigation etc.)
"""

import os
import sys
import re
from pathlib import Path

# Load .env from project root
_project_root = Path(__file__).parent.parent
_env_path = _project_root / ".env"
if _env_path.exists():
    try:
        from dotenv import load_dotenv
        load_dotenv(_env_path)
    except ImportError:
        pass
import json
import requests
from pathlib import Path
from typing import Dict, List, Optional, Tuple

# Figma API allows max ~50 node IDs per images request
BATCH_SIZE = 50


def _cache_key_to_path(cache_key: str, assets_root: Path) -> Tuple[str, Path]:
    """
    Parse cache key like "Access Time_24_regular" -> (node_id_key, output_path).
    Returns folder name and full path for the SVG file.
    """
    # Format: "Icon Name_Size_style" e.g. "Access Time_24_regular", "Zoom in_16_filled"
    match = re.match(r"^(.+)_(\d+)_(regular|filled)$", cache_key)
    if not match:
        raise ValueError(f"Invalid cache key format: {cache_key}")

    name_part, size, style = match.group(1), match.group(2), match.group(3)

    # Folder name: "Access Time" -> "Access time" (first word capitalized, rest lowercase)
    parts = name_part.split()
    folder_name = " ".join([parts[0].capitalize()] + [p.lower() for p in parts[1:]]) if parts else name_part

    # Slug for filename: "Access Time" -> "access-time"
    slug = "-".join(p.lower() for p in parts) if parts else name_part.lower()

    filename = f"ic_refineui_{slug}_{size}_{style}.svg"
    file_path = assets_root / folder_name / "svg" / filename
    return folder_name, file_path


class FigmaIconExtractor:
    def __init__(self, figma_token: str, file_key: str):
        self.figma_token = figma_token
        self.file_key = file_key
        self.base_url = "https://api.figma.com/v1"
        self.headers = {
            "X-Figma-Token": figma_token
        }
    
    def get_file_info(self) -> Optional[Dict]:
        """Gets Figma file information."""
        url = f"{self.base_url}/files/{self.file_key}"
        response = requests.get(url, headers=self.headers)
        
        if response.status_code == 200:
            return response.json()
        else:
            print(f"❌ Failed to get Figma file info: {response.status_code}")
            return None
    
    def get_file_nodes(self, node_ids: List[str]) -> Optional[Dict]:
        """Gets information about specific nodes."""
        url = f"{self.base_url}/files/{self.file_key}/nodes"
        params = {"ids": ",".join(node_ids)}
        response = requests.get(url, headers=self.headers, params=params)
        
        if response.status_code == 200:
            return response.json()
        else:
            print(f"❌ Failed to get Figma node info: {response.status_code}")
            return None
    
    def get_image_urls(self, node_ids: List[str], format: str = "svg") -> Optional[Dict]:
        """Gets image URLs for nodes."""
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
            print(f"❌ Failed to get Figma image URLs: {response.status_code}")
            return None
    
    def download_icon(self, url: str, file_path: Path) -> bool:
        """Downloads an icon."""
        try:
            response = requests.get(url)
            if response.status_code == 200:
                file_path.parent.mkdir(parents=True, exist_ok=True)
                with open(file_path, 'wb') as f:
                    f.write(response.content)
                return True
            else:
                print(f"❌ Icon download failed: {response.status_code}")
                return False
        except Exception as e:
            print(f"❌ Error during icon download: {e}")
            return False
    
    def extract_icons(self, output_dir: Path) -> bool:
        """Extracts icons from Figma."""
        print("🎨 Starting icon extraction from Figma...")
        
        # 1. Get file information
        file_info = self.get_file_info()
        if not file_info:
            return False
        
        # 2. Find icon nodes (example - actual implementation needs more sophisticated logic)
        icon_nodes = self._find_icon_nodes(file_info)
        if not icon_nodes:
            print("⚠️  No icon nodes found.")
            return False
        
        print(f"📋 Found {len(icon_nodes)} icon nodes")
        
        # 3. Get image URLs
        node_ids = [node["id"] for node in icon_nodes]
        image_info = self.get_image_urls(node_ids)
        if not image_info:
            return False
        
        # 4. Download icons
        success_count = 0
        for node in icon_nodes:
            node_id = node["id"]
            node_name = node["name"]
            
            if node_id in image_info["images"]:
                image_url = image_info["images"][node_id]
                file_path = output_dir / f"{node_name}.svg"
                
                if self.download_icon(image_url, file_path):
                    success_count += 1
                    print(f"✅ {node_name} download completed")
                else:
                    print(f"❌ {node_name} download failed")
        
        print(f"🎉 Icon extraction completed: {success_count}/{len(icon_nodes)}")
        return success_count > 0
    
    def _find_icon_nodes(self, file_info: Dict) -> List[Dict]:
        """Finds icon nodes from file information."""
        # Actual implementation needs more sophisticated logic
        # Here's a simple example implementation
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
        """Checks if a node is an icon."""
        node_name = node.get("name", "").lower()
        keywords = ["icon", "ic_", "symbol", "navigation"]
        return any(keyword in node_name for keyword in keywords)

    def extract_from_cache(self, cache_path: Path, assets_root: Path) -> bool:
        """
        Extract icons using figma_cache.json.
        Cache format: { "Access Time_24_regular": { "node_id": "30:67", ... }, ... }
        """
        if not cache_path.exists():
            print(f"❌ Cache file not found: {cache_path}")
            return False

        with open(cache_path, "r", encoding="utf-8") as f:
            cache = json.load(f)

        test_limit = int(os.getenv("FIGMA_TEST_LIMIT", "0"))
        if test_limit > 0:
            items_raw = list(cache.items())[:test_limit]
            cache = dict(items_raw)
            print(f"⚠️  FIGMA_TEST_LIMIT={test_limit}: 처음 {len(cache)}개만 처리", flush=True)

        # Build list of (cache_key, node_id, output_path)
        items = []
        for cache_key, entry in cache.items():
            node_id = entry.get("node_id")
            if not node_id:
                continue
            # "48, Filled_48_filled" 같은 비정상 캐시 키 제외
            name_part = cache_key.rsplit("_", 2)[0] if "_" in cache_key else ""
            if re.match(r"^\d+,\s*\w+", name_part.strip()):
                continue
            try:
                _, file_path = _cache_key_to_path(cache_key, assets_root)
                items.append((cache_key, node_id, file_path))
            except ValueError as e:
                print(f"⚠️  Skip invalid key: {cache_key} - {e}")
                continue

        total = len(items)
        print(f"📋 figma_cache.json: {total} 아이콘 추출 예정", flush=True)

        success_count = 0
        for i in range(0, total, BATCH_SIZE):
            batch = items[i : i + BATCH_SIZE]
            node_ids = [item[1] for item in batch]
            image_info = self.get_image_urls(node_ids)
            if not image_info:
                print(f"❌ 배치 {i // BATCH_SIZE + 1} 이미지 URL 조회 실패")
                continue

            for cache_key, node_id, file_path in batch:
                if node_id not in image_info.get("images", {}):
                    print(f"⚠️  {cache_key}: 응답에 없음")
                    continue

                image_url = image_info["images"][node_id]
                if not image_url:
                    print(f"⚠️  {cache_key}: 빈 URL (노드가 비어있을 수 있음)")
                    continue

                if self.download_icon(image_url, file_path):
                    success_count += 1
                    if success_count <= 5 or success_count % 500 == 0:
                        print(f"✅ [{success_count}/{total}] {cache_key}", flush=True)
                else:
                    print(f"❌ {cache_key} 다운로드 실패")

        print(f"🎉 캐시 기반 추출 완료: {success_count}/{total}")
        return success_count > 0

    def build_cache(self, cache_path: Path) -> bool:
        """
        Figma 문서를 순회해 figma_cache.json을 생성/갱신.
        System Icons > Content > Column > Row 구조에서 아이콘(Home, Navigation 등) 수집.
        """
        file_info = self.get_file_info()
        if not file_info:
            return False

        cache = {}
        if cache_path.exists():
            with open(cache_path, "r", encoding="utf-8") as f:
                cache = json.load(f)
            print(f"📂 기존 캐시 로드: {len(cache)} 항목", flush=True)

        def find_rows(node):
            if node.get("name") == "Row":
                return [node]
            rows = []
            for c in node.get("children", []):
                rows.extend(find_rows(c))
            return rows

        rows = find_rows(file_info.get("document", {}))
        added = 0

        for row in rows:
            for icon_frame in row.get("children", []):
                icon_name = icon_frame.get("name", "")
                if not icon_name:
                    continue
                # "48, Filled" 같은 비정상 프레임명 제외 (Size/Theme 헤더 등)
                if re.match(r"^\d+,\s*\w+", icon_name.strip()):
                    continue
                for variant in icon_frame.get("children", []):
                    vname = variant.get("name", "")
                    # "Size=24, Theme=Regular" or "Size=24, Theme=Filled"
                    m = re.match(r"Size=(\d+),\s*Theme=(Regular|Filled)", vname, re.I)
                    if not m:
                        continue
                    size, style = m.group(1), m.group(2).lower()
                    cache_key = f"{icon_name}_{size}_{style}"
                    node_id = variant.get("id")
                    if not node_id:
                        continue
                    if cache_key not in cache or cache[cache_key].get("node_id") != node_id:
                        cache[cache_key] = {
                            "node_id": node_id,
                            "file_hash": "",
                            "last_modified": "",
                        }
                        added += 1

        # 비정상 캐시 키 제거 ("48, Filled_48_filled" 등)
        invalid_keys = [k for k in cache if re.match(r"^\d+,\s*\w+_", k)]
        for k in invalid_keys:
            del cache[k]
        if invalid_keys:
            print(f"🗑️  비정상 캐시 항목 제거: {len(invalid_keys)}개", flush=True)

        with open(cache_path, "w", encoding="utf-8") as f:
            json.dump(cache, f, indent=2, ensure_ascii=False)

        print(f"✅ figma_cache.json 저장: 총 {len(cache)} 항목 (신규/갱신 {added}개)", flush=True)
        return True


def main():
    """Main function"""
    use_cache = "--cache" in sys.argv or "-c" in sys.argv
    build_cache = "--build-cache" in sys.argv or "-b" in sys.argv

    # Get Figma token from environment variables
    figma_token = os.getenv("FIGMA_TOKEN")
    if not figma_token:
        print("❌ FIGMA_TOKEN environment variable not set.")
        print("Set the environment variable or create a .env file.")
        sys.exit(1)

    # Figma file key
    file_key = os.getenv("FIGMA_FILE_KEY", "your_file_key_here")
    if file_key == "your_file_key_here":
        print("❌ FIGMA_FILE_KEY environment variable not set.")
        sys.exit(1)

    project_root = Path(__file__).parent.parent
    extractor = FigmaIconExtractor(figma_token, file_key)

    if build_cache:
        cache_path = project_root / "figma_cache.json"
        if extractor.build_cache(cache_path):
            print("🎉 figma_cache.json 빌드 완료! (Navigation 등 포함)")
        else:
            sys.exit(1)
    else:
        # 기본: 캐시 기반 추출 (extracted_from_figma 생성 안 함)
        cache_path = project_root / "figma_cache.json"
        assets_root = project_root / "assets"
        if extractor.extract_from_cache(cache_path, assets_root):
            print("🎉 Figma 캐시 기반 추출 완료!")
        else:
            print("❌ Figma 캐시 기반 추출 실패!")
            sys.exit(1)

if __name__ == "__main__":
    main()
