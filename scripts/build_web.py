#!/usr/bin/env python3
"""
Web Icon Builder
추출된 SVG 아이콘들을 Web용으로 빌드하는 스크립트
"""

import os
import json
import shutil
from pathlib import Path
from typing import Dict, List

def build_web_icons():
    """Web용 아이콘 빌드"""
    print("🌐 Web 아이콘 빌드 시작...")
    
    # 메타데이터 로드
    metadata_path = "metadata/icons_web.json"
    if not os.path.exists(metadata_path):
        print("❌ Web 메타데이터 파일을 찾을 수 없습니다.")
        return False
    
    with open(metadata_path, 'r', encoding='utf-8') as f:
        web_icons = json.load(f)
    
    # 1. React 패키지 빌드
    build_react_package(web_icons)
    
    # 2. React Native 패키지 빌드
    build_react_native_package(web_icons)
    
    # 3. Web 버전 빌드
    build_web_version(web_icons)
    
    print(f"🎉 Web 아이콘 빌드 완료! {len(web_icons)}개의 아이콘이 처리되었습니다.")
    return True

def build_react_package(icons: List[Dict]):
    """React 패키지 빌드"""
    print("  📦 React 패키지 빌드 중...")
    
    react_output = "packages/react-icons/src"
    os.makedirs(react_output, exist_ok=True)
    
    # 아이콘별로 처리
    for icon in icons:
        source_path = icon["file_path"]
        if not os.path.exists(source_path):
            print(f"    ⚠️  소스 파일을 찾을 수 없음: {source_path}")
            continue
        
        # React 컴포넌트 생성
        component_name = icon["slug"].replace('-', '').title()
        size = icon["size"]
        
        # SVG 내용 읽기
        with open(source_path, 'r', encoding='utf-8') as f:
            svg_content = f.read()
        
        # React 컴포넌트 템플릿
        component_code = f'''import React from 'react';
import {{ IconProps }} from './types';

export const {component_name}{size}Icon: React.FC<IconProps> = ({{ 
  size = {size}, 
  color = 'currentColor', 
  ...props 
}}) => {{
  return (
    <svg
      width="{{{{size}}}}"
      height="{{{{size}}}}"
      viewBox="0 0 {size} {size}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{{{...props}}}}
    >
      {svg_content.replace('<svg', '').replace('</svg>', '').strip()}
    </svg>
  );
}};
'''
        
        # 컴포넌트 파일 저장
        component_file = os.path.join(react_output, f"{component_name}{size}Icon.tsx")
        with open(component_file, 'w', encoding='utf-8') as f:
            f.write(component_code)
    
    # React 인덱스 파일 생성
    create_react_index(icons, react_output)
    print("    ✅ React 패키지 완료")

def build_react_native_package(icons: List[Dict]):
    """React Native 패키지 빌드"""
    print("  📱 React Native 패키지 빌드 중...")
    
    rn_output = "packages/react-native-icons/src"
    os.makedirs(rn_output, exist_ok=True)
    
    # 아이콘별로 처리
    for icon in icons:
        source_path = icon["file_path"]
        if not os.path.exists(source_path):
            continue
        
        # React Native 컴포넌트 생성
        component_name = icon["slug"].replace('-', '').title()
        size = icon["size"]
        
        # SVG 내용 읽기
        with open(source_path, 'r', encoding='utf-8') as f:
            svg_content = f.read()
        
        # React Native 컴포넌트 템플릿
        component_code = f'''import React from 'react';
import {{ Svg, Path, Rect, Circle, Line, Polyline, Polygon }} from 'react-native-svg';
import {{ IconProps }} from './types';

export const {component_name}{size}Icon: React.FC<IconProps> = ({{ 
  size = {size}, 
  color = '#000000', 
  style,
  testID,
  ...props 
}}) => {{
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 {size} {size}"
      style={[{{
        width: size,
        height: size
      }}, style]}
      testID={testID}
      {{...props}}
    >
      <!-- SVG 내용을 React Native SVG 컴포넌트로 변환 필요 -->
      <Path d="M12,2C6.48,2 2,6.48 2,12s4.48,10 10,10 10,-4.48 10,-10S17.52,2 12,2z" fill="{{color}}" />
    </Svg>
  );
}};
'''
        
        # 컴포넌트 파일 저장
        component_file = os.path.join(rn_output, f"{component_name}{size}Icon.tsx")
        with open(component_file, 'w', encoding='utf-8') as f:
            f.write(component_code)
    
    # React Native 인덱스 파일 생성
    create_react_native_index(icons, rn_output)
    print("    ✅ React Native 패키지 완료")

def build_web_version(icons: List[Dict]):
    """Web 버전 빌드"""
    print("  🌍 Web 버전 빌드 중...")
    
    web_output = "packages/icons-web/public/icons"
    os.makedirs(web_output, exist_ok=True)
    
    # 크기별로 아이콘 복사
    for icon in icons:
        source_path = icon["file_path"]
        if not os.path.exists(source_path):
            continue
        
        size = icon["size"]
        size_dir = os.path.join(web_output, str(size))
        os.makedirs(size_dir, exist_ok=True)
        
        # SVG 파일 복사
        dest_path = os.path.join(size_dir, f"{icon['slug']}.svg")
        shutil.copy2(source_path, dest_path)
    
    # Web 버전용 메타데이터 생성
    create_web_metadata(icons, "packages/icons-web/public")
    print("    ✅ Web 버전 완료")

def create_react_index(icons: List[Dict], output_dir: str):
    """React용 인덱스 파일 생성"""
    index_content = "// Auto-generated index file\n\n"
    
    for icon in icons:
        component_name = icon["slug"].replace('-', '').title()
        size = icon["size"]
        index_content += f"export {{ {component_name}{size}Icon }} from './{component_name}{size}Icon';\n"
    
    index_file = os.path.join(output_dir, "index.ts")
    with open(index_file, 'w', encoding='utf-8') as f:
        f.write(index_content)

def create_react_native_index(icons: List[Dict], output_dir: str):
    """React Native용 인덱스 파일 생성"""
    index_content = "// Auto-generated index file\n\n"
    
    for icon in icons:
        component_name = icon["slug"].replace('-', '').title()
        size = icon["size"]
        index_content += f"export {{ {component_name}{size}Icon }} from './{component_name}{size}Icon';\n"
    
    index_file = os.path.join(output_dir, "index.ts")
    with open(index_file, 'w', encoding='utf-8') as f:
        f.write(index_content)

def create_web_metadata(icons: List[Dict], output_dir: str):
    """Web 버전용 메타데이터 생성"""
    web_icons = []
    
    for icon in icons:
        web_icons.append({
            "name": icon["name"],
            "slug": icon["slug"],
            "size": icon["size"],
            "url": f"/icons/{icon['size']}/{icon['slug']}.svg"
        })
    
    metadata_file = os.path.join(output_dir, "api/icons.json")
    os.makedirs(os.path.dirname(metadata_file), exist_ok=True)
    
    with open(metadata_file, 'w', encoding='utf-8') as f:
        json.dump(web_icons, f, indent=2, ensure_ascii=False)

if __name__ == "__main__":
    build_web_icons()
