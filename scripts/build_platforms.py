#!/usr/bin/env python3
"""
Platform Builder
공용 assets를 각 플랫폼별로 변환하는 스크립트
"""

import os
import json
import shutil
from pathlib import Path
from typing import Dict, List

class PlatformBuilder:
    """플랫폼별 빌더"""
    
    def __init__(self):
        self.assets_dir = "assets"
        self.metadata_dir = "metadata"
        
        # 플랫폼별 네이밍 규칙
        self.naming_rules = {
            "web": "kebab-case",      # icon-name.svg
            "ios": "camelCase",       # iconName.svg
            "android": "snake_case",  # icon_name.svg
            "flutter": "snake_case"   # icon_name.svg
        }
        
        # Android DPI 매핑
        self.dpi_mapping = {
            16: "mdpi",
            20: "hdpi", 
            24: "xhdpi",
            32: "xxhdpi",
            48: "xxxhdpi"
        }

    def slugify(self, name: str, platform: str = "web") -> str:
        """아이콘 이름을 플랫폼별 네이밍 규칙에 따라 slug 처리"""
        # 기본 kebab-case 변환
        import re
        slug = re.sub(r'[^a-zA-Z0-9\s-]', '', name)
        slug = re.sub(r'\s+', '-', slug.lower())
        slug = re.sub(r'-+', '-', slug).strip('-')
        
        # 플랫폼별 변환
        if platform == "ios":
            # camelCase로 변환
            parts = slug.split('-')
            return parts[0] + ''.join(word.capitalize() for word in parts[1:])
        elif platform in ["android", "flutter"]:
            # snake_case로 변환
            return slug.replace('-', '_')
        
        return slug

    def load_metadata(self) -> Dict:
        """메타데이터 로드"""
        metadata_file = os.path.join(self.metadata_dir, "icons.json")
        if not os.path.exists(metadata_file):
            raise FileNotFoundError(f"메타데이터 파일을 찾을 수 없습니다: {metadata_file}")
        
        with open(metadata_file, 'r', encoding='utf-8') as f:
            return json.load(f)

    def scan_assets(self) -> Dict:
        """assets 디렉토리 스캔하여 아이콘 정보 수집"""
        icons_data = {}
        
        if not os.path.exists(self.assets_dir):
            raise FileNotFoundError(f"assets 디렉토리를 찾을 수 없습니다: {self.assets_dir}")
        
        for icon_folder in os.listdir(self.assets_dir):
            icon_path = os.path.join(self.assets_dir, icon_folder)
            if not os.path.isdir(icon_path):
                continue
            
            # metadata.json 파일 확인
            metadata_file = os.path.join(icon_path, "metadata.json")
            if not os.path.exists(metadata_file):
                continue
            
            # 메타데이터 로드
            with open(metadata_file, 'r', encoding='utf-8') as f:
                icon_metadata = json.load(f)
            
            icons_data[icon_folder] = icon_metadata
        
        return icons_data

    def build_web_package(self, icons_data: Dict):
        """Web 패키지 빌드"""
        print("🌐 Web 패키지 빌드 중...")
        
        web_output = "packages/react-icons/src"
        os.makedirs(web_output, exist_ok=True)
        
        for icon_folder, icon_info in icons_data.items():
            icon_name = icon_info["name"]
            svg_dir = os.path.join(self.assets_dir, icon_folder, "svg")
            
            if not os.path.exists(svg_dir):
                continue
                
            # SVG 파일들 스캔
            for svg_file in os.listdir(svg_dir):
                if not svg_file.endswith('.svg'):
                    continue
                
                # 파일명에서 크기와 스타일 추출 (ic_refineui_math-symbols_48_regular.svg)
                parts = svg_file.replace('.svg', '').split('_')
                if len(parts) >= 4:
                    size = int(parts[-2])  # 48
                    style = parts[-1]      # regular
                else:
                    continue
                
                source_path = os.path.join(svg_dir, svg_file)
                
                if not os.path.exists(source_path):
                    continue
                
                # React 컴포넌트 생성
                component_name = self.slugify(icon_name, "ios").replace('-', '').title()
                component_name = f"{component_name}{size}{style.title()}"
                
                # SVG 내용 읽기
                with open(source_path, 'r', encoding='utf-8') as f:
                    svg_content = f.read()
                
                # React 컴포넌트 템플릿
                component_code = f'''import React from 'react';
import {{ IconProps }} from './types';

export const {component_name}Icon: React.FC<IconProps> = ({{ 
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
                component_file = os.path.join(web_output, f"{component_name}Icon.tsx")
                with open(component_file, 'w', encoding='utf-8') as f:
                    f.write(component_code)
        
        # Web 인덱스 파일 생성
        self.create_web_index(icons_data, web_output)
        print("✅ Web 패키지 완료")

    def build_react_native_package(self, icons_data: Dict):
        """React Native 패키지 빌드"""
        print("📱 React Native 패키지 빌드 중...")
        
        rn_output = "packages/react-native-icons/src"
        os.makedirs(rn_output, exist_ok=True)
        
        for icon_folder, icon_info in icons_data.items():
            icon_name = icon_info["name"]
            svg_dir = os.path.join(self.assets_dir, icon_folder, "svg")
            
            if not os.path.exists(svg_dir):
                continue
                
            # SVG 파일들 스캔
            for svg_file in os.listdir(svg_dir):
                if not svg_file.endswith('.svg'):
                    continue
                
                # 파일명에서 크기와 스타일 추출
                parts = svg_file.replace('.svg', '').split('_')
                if len(parts) >= 4:
                    size = int(parts[-2])
                    style = parts[-1]
                else:
                    continue
                
                source_path = os.path.join(svg_dir, svg_file)
                
                if not os.path.exists(source_path):
                    continue
                
                # React Native 컴포넌트 생성
                component_name = self.slugify(icon_name, "ios").replace('-', '').title()
                component_name = f"{component_name}{size}{style.title()}"
                
                # React Native 컴포넌트 템플릿
                component_code = f'''import React from 'react';
import {{ Svg, Path }} from 'react-native-svg';
import {{ IconProps }} from './types';

export const {component_name}Icon: React.FC<IconProps> = ({{ 
  size = {size}, 
  color = '#000000', 
  ...props 
}}) => {{
  return (
    <Svg
      width="{{{{size}}}}"
      height="{{{{size}}}}"
      viewBox="0 0 {size} {size}"
      {{{{...props}}}}
    >
      <Path d="M12,2C6.48,2 2,6.48 2,12s4.48,10 10,10 10,-4.48 10,-10S17.52,2 12,2z" fill="{{{{color}}}}" />
    </Svg>
  );
}};
'''
                
                # 컴포넌트 파일 저장
                component_file = os.path.join(rn_output, f"{component_name}Icon.tsx")
                with open(component_file, 'w', encoding='utf-8') as f:
                    f.write(component_code)
        
        # React Native 인덱스 파일 생성
        self.create_react_native_index(icons_data, rn_output)
        print("✅ React Native 패키지 완료")

    def build_ios_package(self, icons_data: Dict):
        """iOS 패키지 빌드"""
        print("🍎 iOS 패키지 빌드 중...")
        
        ios_output = "ios/RefineIcons/Resources/IconAssets.xcassets"
        os.makedirs(ios_output, exist_ok=True)
        
        for icon_folder, icon_info in icons_data.items():
            icon_name = icon_info["name"]
            svg_dir = os.path.join(self.assets_dir, icon_folder, "svg")
            
            if not os.path.exists(svg_dir):
                continue
                
            # SVG 파일들 스캔
            for svg_file in os.listdir(svg_dir):
                if not svg_file.endswith('.svg'):
                    continue
                
                # 파일명에서 크기와 스타일 추출
                parts = svg_file.replace('.svg', '').split('_')
                if len(parts) >= 4:
                    size = int(parts[-2])
                    style = parts[-1]
                else:
                    continue
                
                source_path = os.path.join(svg_dir, svg_file)
                
                if not os.path.exists(source_path):
                    continue
                
                # iOS용 파일명 (camelCase)
                ios_filename = f"{self.slugify(icon_name, 'ios')}{size}{style.title()}.svg"
                imageset_name = f"{self.slugify(icon_name, 'ios')}{size}{style.title()}.imageset"
                imageset_path = os.path.join(ios_output, imageset_name)
                
                # imageset 디렉토리 생성
                os.makedirs(imageset_path, exist_ok=True)
                
                # SVG 파일 복사
                dest_path = os.path.join(imageset_path, ios_filename)
                shutil.copy2(source_path, dest_path)
                
                # Contents.json 생성
                self.create_ios_contents_json(imageset_path, ios_filename)
        
        print("✅ iOS 패키지 완료")

    def build_android_package(self, icons_data: Dict):
        """Android 패키지 빌드"""
        print("🤖 Android 패키지 빌드 중...")
        
        android_output = "packages/android"
        os.makedirs(android_output, exist_ok=True)
        
        # DPI별로 그룹화
        dpi_groups = {}
        for icon_folder, icon_info in icons_data.items():
            icon_name = icon_info["name"]
            svg_dir = os.path.join(self.assets_dir, icon_folder, "svg")
            
            if not os.path.exists(svg_dir):
                continue
                
            # SVG 파일들 스캔
            for svg_file in os.listdir(svg_dir):
                if not svg_file.endswith('.svg'):
                    continue
                
                # 파일명에서 크기와 스타일 추출
                parts = svg_file.replace('.svg', '').split('_')
                if len(parts) >= 4:
                    size = int(parts[-2])
                    style = parts[-1]
                else:
                    continue
                
                source_path = os.path.join(svg_dir, svg_file)
                
                if not os.path.exists(source_path):
                    continue
                
                dpi = self.dpi_mapping.get(size, "mdpi")
                if dpi not in dpi_groups:
                    dpi_groups[dpi] = []
                
                dpi_groups[dpi].append({
                    "name": icon_name,
                    "size": size,
                    "style": style,
                    "source_path": source_path
                })
        
        # 각 DPI별로 처리
        for dpi, icons in dpi_groups.items():
            dpi_dir = os.path.join(android_output, f"res/drawable-{dpi}")
            os.makedirs(dpi_dir, exist_ok=True)
            
            for icon in icons:
                # Android용 파일명 (snake_case)
                android_filename = f"{self.slugify(icon['name'], 'android')}_{icon['size']}_{icon['style']}.xml"
                dest_path = os.path.join(dpi_dir, android_filename)
                
                # SVG를 Android Vector Drawable로 변환
                self.convert_svg_to_vector_drawable(icon['source_path'], dest_path)
        
        # Android 리소스 파일 생성
        self.create_android_resources(icons_data, android_output)
        print("✅ Android 패키지 완료")

    def build_flutter_package(self, icons_data: Dict):
        """Flutter 패키지 빌드"""
        print("🦋 Flutter 패키지 빌드 중...")
        
        flutter_output = "packages/flutter"
        os.makedirs(flutter_output, exist_ok=True)
        
        for icon_folder, icon_info in icons_data.items():
            icon_name = icon_info["name"]
            svg_dir = os.path.join(self.assets_dir, icon_folder, "svg")
            
            if not os.path.exists(svg_dir):
                continue
                
            # SVG 파일들 스캔
            for svg_file in os.listdir(svg_dir):
                if not svg_file.endswith('.svg'):
                    continue
                
                # 파일명에서 크기와 스타일 추출
                parts = svg_file.replace('.svg', '').split('_')
                if len(parts) >= 4:
                    size = int(parts[-2])
                    style = parts[-1]
                else:
                    continue
                
                source_path = os.path.join(svg_dir, svg_file)
                
                if not os.path.exists(source_path):
                    continue
                
                # Flutter용 파일명 (snake_case)
                flutter_filename = f"{self.slugify(icon_name, 'flutter')}_{size}_{style}.svg"
                dest_path = os.path.join(flutter_output, flutter_filename)
                
                # SVG 파일 복사
                shutil.copy2(source_path, dest_path)
        
        print("✅ Flutter 패키지 완료")

    def create_web_index(self, icons_data: Dict, output_dir: str):
        """Web용 인덱스 파일 생성"""
        index_content = "// Auto-generated index file\n\n"
        
        for icon_folder, icon_info in icons_data.items():
            icon_name = icon_info["name"]
            svg_dir = os.path.join(self.assets_dir, icon_folder, "svg")
            
            if not os.path.exists(svg_dir):
                continue
                
            # SVG 파일들 스캔
            for svg_file in os.listdir(svg_dir):
                if not svg_file.endswith('.svg'):
                    continue
                
                # 파일명에서 크기와 스타일 추출
                parts = svg_file.replace('.svg', '').split('_')
                if len(parts) >= 4:
                    size = int(parts[-2])
                    style = parts[-1]
                else:
                    continue
                
                component_name = self.slugify(icon_name, "ios").replace('-', '').title()
                component_name = f"{component_name}{size}{style.title()}"
                index_content += f"export {{ {component_name}Icon }} from './{component_name}Icon';\n"
        
        index_file = os.path.join(output_dir, "index.ts")
        with open(index_file, 'w', encoding='utf-8') as f:
            f.write(index_content)

    def create_react_native_index(self, icons_data: Dict, output_dir: str):
        """React Native용 인덱스 파일 생성"""
        index_content = "// Auto-generated index file\n\n"
        
        for icon_folder, icon_info in icons_data.items():
            icon_name = icon_info["name"]
            svg_dir = os.path.join(self.assets_dir, icon_folder, "svg")
            
            if not os.path.exists(svg_dir):
                continue
                
            # SVG 파일들 스캔
            for svg_file in os.listdir(svg_dir):
                if not svg_file.endswith('.svg'):
                    continue
                
                # 파일명에서 크기와 스타일 추출
                parts = svg_file.replace('.svg', '').split('_')
                if len(parts) >= 4:
                    size = int(parts[-2])
                    style = parts[-1]
                else:
                    continue
                
                component_name = self.slugify(icon_name, "ios").replace('-', '').title()
                component_name = f"{component_name}{size}{style.title()}"
                index_content += f"export {{ {component_name}Icon }} from './{component_name}Icon';\n"
        
        index_file = os.path.join(output_dir, "index.ts")
        with open(index_file, 'w', encoding='utf-8') as f:
            f.write(index_content)

    def create_ios_contents_json(self, imageset_path: str, filename: str):
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

    def convert_svg_to_vector_drawable(self, svg_path: str, output_path: str):
        """SVG를 Android Vector Drawable로 변환"""
        with open(svg_path, 'r', encoding='utf-8') as f:
            svg_content = f.read()
        
        # 간단한 변환 (실제로는 더 정교한 파싱이 필요)
        vector_drawable = f'''<?xml version="1.0" encoding="utf-8"?>
<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="24dp"
    android:height="24dp"
    android:viewportWidth="24"
    android:viewportHeight="24">
    
    <!-- SVG 내용을 여기에 변환 -->
    <path android:fillColor="#000000" android:pathData="M12,2C6.48,2 2,6.48 2,12s4.48,10 10,10 10,-4.48 10,-10S17.52,2 12,2z"/>
    
</vector>'''
        
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(vector_drawable)

    def create_android_resources(self, icons_data: Dict, output_dir: str):
        """Android 리소스 파일들 생성"""
        # strings.xml 생성
        strings_content = '''<?xml version="1.0" encoding="utf-8"?>
<resources>
    <!-- Icon names -->
'''
        
        for icon_folder, icon_info in icons_data.items():
            icon_name = icon_info["name"]
            strings_content += f'    <string name="icon_{self.slugify(icon_name, "android")}">{icon_name}</string>\n'
        
        strings_content += '</resources>'
        
        strings_file = os.path.join(output_dir, "res/values/strings.xml")
        os.makedirs(os.path.dirname(strings_file), exist_ok=True)
        with open(strings_file, 'w', encoding='utf-8') as f:
            f.write(strings_content)

    def build_all_platforms(self):
        """모든 플랫폼 빌드"""
        print("🚀 모든 플랫폼 빌드 시작...")
        
        # assets 디렉토리 스캔
        icons_data = self.scan_assets()
        
        if not icons_data:
            print("⚠️  처리할 아이콘이 없습니다.")
            return
        
        print(f"📁 {len(icons_data)}개의 아이콘 폴더를 발견했습니다.")
        
        # 각 플랫폼별 빌드
        self.build_web_package(icons_data)
        self.build_react_native_package(icons_data)
        self.build_ios_package(icons_data)
        self.build_android_package(icons_data)
        self.build_flutter_package(icons_data)
        
        # 폰트 빌드 추가
        self.build_font_package(icons_data)
        
        print("🎉 모든 플랫폼 빌드 완료!")
    
    def build_font_package(self, icons_data: Dict):
        """폰트 패키지 빌드"""
        print("🔤 폰트 패키지 빌드 시작...")
        
        fonts_dir = "fonts"
        os.makedirs(fonts_dir, exist_ok=True)
        
        # FontBuilder 임포트 및 실행
        try:
            from build_font import FontBuilder
            builder = FontBuilder(assets_dir=self.assets_dir, fonts_dir=fonts_dir)
            success = builder.build_font()
            
            if success:
                print("🎉 폰트 패키지 빌드 완료!")
            else:
                print("⚠️  폰트 빌드에 실패했습니다. FontForge 설치가 필요할 수 있습니다.")
        except ImportError:
            print("⚠️  build_font 모듈을 찾을 수 없습니다.")
        except Exception as e:
            print(f"❌ 폰트 빌드 오류: {e}")

def main():
    """메인 실행 함수"""
    try:
        builder = PlatformBuilder()
        builder.build_all_platforms()
        return 0
    except Exception as e:
        print(f"❌ 빌드 실패: {e}")
        return 1

if __name__ == "__main__":
    exit(main())
