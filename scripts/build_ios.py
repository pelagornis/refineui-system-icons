#!/usr/bin/env python3
"""
iOS Icon Builder
추출된 SVG 아이콘들을 iOS용으로 빌드하는 스크립트
"""

import os
import json
import shutil
from pathlib import Path
from typing import Dict, List

def build_ios_icons():
    """iOS용 아이콘 빌드"""
    print("🍎 iOS 아이콘 빌드 시작...")
    
    # 메타데이터 로드
    metadata_path = "metadata/icons_ios.json"
    if not os.path.exists(metadata_path):
        print("❌ iOS 메타데이터 파일을 찾을 수 없습니다.")
        return False
    
    with open(metadata_path, 'r', encoding='utf-8') as f:
        ios_icons = json.load(f)
    
    # iOS 출력 디렉토리
    ios_output = "ios/RefineIcons/Resources/IconAssets.xcassets"
    os.makedirs(ios_output, exist_ok=True)
    
    # 아이콘별로 처리
    for icon in ios_icons:
        source_path = icon["file_path"]
        if not os.path.exists(source_path):
            print(f"⚠️  소스 파일을 찾을 수 없음: {source_path}")
            continue
        
        # iOS용 파일명 (camelCase)
        ios_filename = f"{icon['slug']}.svg"
        imageset_name = f"{icon['slug']}.imageset"
        imageset_path = os.path.join(ios_output, imageset_name)
        
        # imageset 디렉토리 생성
        os.makedirs(imageset_path, exist_ok=True)
        
        # SVG 파일 복사
        dest_path = os.path.join(imageset_path, ios_filename)
        shutil.copy2(source_path, dest_path)
        
        # Contents.json 생성
        create_contents_json(imageset_path, ios_filename)
        
        print(f"✅ 생성됨: {imageset_path}")
    
    print(f"🎉 iOS 아이콘 빌드 완료! {len(ios_icons)}개의 imageset이 생성되었습니다.")
    return True

def create_contents_json(imageset_path: str, filename: str):
    """iOS imageset용 Contents.json 생성"""
    contents = {
        "images": [
            {
                "idiom": "universal",
                "filename": filename,
                "scale": "1x"
            }
        ],
        "info": {
            "version": 1,
            "author": "xcode"
        }
    }
    
    contents_file = os.path.join(imageset_path, "Contents.json")
    with open(contents_file, 'w', encoding='utf-8') as f:
        json.dump(contents, f, indent=2)

if __name__ == "__main__":
    build_ios_icons()
