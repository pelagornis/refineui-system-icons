#!/usr/bin/env python3
"""
Generate complete icon mappings for the Flutter example app
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
        
        icons.append({
            'name': icon_name,
            'code_point': code_point,
            'font_family': font_family
        })
    
    return icons

def generate_complete_switch_statement(icons):
    """Generate complete switch statement for all icons"""
    
    switch_code = """  IconData? _getIconDataByName(String name) {
    // Complete mapping of ALL 5196 RefineUIIcons
    switch (name) {
"""
    
    # Sort icons by name for better organization
    sorted_icons = sorted(icons, key=lambda x: x['name'])
    
    for icon in sorted_icons:
        switch_code += f"      case '{icon['name']}': return RefineUIIcons.{icon['name']};\n"
    
    switch_code += """      default: return null;
    }
  }"""
    
    return switch_code

def main():
    print("Extracting ALL RefineUIIcons...")
    icons = extract_all_icons()
    
    if not icons:
        print("No icons found!")
        return
    
    print(f"Found {len(icons)} icons")
    
    # Generate complete switch statement
    switch_statement = generate_complete_switch_statement(icons)
    
    # Write to a file
    output_file = 'flutter/example/lib/complete_icon_mappings.dart'
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(switch_statement)
    
    print(f"Generated {output_file}")
    print(f"Total icons: {len(icons)}")
    
    # Show some statistics
    unique_names = set(icon['name'] for icon in icons)
    print(f"Unique icon names: {len(unique_names)}")
    
    # Show first few icon names as examples
    print("\nSample icon names:")
    sample_names = sorted(list(unique_names))[:20]
    for name in sample_names:
        print(f"  - {name}")

if __name__ == '__main__':
    main()
