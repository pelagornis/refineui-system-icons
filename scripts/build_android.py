#!/usr/bin/env python3
"""
Android Icon Builder
추출된 SVG 아이콘들을 Android용으로 빌드하는 스크립트
"""

import os
import json
import shutil
from pathlib import Path
from typing import Dict, List

def build_android_icons():
    """Android용 아이콘 빌드"""
    print("🤖 Android 아이콘 빌드 시작...")
    
    # 메타데이터 로드
    metadata_path = "metadata/icons_android.json"
    if not os.path.exists(metadata_path):
        print("❌ Android 메타데이터 파일을 찾을 수 없습니다.")
        return False
    
    with open(metadata_path, 'r', encoding='utf-8') as f:
        android_icons = json.load(f)
    
    # Android 출력 디렉토리
    android_output = "packages/android"
    os.makedirs(android_output, exist_ok=True)
    
    # DPI별로 그룹화
    dpi_groups = {}
    for icon in android_icons:
        size = icon["size"]
        dpi = get_dpi_for_size(size)
        if dpi not in dpi_groups:
            dpi_groups[dpi] = []
        dpi_groups[dpi].append(icon)
    
    # 각 DPI별로 처리
    for dpi, icons in dpi_groups.items():
        dpi_dir = os.path.join(android_output, f"res/drawable-{dpi}")
        os.makedirs(dpi_dir, exist_ok=True)
        
        for icon in icons:
            source_path = icon["file_path"]
            if not os.path.exists(source_path):
                print(f"⚠️  소스 파일을 찾을 수 없음: {source_path}")
                continue
            
            # Android용 파일명 (snake_case)
            android_filename = f"{icon['slug']}.xml"
            dest_path = os.path.join(dpi_dir, android_filename)
            
            # SVG를 Android Vector Drawable로 변환
            convert_svg_to_vector_drawable(source_path, dest_path)
            print(f"✅ 생성됨: {dest_path}")
    
    # Android 리소스 파일 생성
    create_android_resources(android_icons, android_output)
    
    print(f"🎉 Android 아이콘 빌드 완료!")
    return True

def get_dpi_for_size(size: int) -> str:
    """크기에 따른 DPI 반환"""
    dpi_mapping = {
        16: "mdpi",
        20: "hdpi",
        24: "xhdpi", 
        32: "xxhdpi",
        48: "xxxhdpi"
    }
    return dpi_mapping.get(size, "mdpi")

def convert_svg_to_vector_drawable(svg_path: str, output_path: str):
    """SVG를 Android Vector Drawable로 변환"""
    with open(svg_path, 'r', encoding='utf-8') as f:
        svg_content = f.read()
    
    # SVG 내용에서 path, rect 등의 요소 추출
    # 간단한 변환 (실제로는 더 정교한 파싱이 필요)
    vector_drawable = f'''<?xml version="1.0" encoding="utf-8"?>
<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="24dp"
    android:height="24dp"
    android:viewportWidth="24"
    android:viewportHeight="24">
    
    <!-- SVG 내용을 여기에 변환 -->
    {extract_svg_elements(svg_content)}
    
</vector>'''
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(vector_drawable)

def extract_svg_elements(svg_content: str) -> str:
    """SVG에서 주요 요소들 추출"""
    # 실제 구현에서는 SVG 파서를 사용해야 함
    # 여기서는 간단한 예시
    if '<path' in svg_content:
        return '    <path android:fillColor="#000000" android:pathData="M12,2C6.48,2 2,6.48 2,12s4.48,10 10,10 10,-4.48 10,-10S17.52,2 12,2z"/>'
    elif '<rect' in svg_content:
        return '    <rect android:fillColor="#000000" android:width="24" android:height="24"/>'
    else:
        return '    <!-- SVG 변환 필요 -->'

def create_android_resources(icons: List[Dict], output_dir: str):
    """Android 리소스 파일들 생성"""
    # strings.xml 생성
    strings_content = '''<?xml version="1.0" encoding="utf-8"?>
<resources>
    <!-- Icon names -->
'''
    
    for icon in icons:
        strings_content += f'    <string name="icon_{icon["slug"]}">{icon["name"]}</string>\n'
    
    strings_content += '</resources>'
    
    strings_file = os.path.join(output_dir, "res/values/strings.xml")
    os.makedirs(os.path.dirname(strings_file), exist_ok=True)
    with open(strings_file, 'w', encoding='utf-8') as f:
        f.write(strings_content)
    
    print(f"📄 Android 리소스 파일 생성: {strings_file}")

if __name__ == "__main__":
    build_android_icons()
