#!/usr/bin/env python3
"""
Generate complete list of all RefineUIIcons for the Flutter example app
"""

import re
import os

def extract_all_icons():
    """Extract all icon constants from refineui_icons.dart"""
    
    icons_file_path = 'flutter/lib/src/refineui_icons.dart'
    
    if not os.path.exists(icons_file_path):
        print(f"Error: {icons_file_path} not found")
        return []
    
    with open(icons_file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract all icon constants using regex
    pattern = r'static const IconData (\w+) = IconData\((\d+), fontFamily: (_\w+Family), fontPackage: _kFontPkg\);'
    matches = re.findall(pattern, content)
    
    icons = []
    for match in matches:
        icon_name = match[0]
        code_point = int(match[1])
        font_family = match[2]
        
        # Parse icon name to extract size and style
        parts = icon_name.split('_')
        
        if len(parts) >= 3:
            style = parts[-1]
            size = parts[-2]
            name = '_'.join(parts[:-2])
            
            icons.append({
                'name': name,
                'size': int(size),
                'style': style,
                'full_name': icon_name,
                'code_point': code_point,
                'font_family': font_family
            })
    
    return icons

def generate_complete_dart_code(icons):
    """Generate complete Dart code with all icons"""
    
    dart_code = """  List<Map<String, dynamic>> _getAllIcons() {
    final icons = <Map<String, dynamic>>[];
    
    // ALL RefineUIIcons (5196 total icons)
    icons.addAll([
"""
    
    # Sort icons by name, then by size, then by style
    sorted_icons = sorted(icons, key=lambda x: (x['name'], x['size'], x['style']))
    
    for icon in sorted_icons:
        dart_code += f"      {{'name': '{icon['full_name']}', 'iconData': RefineUIIcons.{icon['full_name']}, 'size': {icon['size']}, 'style': '{icon['style']}'}},\n"
    
    dart_code += """    ]);
    
    return icons;
  }"""
    
    return dart_code

def main():
    print("Extracting ALL RefineUIIcons...")
    icons = extract_all_icons()
    
    if not icons:
        print("No icons found!")
        return
    
    print(f"Found {len(icons)} icons")
    
    # Generate complete Dart code
    dart_code = generate_complete_dart_code(icons)
    
    # Write to a file
    output_file = 'flutter/example/lib/complete_icons_generated.dart'
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(dart_code)
    
    print(f"Generated {output_file}")
    print(f"Total icons: {len(icons)}")
    
    # Show some statistics
    unique_names = set(icon['name'] for icon in icons)
    sizes = set(icon['size'] for icon in icons)
    styles = set(icon['style'] for icon in icons)
    
    print(f"Unique icon names: {len(unique_names)}")
    print(f"Sizes: {sorted(sizes)}")
    print(f"Styles: {sorted(styles)}")
    
    # Show first few icon names as examples
    print("\nSample icon names:")
    sample_names = sorted(list(unique_names))[:20]
    for name in sample_names:
        print(f"  - {name}")

if __name__ == '__main__':
    main()
