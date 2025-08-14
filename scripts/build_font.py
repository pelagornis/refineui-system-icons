#!/usr/bin/env python3
"""
RefineUI System Icons - Font Builder
Script to convert SVG icons into font files
"""

import os
import re
import json
import subprocess
import logging
from pathlib import Path
from typing import Dict, List, Optional

# Logging configuration
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class FontBuilder:
    def __init__(self, assets_dir: str = "assets", fonts_dir: str = "fonts"):
        self.assets_dir = assets_dir
        self.fonts_dir = fonts_dir
        self.temp_dir = "temp_font_build"
        
        # Font settings
        self.font_name = "RefineUI System Icons"
        self.font_family = "RefineUI-System-Icons"
        self.font_version = "1.0.0"
        
        # Supported font formats
        self.font_formats = {
            "woff2": "web",
            "woff": "web", 
            "ttf": "desktop",
            "otf": "desktop",
            "eot": "legacy"
        }
        
        # Unicode start point (Private Use Area)
        self.unicode_start = 0xF0000
        
    def check_dependencies(self) -> bool:
        """Check if required tools are installed"""
        # FontForge is required
        try:
            subprocess.run(["fontforge", "--version"], capture_output=True, check=True)
            logger.info(f"✓ fontforge installed")
        except (subprocess.CalledProcessError, FileNotFoundError):
            logger.error(f"✗ fontforge installation required")
            return False
        
        # ttf2woff2 is optional
        try:
            subprocess.run(["ttf2woff2"], capture_output=True, check=False)
            logger.info(f"✓ ttf2woff2 installed")
            self.has_ttf2woff2 = True
        except FileNotFoundError:
            logger.warning(f"⚠ ttf2woff2 not found - WOFF2 fonts will not be generated")
            self.has_ttf2woff2 = False
        
        return True
    
    def install_dependencies(self):
        """Installation guide for required tools"""
        logger.info("Please install the following tools for font building:")
        logger.info("")
        logger.info("macOS:")
        logger.info("  brew install fontforge")
        logger.info("  npm install -g ttf2woff2")
        logger.info("  # svg2ttf is included with FontForge")
        logger.info("")
        logger.info("Ubuntu/Debian:")
        logger.info("  sudo apt-get install fontforge")
        logger.info("  npm install -g ttf2woff2")
        logger.info("")
        logger.info("Windows:")
        logger.info("  choco install fontforge")
        logger.info("  npm install -g ttf2woff2")
    
    def scan_icons(self) -> Dict[str, Dict[str, List[str]]]:
        """Scan assets directory and separate Regular and Filled icons"""
        icons = {"regular": {}, "filled": {}}
        
        if not os.path.exists(self.assets_dir):
            logger.error(f"{self.assets_dir} directory does not exist.")
            return icons
        
        for icon_folder in os.listdir(self.assets_dir):
            icon_path = os.path.join(self.assets_dir, icon_folder)
            
            if os.path.isdir(icon_path):
                svg_dir = os.path.join(icon_path, "svg")
                
                if os.path.exists(svg_dir):
                    regular_files = []
                    filled_files = []
                    
                    for file in os.listdir(svg_dir):
                        if file.endswith('.svg'):
                            file_path = os.path.join(svg_dir, file)
                            
                            # Extract style from filename
                            if file.endswith('_regular.svg'):
                                regular_files.append(file_path)
                            elif file.endswith('_filled.svg'):
                                filled_files.append(file_path)
                    
                    if regular_files:
                        icons["regular"][icon_folder] = regular_files
                    if filled_files:
                        icons["filled"][icon_folder] = filled_files
        
        logger.info(f"Regular: {len(icons['regular'])} folders, Filled: {len(icons['filled'])} folders found.")
        return icons
    
    def create_fontforge_script(self, icons: Dict[str, List[str]], style: str) -> str:
        """Generate FontForge script (by style)"""
        font_family = f"{self.font_family}-{style.title()}"
        font_name = f"{self.font_name} {style.title()}"
        
        script_content = f"""
#!/usr/bin/env fontforge

# RefineUI System Icons Font Generator - {style.title()}
import fontforge
import os

# 새 폰트 생성
font = fontforge.font()

# 폰트 정보 설정
font.familyname = "{font_family}"
font.fontname = "{font_family}"
font.fullname = "{font_name}"
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
            # Generate individual glyphs for all SVG files
            for svg_path in svg_files:
                svg_filename = os.path.basename(svg_path)
                # Extract size and style from filename
                size_match = re.search(r'_(\d+)_(regular|filled)\.svg$', svg_filename)
                if size_match:
                    size = size_match.group(1)
                    file_style = size_match.group(2)
                    
                    # Process only files matching current style
                    if file_style == style:
                        unicode_point = self.unicode_start + unicode_counter
                        glyph_name = f"{icon_name}_{size}_{style}"
                        
                        script_content += f"""
# Add {glyph_name} icon
glyph = font.createChar(unicode_start + {unicode_counter}, "{glyph_name}")
glyph.importOutlines("{svg_path}")
glyph.width = 1200
glyph.vwidth = 1200
"""
                        
                        icon_mapping[glyph_name] = {
                            "unicode": unicode_point,
                            "svg_path": svg_path
                        }
                        unicode_counter += 1
        
        # Save font
        script_content += f"""
# Save font
font.generate("{self.fonts_dir}/refineui-system-icons-{style}.ttf")
font.generate("{self.fonts_dir}/refineui-system-icons-{style}.otf")
font.close()
"""
        
        return script_content, icon_mapping
    
    def create_css_file(self, icon_mapping: Dict, style: str) -> str:
        """Generate CSS file (by style)"""
        font_family = f"{self.font_family}-{style.title()}"
        
        css_content = f"""/* RefineUI System Icons Font CSS - {style.title()} */
@font-face {{
    font-family: '{font_family}';
    src: url('./refineui-system-icons-{style}.woff2') format('woff2'),
         url('./refineui-system-icons-{style}.woff') format('woff'),
         url('./refineui-system-icons-{style}.ttf') format('truetype'),
         url('./refineui-system-icons-{style}.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: block;
}}

/* Individual icon classes */
"""
        
        for icon_name, info in icon_mapping.items():
            # Generate CSS class name: ic_refineui_iconName_size_theme
            css_name = f"ic_refineui_{icon_name.lower().replace(' ', '_')}"
            css_content += f"""
.{css_name}:before {{
    font-family: '{self.font_family}-{style.title()}';
    font-weight: normal;
    font-style: normal;
    content: "\\{info['unicode']:X}";
}}
"""
        
        return css_content
    
    def create_combined_css(self, all_icon_mappings: Dict):
        """Generate combined CSS file"""
        css_content = """/* RefineUI System Icons Font CSS - Combined */
/* Regular style */
@font-face {
    font-family: 'RefineUI-System-Icons-Regular';
    src: url('./refineui-system-icons-regular.woff2') format('woff2'),
         url('./refineui-system-icons-regular.woff') format('woff'),
         url('./refineui-system-icons-regular.ttf') format('truetype'),
         url('./refineui-system-icons-regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: block;
}

/* Filled style */
@font-face {
    font-family: 'RefineUI-System-Icons-Filled';
    src: url('./refineui-system-icons-filled.woff2') format('woff2'),
         url('./refineui-system-icons-filled.woff') format('woff'),
         url('./refineui-system-icons-filled.ttf') format('truetype'),
         url('./refineui-system-icons-filled.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: block;
}

/* Base icon class */
.ic_refineui {
    font-size: 1em;
    line-height: 1;
    font-weight: normal;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* Regular style class */
.ic_refineui_regular {
    font-family: 'RefineUI-System-Icons-Regular';
    font-weight: normal;
    font-style: normal;
}

/* Filled style class */
.ic_refineui_filled {
    font-family: 'RefineUI-System-Icons-Filled';
    font-weight: normal;
    font-style: normal;
}

/* Individual icon classes */
"""
        
        # Regular icons
        if "regular" in all_icon_mappings:
            for icon_name, info in all_icon_mappings["regular"].items():
                # Generate CSS class name: ic_refineui_iconName_size_theme
                css_name = f"ic_refineui_{icon_name.lower().replace(' ', '_')}"
                css_content += f"""
.{css_name}:before {{
    font-family: '{self.font_family}-Regular';
    font-weight: normal;
    font-style: normal;
    content: "\\{info['unicode']:X}";
}}
"""
        
        # Filled icons
        if "filled" in all_icon_mappings:
            for icon_name, info in all_icon_mappings["filled"].items():
                # Generate CSS class name: ic_refineui_iconName_size_theme
                css_name = f"ic_refineui_{icon_name.lower().replace(' ', '_')}"
                css_content += f"""
.{css_name}:before {{
    font-family: '{self.font_family}-Filled';
    font-weight: normal;
    font-style: normal;
    content: "\\{info['unicode']:X}";
}}
"""
        
        # Save combined CSS file
        css_path = os.path.join(self.fonts_dir, "refineui-system-icons.css")
        with open(css_path, 'w', encoding='utf-8') as f:
            f.write(css_content)
        
        logger.info("✓ Combined CSS file generated successfully")
    
    def create_combined_mapping(self, all_icon_mappings: Dict):
        """Generate combined icon mapping JSON"""
        mapping_data = {
            "font_name": self.font_name,
            "version": self.font_version,
            "unicode_start": self.unicode_start,
            "styles": {},
            "icons": {}
        }
        
        for style, icon_mapping in all_icon_mappings.items():
            mapping_data["styles"][style] = {
                "font_family": f"{self.font_family}-{style.title()}",
                "count": len(icon_mapping)
            }
            
            for icon_name, info in icon_mapping.items():
                # Generate CSS class name: ic_refineui_iconName_size_theme
                css_name = f"ic_refineui_{icon_name.lower().replace(' ', '_')}"
                
                # Extract name and size from icon_name (e.g., "Access time_24_regular")
                parts = icon_name.split('_')
                if len(parts) >= 3:
                    original_name = '_'.join(parts[:-2])  # "Access time"
                    size = parts[-2]  # "24"
                else:
                    original_name = icon_name
                    size = "24"
                
                mapping_data["icons"][css_name] = {
                    "name": original_name,
                    "size": size,
                    "style": style,
                    "unicode": info["unicode"],
                    "unicode_hex": f"\\{info['unicode']:X}",
                    "css_class": css_name
                }
        
        # Save combined mapping file
        mapping_path = os.path.join(self.fonts_dir, "icon-mapping.json")
        with open(mapping_path, 'w', encoding='utf-8') as f:
            json.dump(mapping_data, f, indent=2, ensure_ascii=False)
        
        logger.info("✓ Combined icon mapping generated successfully")
    
    def create_icon_mapping_json(self, icon_mapping: Dict) -> str:
        """Generate icon mapping JSON file (legacy method - for compatibility)"""
        # This method is no longer used
        pass
    
    def build_font(self):
        """Main font building process"""
        logger.info("Starting RefineUI System Icons font build...")
        
        # Check dependencies
        if not self.check_dependencies():
            self.install_dependencies()
            return False
        
        # Create output directories
        os.makedirs(self.fonts_dir, exist_ok=True)
        os.makedirs(self.temp_dir, exist_ok=True)
        
        # Scan icons (separate Regular and Filled)
        icons = self.scan_icons()
        if not icons["regular"] and not icons["filled"]:
            logger.error("No icons to build.")
            return False
        
        all_icon_mappings = {}
        
        try:
            # Generate fonts for each style
            for style in ["regular", "filled"]:
                if not icons[style]:
                    logger.info(f"No {style.title()} style icons found.")
                    continue
                
                logger.info(f"Generating {style.title()} font...")
                
                # Generate FontForge script
                fontforge_script, icon_mapping = self.create_fontforge_script(icons[style], style)
                script_path = os.path.join(self.temp_dir, f"generate_font_{style}.py")
                
                with open(script_path, 'w', encoding='utf-8') as f:
                    f.write(fontforge_script)
                
                # Execute FontForge
                result = subprocess.run(["fontforge", "-script", script_path], 
                                      capture_output=True, text=True)
                
                if result.returncode != 0:
                    logger.error(f"FontForge execution failed ({style}): {result.stderr}")
                    continue
                
                # Generate WOFF2
                ttf_path = os.path.join(self.fonts_dir, f"refineui-system-icons-{style}.ttf")
                woff2_path = os.path.join(self.fonts_dir, f"refineui-system-icons-{style}.woff2")
                
                if os.path.exists(ttf_path) and self.has_ttf2woff2:
                    try:
                        subprocess.run(["ttf2woff2", ttf_path], check=True)
                        if os.path.exists(woff2_path):
                            logger.info(f"✓ {style.title()} WOFF2 font generated successfully")
                    except Exception as e:
                        logger.warning(f"{style.title()} WOFF2 generation failed: {e}")
                
                # Generate CSS file
                css_content = self.create_css_file(icon_mapping, style)
                css_path = os.path.join(self.fonts_dir, f"refineui-system-icons-{style}.css")
                
                with open(css_path, 'w', encoding='utf-8') as f:
                    f.write(css_content)
                
                all_icon_mappings[style] = icon_mapping
                logger.info(f"✓ {style.title()} font generation completed! {len(icon_mapping)} icons")
            
            # Generate combined CSS file
            self.create_combined_css(all_icon_mappings)
            
            # Generate combined icon mapping JSON
            self.create_combined_mapping(all_icon_mappings)
            
            # Generate README
            self.create_font_readme(all_icon_mappings)
            
            total_icons = sum(len(mapping) for mapping in all_icon_mappings.values())
            logger.info(f"✓ Complete font build finished! {total_icons} icons")
            logger.info(f"Output location: {self.fonts_dir}/")
            
            return True
            
        except Exception as e:
            logger.error(f"Font build failed: {e}")
            return False
        
        finally:
            # Clean up temporary files
            if os.path.exists(self.temp_dir):
                import shutil
                shutil.rmtree(self.temp_dir)
    
    def create_font_readme(self, all_icon_mappings: Dict):
        """Generate font usage README (Regular and Filled separated)"""
        readme_content = f"""# RefineUI System Icons Font

You can use RefineUI System Icons as fonts. Regular and Filled styles are separated.

## Usage

### 1. Include CSS file
```html
<link rel="stylesheet" href="./refineui-system-icons.css">
```

### 2. Use icons

#### Regular style
```html
<!-- 24px Regular style -->
<i class="ic_refineui ic_refineui_regular ic_refineui_access_time_24_regular"></i>

<!-- Or simply -->
<i class="ic_refineui_access_time_24_regular"></i>
```

#### Filled style
```html
<!-- 24px Filled style -->
<i class="ic_refineui ic_refineui_filled ic_refineui_access_time_24_filled"></i>

<!-- Or simply -->
<i class="ic_refineui_filled ic_refineui_access_time_24_filled"></i>
```

#### Various sizes
```html
<!-- 16px -->
<i class="ic_refineui_access_time_16_regular"></i>
<i class="ic_refineui_access_time_16_filled"></i>

<!-- 20px -->
<i class="ic_refineui_access_time_20_regular"></i>
<i class="ic_refineui_access_time_20_filled"></i>

<!-- 24px -->
<i class="ic_refineui_access_time_24_regular"></i>
<i class="ic_refineui_access_time_24_filled"></i>

<!-- 28px -->
<i class="ic_refineui_access_time_28_regular"></i>
<i class="ic_refineui_access_time_28_filled"></i>

<!-- 32px -->
<i class="ic_refineui_access_time_32_regular"></i>
<i class="ic_refineui_access_time_32_filled"></i>

<!-- 48px -->
<i class="ic_refineui_access_time_48_regular"></i>
<i class="ic_refineui_access_time_48_filled"></i>
```

#### Size adjustment
```html
<i class="ic_refineui_access_time_24_regular" style="font-size: 24px;"></i>
<i class="ic_refineui_access_time_32_filled" style="font-size: 32px; color: #007bff;"></i>
```

## Supported Icons

"""
        
        # Regular icons
        if "regular" in all_icon_mappings:
            readme_content += "### Regular style\n\n"
            for icon_name in sorted(all_icon_mappings["regular"].keys()):
                # Generate CSS class name: ic_refineui_iconName_size_theme
                css_class = f"ic_refineui_{icon_name.lower().replace(' ', '_')}"
                
                # Extract size from icon_name (e.g., "Access time_24_regular")
                parts = icon_name.split('_')
                if len(parts) >= 3:
                    size = parts[-2]  # "24"
                else:
                    size = "24"
                
                readme_content += f"- `{css_class}` - {icon_name} ({size}px)\n"
            readme_content += "\n"
        
        # Filled icons
        if "filled" in all_icon_mappings:
            readme_content += "### Filled style\n\n"
            for icon_name in sorted(all_icon_mappings["filled"].keys()):
                # Generate CSS class name: ic_refineui_iconName_size_theme
                css_class = f"ic_refineui_{icon_name.lower().replace(' ', '_')}"
                
                # Extract size from icon_name (e.g., "Access time_24_filled")
                parts = icon_name.split('_')
                if len(parts) >= 3:
                    size = parts[-2]  # "24"
                else:
                    size = "24"
                
                readme_content += f"- `{css_class}` - {icon_name} ({size}px)\n"
            readme_content += "\n"
        
        readme_content += f"""## Font Files

### Regular style
- `refineui-system-icons-regular.woff2` - Modern browsers (recommended)
- `refineui-system-icons-regular.woff` - Legacy browsers
- `refineui-system-icons-regular.ttf` - Desktop
- `refineui-system-icons-regular.otf` - Desktop

### Filled style
- `refineui-system-icons-filled.woff2` - Modern browsers (recommended)
- `refineui-system-icons-filled.woff` - Legacy browsers
- `refineui-system-icons-filled.ttf` - Desktop
- `refineui-system-icons-filled.otf` - Desktop

## Statistics

"""
        
        total_regular = len(all_icon_mappings.get("regular", {}))
        total_filled = len(all_icon_mappings.get("filled", {}))
        readme_content += f"- **Regular**: {total_regular} icons\n"
        readme_content += f"- **Filled**: {total_filled} icons\n"
        readme_content += f"- **Total**: {total_regular + total_filled} icons\n\n"
        
        readme_content += """## Icon Mapping

See `icon-mapping.json` file for the complete list of icons.
"""
        
        readme_path = os.path.join(self.fonts_dir, "README.md")
        with open(readme_path, 'w', encoding='utf-8') as f:
            f.write(readme_content)

def main():
    """Main function"""
    builder = FontBuilder()
    success = builder.build_font()
    
    if success:
        logger.info("🎉 Font build completed successfully!")
    else:
        logger.error("❌ Font build failed.")
        exit(1)

if __name__ == "__main__":
    main()
