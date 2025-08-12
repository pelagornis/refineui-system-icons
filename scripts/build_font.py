#!/usr/bin/env python3
"""
RefineUI System Icons - Font Builder
SVG 아이콘들을 폰트로 변환하는 스크립트
"""

import os
import json
import subprocess
import logging
from pathlib import Path
from typing import Dict, List, Optional

# 로깅 설정
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class FontBuilder:
    def __init__(self, assets_dir: str = "assets", fonts_dir: str = "fonts"):
        self.assets_dir = assets_dir
        self.fonts_dir = fonts_dir
        self.temp_dir = "temp_font_build"
        
        # 폰트 설정
        self.font_name = "RefineUI System Icons"
        self.font_family = "RefineUI-System-Icons"
        self.font_version = "1.0.0"
        
        # 지원하는 폰트 형식
        self.font_formats = {
            "woff2": "web",
            "woff": "web", 
            "ttf": "desktop",
            "otf": "desktop",
            "eot": "legacy"
        }
        
        # 유니코드 시작점 (Private Use Area)
        self.unicode_start = 0xF0000
        
    def check_dependencies(self) -> bool:
        """필요한 도구들이 설치되어 있는지 확인"""
        required_tools = ["fontforge", "svg2ttf", "ttf2woff2"]
        
        for tool in required_tools:
            try:
                subprocess.run([tool, "--version"], capture_output=True, check=True)
                logger.info(f"✓ {tool} 설치됨")
            except (subprocess.CalledProcessError, FileNotFoundError):
                logger.error(f"✗ {tool} 설치 필요")
                return False
        
        return True
    
    def install_dependencies(self):
        """필요한 도구들 설치 안내"""
        logger.info("폰트 빌드를 위해 다음 도구들을 설치해주세요:")
        logger.info("")
        logger.info("macOS:")
        logger.info("  brew install fontforge")
        logger.info("  npm install -g ttf2woff2")
        logger.info("")
        logger.info("Ubuntu/Debian:")
        logger.info("  sudo apt-get install fontforge")
        logger.info("  npm install -g ttf2woff2")
        logger.info("")
        logger.info("Windows:")
        logger.info("  choco install fontforge")
        logger.info("  npm install -g ttf2woff2")
    
    def scan_icons(self) -> Dict[str, List[str]]:
        """assets 디렉토리에서 모든 SVG 파일 스캔"""
        icons = {}
        
        if not os.path.exists(self.assets_dir):
            logger.error(f"{self.assets_dir} 디렉토리가 존재하지 않습니다.")
            return icons
        
        for icon_folder in os.listdir(self.assets_dir):
            icon_path = os.path.join(self.assets_dir, icon_folder)
            
            if os.path.isdir(icon_path):
                svg_dir = os.path.join(icon_path, "svg")
                
                if os.path.exists(svg_dir):
                    svg_files = []
                    for file in os.listdir(svg_dir):
                        if file.endswith('.svg'):
                            svg_files.append(os.path.join(svg_dir, file))
                    
                    if svg_files:
                        icons[icon_folder] = svg_files
        
        logger.info(f"{len(icons)}개의 아이콘 폴더를 찾았습니다.")
        return icons
    
    def create_fontforge_script(self, icons: Dict[str, List[str]]) -> str:
        """FontForge 스크립트 생성"""
        script_content = f"""
#!/usr/bin/env fontforge

# RefineUI System Icons Font Generator
import fontforge
import os

# 새 폰트 생성
font = fontforge.font()

# 폰트 정보 설정
font.familyname = "{self.font_family}"
font.fontname = "{self.font_family}"
font.fullname = "{self.font_name}"
font.version = "{self.font_version}"
font.copyright = "RefineUI System Icons"

# 폰트 메트릭 설정
font.ascent = 1000
font.descent = 200
font.em = 1200

# 유니코드 시작점
unicode_start = {self.unicode_start}

# 아이콘 추가
"""
        
        unicode_counter = 0
        icon_mapping = {}
        
        for icon_name, svg_files in icons.items():
            # 첫 번째 SVG 파일만 사용 (대표 아이콘)
            if svg_files:
                svg_path = svg_files[0]
                unicode_point = self.unicode_start + unicode_counter
                
                script_content += f"""
# {icon_name} 아이콘 추가
glyph = font.createChar(unicode_start + {unicode_counter}, "{icon_name}")
glyph.importOutlines("{svg_path}")
glyph.width = 1200
glyph.vwidth = 1200
"""
                
                icon_mapping[icon_name] = {
                    "unicode": unicode_point,
                    "svg_path": svg_path
                }
                unicode_counter += 1
        
        # 폰트 저장
        script_content += f"""
# 폰트 저장
font.generate("{self.fonts_dir}/refineui-system-icons.ttf")
font.generate("{self.fonts_dir}/refineui-system-icons.otf")
font.close()
"""
        
        return script_content, icon_mapping
    
    def create_css_file(self, icon_mapping: Dict) -> str:
        """CSS 파일 생성"""
        css_content = f"""/* RefineUI System Icons Font CSS */
@font-face {{
    font-family: '{self.font_family}';
    src: url('./refineui-system-icons.woff2') format('woff2'),
         url('./refineui-system-icons.woff') format('woff'),
         url('./refineui-system-icons.ttf') format('truetype'),
         url('./refineui-system-icons.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: block;
}}

/* 아이콘 클래스 */
.ri {{
    font-family: '{self.font_family}';
    font-weight: normal;
    font-style: normal;
    font-size: 1em;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}}

/* 개별 아이콘 클래스 */
"""
        
        for icon_name, info in icon_mapping.items():
            css_name = icon_name.lower().replace(' ', '-').replace('_', '-')
            css_content += f"""
.ri-{css_name}:before {{
    content: "\\{info['unicode']:X}";
}}
"""
        
        return css_content
    
    def create_icon_mapping_json(self, icon_mapping: Dict) -> str:
        """아이콘 매핑 JSON 파일 생성"""
        mapping_data = {
            "font_name": self.font_name,
            "font_family": self.font_family,
            "version": self.font_version,
            "unicode_start": self.unicode_start,
            "icons": {}
        }
        
        for icon_name, info in icon_mapping.items():
            mapping_data["icons"][icon_name] = {
                "unicode": info["unicode"],
                "unicode_hex": f"\\{info['unicode']:X}",
                "css_class": f"ri-{icon_name.lower().replace(' ', '-').replace('_', '-')}"
            }
        
        return json.dumps(mapping_data, indent=2, ensure_ascii=False)
    
    def build_font(self):
        """폰트 빌드 메인 프로세스"""
        logger.info("RefineUI System Icons 폰트 빌드 시작...")
        
        # 의존성 확인
        if not self.check_dependencies():
            self.install_dependencies()
            return False
        
        # 출력 디렉토리 생성
        os.makedirs(self.fonts_dir, exist_ok=True)
        os.makedirs(self.temp_dir, exist_ok=True)
        
        # 아이콘 스캔
        icons = self.scan_icons()
        if not icons:
            logger.error("빌드할 아이콘이 없습니다.")
            return False
        
        try:
            # FontForge 스크립트 생성
            fontforge_script, icon_mapping = self.create_fontforge_script(icons)
            script_path = os.path.join(self.temp_dir, "generate_font.py")
            
            with open(script_path, 'w', encoding='utf-8') as f:
                f.write(fontforge_script)
            
            # FontForge 실행
            logger.info("FontForge로 폰트 생성 중...")
            result = subprocess.run(["fontforge", "-script", script_path], 
                                  capture_output=True, text=True)
            
            if result.returncode != 0:
                logger.error(f"FontForge 실행 실패: {result.stderr}")
                return False
            
            # 추가 폰트 형식 생성
            logger.info("추가 폰트 형식 생성 중...")
            
            # WOFF2 생성
            ttf_path = os.path.join(self.fonts_dir, "refineui-system-icons.ttf")
            woff2_path = os.path.join(self.fonts_dir, "refineui-system-icons.woff2")
            
            if os.path.exists(ttf_path):
                subprocess.run(["ttf2woff2", ttf_path], check=True)
                if os.path.exists(woff2_path):
                    logger.info("✓ WOFF2 폰트 생성 완료")
            
            # CSS 파일 생성
            css_content = self.create_css_file(icon_mapping)
            css_path = os.path.join(self.fonts_dir, "refineui-system-icons.css")
            
            with open(css_path, 'w', encoding='utf-8') as f:
                f.write(css_content)
            
            # 아이콘 매핑 JSON 생성
            mapping_json = self.create_icon_mapping_json(icon_mapping)
            mapping_path = os.path.join(self.fonts_dir, "icon-mapping.json")
            
            with open(mapping_path, 'w', encoding='utf-8') as f:
                f.write(mapping_json)
            
            # README 생성
            self.create_font_readme(icon_mapping)
            
            logger.info(f"✓ 폰트 빌드 완료! {len(icon_mapping)}개 아이콘")
            logger.info(f"출력 위치: {self.fonts_dir}/")
            
            return True
            
        except Exception as e:
            logger.error(f"폰트 빌드 실패: {e}")
            return False
        
        finally:
            # 임시 파일 정리
            if os.path.exists(self.temp_dir):
                import shutil
                shutil.rmtree(self.temp_dir)
    
    def create_font_readme(self, icon_mapping: Dict):
        """폰트 사용법 README 생성"""
        readme_content = f"""# RefineUI System Icons Font

RefineUI System Icons를 폰트로 사용할 수 있습니다.

## 사용법

### 1. CSS 파일 포함
```html
<link rel="stylesheet" href="./refineui-system-icons.css">
```

### 2. 아이콘 사용
```html
<!-- 기본 클래스 -->
<i class="ri ri-access-time"></i>

<!-- 크기 조정 -->
<i class="ri ri-access-time" style="font-size: 24px;"></i>
```

## 지원하는 아이콘

"""
        
        for icon_name in sorted(icon_mapping.keys()):
            css_class = f"ri-{icon_name.lower().replace(' ', '-').replace('_', '-')}"
            readme_content += f"- `{css_class}` - {icon_name}\n"
        
        readme_content += f"""
## 폰트 파일

- `refineui-system-icons.woff2` - 최신 브라우저용 (권장)
- `refineui-system-icons.woff` - 구형 브라우저용
- `refineui-system-icons.ttf` - 데스크톱용
- `refineui-system-icons.otf` - 데스크톱용

## 아이콘 매핑

전체 아이콘 목록은 `icon-mapping.json` 파일을 참조하세요.
"""
        
        readme_path = os.path.join(self.fonts_dir, "README.md")
        with open(readme_path, 'w', encoding='utf-8') as f:
            f.write(readme_content)

def main():
    """메인 함수"""
    builder = FontBuilder()
    success = builder.build_font()
    
    if success:
        logger.info("🎉 폰트 빌드가 성공적으로 완료되었습니다!")
    else:
        logger.error("❌ 폰트 빌드에 실패했습니다.")
        exit(1)

if __name__ == "__main__":
    main()
