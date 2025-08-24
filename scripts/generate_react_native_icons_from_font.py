#!/usr/bin/env python3
"""
React Native Icons Generator from Font Files
폰트 파일에서 아이콘 데이터를 추출하여 React Native 컴포넌트를 생성합니다.
"""

import json
import os
import re
from pathlib import Path
from typing import Dict, List, Tuple

class ReactNativeIconsGenerator:
    def __init__(self):
        self.root_dir = Path(__file__).parent.parent
        self.fonts_dir = self.root_dir / "fonts"
        self.packages_dir = self.root_dir / "packages"
        
    def load_icon_mapping(self) -> Dict[str, Dict]:
        """icon-mapping.json에서 아이콘 메타데이터를 로드합니다."""
        mapping_path = self.fonts_dir / "icon-mapping.json"
        
        if not mapping_path.exists():
            print(f"icon-mapping.json 파일을 찾을 수 없습니다: {mapping_path}")
            return {}
            
        with open(mapping_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    
    def generate_react_native_component(self, icon_name: str, unicode_char: str, 
                                      icon_data: Dict, style: str) -> str:
        """개별 React Native 아이콘 컴포넌트를 생성합니다."""
        
        # 아이콘 이름을 PascalCase로 변환
        component_name = self.to_pascal_case(icon_name)
        
        # 스타일에 따른 접미사 추가
        style_suffix = "Filled" if style == "filled" else "Regular"
        component_name = f"{component_name}{style_suffix}Icon"
        
        # SVG path 데이터가 있으면 사용, 없으면 유니코드 문자 사용
        if 'svg_path' in icon_data and icon_data['svg_path']:
            svg_content = icon_data['svg_path']
            return f'''export const {component_name}: React.FC<IconProps> = ({{
  size = 24,
  color = 'black',
  ...props
}}) => {{
  return (
    <Svg
      width={{size}}
      height={{size}}
      viewBox="0 0 24 24"
      fill="none"
      {{...props}}
    >
      {svg_content}
    </Svg>
  );
}};'''
        else:
            # 폰트 기반 아이콘 (유니코드 문자 사용)
            return f'''export const {component_name}: React.FC<IconProps> = ({{
  size = 24,
  color = 'black',
  style,
  ...props
}}) => {{
  return (
    <Text
      style={[
        {{
          fontSize: size,
          color: color,
          fontFamily: 'refineui-system-icons-{style}',
        }},
        style
      ]}
      {{...props}}
    >
      {unicode_char}
    </Text>
  );
}};'''
    
    def to_pascal_case(self, name: str) -> str:
        """케밥 케이스를 파스칼 케이스로 변환합니다."""
        return ''.join(word.capitalize() for word in name.split('-'))
    
    def generate_index_file(self, icons_data: Dict[str, Dict], style: str) -> str:
        """모든 아이콘을 export하는 index.ts 파일을 생성합니다."""
        
        exports = []
        imports = []
        
        for icon_name, icon_info in icons_data.items():
            unicode_char = chr(icon_info['unicode'])
            component_name = self.to_pascal_case(icon_name)
            style_suffix = "Filled" if style == "filled" else "Regular"
            full_component_name = f"{component_name}{style_suffix}Icon"
            
            # 컴포넌트 정의 추가
            component_code = self.generate_react_native_component(
                icon_name, unicode_char, icon_info, style
            )
            imports.append(component_code)
            
            # export 추가
            exports.append(f"export {{ {full_component_name} }};")
        
        # 타입 정의
        types = '''import { ViewStyle, TextStyle } from 'react-native';

export interface IconProps {
  size?: number;
  color?: string;
  style?: ViewStyle | TextStyle;
}'''

        # 필요한 import 추가
        if any('Svg' in code for code in imports):
            imports.insert(0, "import Svg, { Path } from 'react-native-svg';")
        
        if any('Text' in code for code in imports):
            imports.insert(0, "import { Text } from 'react-native';")

        return f'''import React from 'react';
{types}

// Icon Components
{chr(10).join(imports)}

// Exports
{chr(10).join(exports)}
'''
    
    def generate_react_native_package(self, style: str = "regular"):
        """React Native 패키지를 생성합니다."""
        
        # 아이콘 매핑 로드
        icon_mapping = self.load_icon_mapping()
        
        if not icon_mapping:
            print("아이콘 매핑을 로드할 수 없습니다.")
            return
        
        # 스타일에 따른 아이콘 필터링
        filtered_icons = {}
        for icon_key, icon_data in icon_mapping.get('icons', {}).items():
            if icon_data.get('style') == style:
                # 아이콘 이름을 키로 사용 (size 제거)
                icon_name = icon_data['name'].lower().replace(' ', '-')
                if icon_name not in filtered_icons:
                    filtered_icons[icon_name] = icon_data
                else:
                    # 같은 이름의 아이콘이 있으면 더 큰 사이즈를 우선
                    current_size = int(filtered_icons[icon_name]['size'])
                    new_size = int(icon_data['size'])
                    if new_size > current_size:
                        filtered_icons[icon_name] = icon_data
        
        print(f"{style} 스타일 아이콘 {len(filtered_icons)}개를 처리합니다...")
        
        # 출력 디렉토리 생성
        output_dir = self.packages_dir / f"react-native-icons-{style}" / "src"
        output_dir.mkdir(parents=True, exist_ok=True)
        
        # index.ts 파일 생성
        index_content = self.generate_index_file(filtered_icons, style)
        
        with open(output_dir / "index.ts", 'w', encoding='utf-8') as f:
            f.write(index_content)
        
        print(f"React Native {style} 아이콘 패키지가 생성되었습니다: {output_dir}")
        
        # package.json 생성
        self.create_package_json(style)
    
    def create_package_json(self, style: str):
        """package.json 파일을 생성합니다."""
        package_dir = self.packages_dir / f"react-native-icons-{style}"
        
        package_json = {
            "name": f"@refineui/react-native-icons-{style}",
            "version": "1.0.0",
            "description": f"RefineUI System Icons ({style}) for React Native",
            "main": "dist/index.js",
            "module": "dist/index.esm.js",
            "types": "dist/index.d.ts",
            "files": ["dist"],
            "scripts": {
                "build": "rollup -c",
                "dev": "rollup -c -w",
                "clean": "rimraf dist"
            },
            "peerDependencies": {
                "react": ">=16.8.0",
                "react-native": ">=0.60.0"
            },
            "dependencies": {
                "react-native-svg": "^13.0.0"
            },
            "devDependencies": {
                "@rollup/plugin-commonjs": "^21.0.0",
                "@rollup/plugin-json": "^4.1.0",
                "@rollup/plugin-node-resolve": "^13.0.0",
                "@types/react": "^18.0.0",
                "@types/react-native": "^0.70.0",
                "rimraf": "^3.0.2",
                "rollup": "^2.60.0",
                "rollup-plugin-typescript2": "^0.31.0",
                "typescript": "^4.5.0"
            },
            "keywords": ["react-native", "icons", "refineui", "system-icons", "ui", style],
            "author": "RefineUI Team",
            "license": "MIT"
        }
        
        with open(package_dir / "package.json", 'w', encoding='utf-8') as f:
            json.dump(package_json, f, indent=2)
        
        # rollup.config.js 생성
        self.create_rollup_config(style)
    
    def create_rollup_config(self, style: str):
        """rollup.config.js 파일을 생성합니다."""
        package_dir = self.packages_dir / f"react-native-icons-{style}"
        
        rollup_config = '''import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  external: ['react', 'react-native', 'react-native-svg'],
  plugins: [
    resolve(),
    commonjs(),
    json(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
          declarationDir: 'dist'
        }
      }
    })
  ]
};'''
        
        with open(package_dir / "rollup.config.js", 'w', encoding='utf-8') as f:
            f.write(rollup_config)
        
        # tsconfig.json 생성
        tsconfig = {
            "compilerOptions": {
                "target": "es5",
                "lib": ["dom", "dom.iterable", "es6"],
                "allowJs": True,
                "skipLibCheck": True,
                "esModuleInterop": True,
                "allowSyntheticDefaultImports": True,
                "strict": True,
                "forceConsistentCasingInFileNames": True,
                "noFallthroughCasesInSwitch": True,
                "module": "esnext",
                "moduleResolution": "node",
                "resolveJsonModule": True,
                "isolatedModules": True,
                "noEmit": False,
                "jsx": "react-jsx",
                "declaration": True,
                "declarationDir": "dist"
            },
            "include": ["src"],
            "exclude": ["node_modules", "dist"]
        }
        
        with open(package_dir / "tsconfig.json", 'w', encoding='utf-8') as f:
            json.dump(tsconfig, f, indent=2)
    
    def generate_all_react_native_packages(self):
        """모든 React Native 패키지를 생성합니다."""
        print("React Native 아이콘 패키지 생성을 시작합니다...")
        
        # Regular 스타일 패키지 생성
        self.generate_react_native_package("regular")
        
        # Filled 스타일 패키지 생성
        self.generate_react_native_package("filled")
        
        print("모든 React Native 아이콘 패키지가 생성되었습니다!")

def main():
    generator = ReactNativeIconsGenerator()
    generator.generate_all_react_native_packages()

if __name__ == "__main__":
    main()
