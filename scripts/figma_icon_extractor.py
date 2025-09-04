#!/usr/bin/env python3
"""
RefineUI System Icons - Figma Icon Extractor
Extracts icons from Figma and saves them to the assets folder.
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
        # Actual implementation needs more sophisticated logic
        node_name = node.get("name", "").lower()
        return any(keyword in node_name for keyword in ["icon", "ic_", "symbol"])

def main():
    """Main function"""
    # Get Figma token from environment variables
    figma_token = os.getenv("FIGMA_TOKEN")
    if not figma_token:
        print("❌ FIGMA_TOKEN environment variable not set.")
        print("Set the environment variable or create a .env file.")
        sys.exit(1)
    
    # Figma file key (example)
    file_key = os.getenv("FIGMA_FILE_KEY", "your_file_key_here")
    
    # Output directory
    project_root = Path(__file__).parent.parent
    output_dir = project_root / "assets" / "extracted_from_figma"
    
    # Create Figma icon extractor
    extractor = FigmaIconExtractor(figma_token, file_key)
    
    # Execute icon extraction
    if extractor.extract_icons(output_dir):
        print("🎉 Figma icon extraction completed!")
    else:
        print("❌ Figma icon extraction failed!")
        sys.exit(1)

if __name__ == "__main__":
    main()
