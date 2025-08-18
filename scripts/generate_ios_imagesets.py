#!/usr/bin/env python3
import json
import os
import shutil
from pathlib import Path

def _find_asset_svg_path(icon_name: str, size: int, theme: str) -> Path:
    """assets 폴더에서 해당 아이콘의 SVG 원본 경로를 찾습니다."""
    # 파일 네이밍은 하이픈을 사용 (실제 assets의 SVG 파일명 패턴)
    kebab_name = icon_name.lower().replace(' ', '-')
    filename = f"ic_refineui_{kebab_name}_{size}_{theme}.svg"

    # 폴더명 매핑 테이블 (icon-mapping.json의 name -> 실제 assets 폴더명)
    folder_mapping = {
        # 공백이 있는 폴더명들
        "Sound source": "Sound source",
        "Add circle": "Add circle", 
        "App recent": "App recent",
        "Shape subtract": "Shape subtract",
        "Chevron down": "Chevron down",
        "Pulse circle": "Pulse circle",
        "Align bottom": "Align bottom",
        "Battery 40": "Battery 40",
        "Ios arrow rtl": "Ios arrow rtl",
        "Mail read": "Mail read",
        "Keyboard command": "Keyboard command",
        "Weather snowflake": "Weather snowflake",
        "Flag off": "Flag off",
        "Dismiss square": "Dismiss square",
        "Number circle 4": "Number circle 4",
        "Number circle 3": "Number circle 3",
        "Number symbol square": "Number symbol square",
        "Control button": "Control button",
        "Eyedropper off": "Eyedropper off",
        "Spray can": "Spray can",
        "Textbox align middle": "Textbox align middle",
        "Flash off": "Flash off",
        "Textbox align bottom center": "Textbox align bottom center",
        "Hard drive": "Hard drive",
        "Page fit": "Page fit",
        "Shape exclude": "Shape exclude",
        "Number circle 2": "Number circle 2",
        "Weather cloudy": "Weather cloudy",
        "Headset vr": "Headset vr",
        "Number circle 5": "Number circle 5",
        "Heart broken": "Heart broken",
        "Battery 90": "Battery 90",
        "Server link": "Server link",
        "Math symbols": "Math symbols",
        "Battery 30": "Battery 30",
        "Filmstrip off": "Filmstrip off",
        "Share ios": "Share ios",
        "Line dashes": "Line dashes",
        "Port micro usb": "Port micro usb",
        "Keyboard off": "Keyboard off",
        "Toggle right": "Toggle right",
        "Wifi 2": "Wifi 2",
        "Bar chart horizontal": "Bar chart horizontal",
        "Equal circle": "Equal circle",
        "Slide hide": "Slide hide",
        "Pen off": "Pen off",
        "Keyboard shift": "Keyboard shift",
        "Textbox align top center": "Textbox align top center",
        "Textbox align top left": "Textbox align top left",
        "Walkie talkie": "Walkie talkie",
        "Wifi 4": "Wifi 4",
        "Emoji cool": "Emoji cool",
        "Json file": "Json file",
        "Wifi 3": "Wifi 3",
        "Toggle left": "Toggle left",
        "Network check": "Network check",
        "Question circle": "Question circle",
        "Paint brush": "Paint brush",
        "Weather rain": "Weather rain",
    }

    # 폴더명 후보: 매핑 테이블 -> 원문 -> 공백 제거 -> 공백을 언더스코어
    dir_candidates = []
    
    # 1. 매핑 테이블에서 찾기
    if icon_name in folder_mapping:
        dir_candidates.append(folder_mapping[icon_name])
    
    # 2. 기본 후보들
    dir_candidates.extend([
        icon_name,
        icon_name.replace(' ', ''),
        icon_name.replace(' ', '_'),
    ])

    for dir_name in dir_candidates:
        asset_dir = Path(f"assets/{dir_name}/svg")
        candidate = asset_dir / filename
        if candidate.exists():
            return candidate

    # 못 찾으면 기본 후보 경로 반환(존재하지 않을 수 있음)
    return Path(f"assets/{icon_name}/svg/{filename}")

def create_imageset(icon_name, size, theme, unicode_char):
    """iOS 이미지셋을 생성합니다 (SVG 사용)."""
    # 이미지셋 디렉토리 이름 생성 (기존 icon-mapping.json과 일치)
    imageset_name = f"ic_refineui_{icon_name.lower().replace(' ', '_')}_{size}_{theme}"
    imageset_path = Path(f"ios/RefineIcons/Resources/Assets.xcassets/{imageset_name}.imageset")

    # 원본 SVG 경로 확인
    src_svg = _find_asset_svg_path(icon_name, size, theme)
    if not src_svg.exists():
        print(f"Warning: SVG not found for {icon_name} {size} {theme} at {src_svg}")
        return None

    # 디렉토리 생성
    imageset_path.mkdir(parents=True, exist_ok=True)

    # 대상 파일명은 refineui 접두어를 제거한 형태로 저장
    dst_svg_filename = f"{imageset_name}.svg"
    dst_svg_path = imageset_path / dst_svg_filename

    # SVG 복사
    shutil.copyfile(src_svg, dst_svg_path)

    # Contents.json 생성 (SVG 단일 소스, 벡터 렌더링 유지)
    contents = {
        "images": [
            {
                "idiom": "universal",
                "filename": dst_svg_filename
            }
        ],
        "info": {
            "author": "xcode",
            "version": 1
        },
        "properties": {
            "template-rendering-intent": "template",
            "preserves-vector-representation": True
        }
    }

    with open(imageset_path / "Contents.json", "w") as f:
        json.dump(contents, f, indent=2)

    print(f"Created imageset (svg): {imageset_name}")
    return imageset_name

def generate_swift_enum(icon_mappings):
    """Swift enum 코드를 생성합니다."""
    
    swift_code = '''import Foundation

@objc public enum RefineIcon: Int, Equatable, CaseIterable {
'''
    
    # 아이콘 케이스들 생성
    case_index = 0
    for css_class, icon_data in icon_mappings.items():
        icon_name = icon_data['name'].replace(' ', '')
        size = icon_data['size']
        theme = icon_data['style'].capitalize()
        
        # Swift 케이스 이름 생성 (첫글자 대문자)
        case_name = f"{icon_name}{size}{theme}"
        
        swift_code += f'    case {case_name} = {case_index}\n'
        case_index += 1
    
    swift_code += '''

    public var iconName: String {
        switch self {
'''
    
    # iconName switch 문 생성
    for css_class, icon_data in icon_mappings.items():
        icon_name = icon_data['name'].replace(' ', '')
        size = icon_data['size']
        theme = icon_data['style'].capitalize()
        
        case_name = f"{icon_name}{size}{theme}"
        imageset_name = f"ic_refineui_{icon_name.lower().replace(' ', '_')}_{size}_{icon_data['style']}"
        
        swift_code += f'        case .{case_name}: return "{imageset_name}"\n'
    
    swift_code += '''        }
    }
}
'''
    
    return swift_code

def main():
    # 아이콘 매핑 JSON 파일 읽기
    mapping_path = Path("fonts/icon-mapping.json")
    
    if not mapping_path.exists():
        print("Error: icon-mapping.json not found")
        return
    
    with open(mapping_path, 'r') as f:
        mapping_data = json.load(f)
    
    # 에셋 카탈로그 루트 Contents.json 보장
    assets_root = Path("ios/RefineIcons/Resources/Assets.xcassets")
    assets_root.mkdir(parents=True, exist_ok=True)
    root_contents = {
        "info": {"author": "xcode", "version": 1}
    }
    with open(assets_root / "Contents.json", "w") as f:
        json.dump(root_contents, f, indent=2)

    # 이미지셋 생성 (SVG 복사)
    created_imagesets = []
    for css_class, icon_data in mapping_data['icons'].items():
        icon_name = icon_data['name']
        size = icon_data['size']
        theme = icon_data['style']
        unicode = icon_data['unicode']
        
        imageset_name = create_imageset(icon_name, size, theme, unicode)
        if imageset_name is not None:
            created_imagesets.append(imageset_name)
    
    # Swift 파일 생성
    swift_code = generate_swift_enum(mapping_data['icons'])
    swift_path = Path("ios/RefineIcons/Sources/RefineIcon.swift")
    swift_path.parent.mkdir(parents=True, exist_ok=True)
    
    with open(swift_path, 'w') as f:
        f.write(swift_code)
    
    print(f"\nGenerated {len(created_imagesets)} imagesets")
    print(f"Generated Swift file: {swift_path}")
    print("\nNext steps:")
    print("1. Add the generated imagesets to your Xcode project")
    print("2. Add RefineIcon.swift to your Xcode project")
    print("3. Use RefineIcon enum in your Swift code")

if __name__ == "__main__":
    main()
