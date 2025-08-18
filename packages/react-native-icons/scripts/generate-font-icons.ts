import * as fs from 'fs';
import * as path from 'path';

interface IconMapping {
  [key: string]: {
    name: string;
    size: string;
    style: string;
    unicode: number;
    unicode_hex: string;
    css_class: string;
  };
}

interface FontIconMapping {
  [key: string]: {
    unicode: number;
    name: string;
    size: string;
    style: string;
  };
}

function generateFontIconComponent(iconName: string, unicode: number, size: string, style: string): string {
  const componentName = `${iconName.charAt(0).toUpperCase() + iconName.slice(1)}${size}${style.charAt(0).toUpperCase() + style.slice(1)}Icon`;
  const fontFamily = `RefineUI-System-Icons-${style.charAt(0).toUpperCase() + style.slice(1)}`;
  
  return `import React from 'react';
import { FontIcon, FontIconProps } from './FontIcon';

export interface ${componentName}Props extends Omit<FontIconProps, 'name'> {}

export const ${componentName}: React.FC<${componentName}Props> = (props) => {
  return (
    <FontIcon
      name="\\u${unicode.toString(16).padStart(4, '0')}"
      style={[{ fontFamily: '${fontFamily}' }, props.style]}
      {...props}
    />
  );
};
`;
}

function generateIndexFile(icons: FontIconMapping): string {
  const exports = Object.keys(icons).map(iconName => {
    const icon = icons[iconName];
    const componentName = `${iconName.charAt(0).toUpperCase() + iconName.slice(1)}${icon.size}${icon.style.charAt(0).toUpperCase() + icon.style.slice(1)}Icon`;
    return `export { ${componentName} } from './${componentName}';`;
  });

  return `// Auto-generated font icon exports
export { FontIcon, FontIconProps } from './FontIcon';

${exports.join('\n')}
`;
}

async function main() {
  try {
    // 아이콘 매핑 JSON 파일 읽기
    const mappingPath = path.join(__dirname, '../../../fonts/icon-mapping.json');
    const mappingData = JSON.parse(fs.readFileSync(mappingPath, 'utf8'));
    
    const icons: FontIconMapping = {};
    const outputDir = path.join(__dirname, '../src/font-icons');
    
    // 출력 디렉토리 생성
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // 각 아이콘에 대해 컴포넌트 파일 생성
    for (const [cssClass, iconData] of Object.entries(mappingData.icons)) {
      const iconName = iconData.name.toLowerCase().replace(/\s+/g, '_');
      const key = `${iconName}_${iconData.size}_${iconData.style}`;
      
      icons[key] = {
        unicode: iconData.unicode,
        name: iconData.name,
        size: iconData.size,
        style: iconData.style,
      };
      
      const componentCode = generateFontIconComponent(
        iconName,
        iconData.unicode,
        iconData.size,
        iconData.style
      );
      
      const componentName = `${iconName.charAt(0).toUpperCase() + iconName.slice(1)}${iconData.size}${iconData.style.charAt(0).toUpperCase() + iconData.style.slice(1)}Icon`;
      const componentPath = path.join(outputDir, `${componentName}.tsx`);
      
      fs.writeFileSync(componentPath, componentCode);
      console.log(`Generated: ${componentName}.tsx`);
    }
    
    // index 파일 생성
    const indexCode = generateIndexFile(icons);
    const indexPath = path.join(outputDir, 'index.ts');
    fs.writeFileSync(indexPath, indexCode);
    console.log('Generated: index.ts');
    
    console.log(`Total icons generated: ${Object.keys(icons).length}`);
    
  } catch (error) {
    console.error('Error generating font icons:', error);
    process.exit(1);
  }
}

main();

