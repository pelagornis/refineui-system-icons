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

function generateIconComponent(iconName: string, unicode: number, style: string): string {
  const componentName = `${iconName}${style.charAt(0).toUpperCase() + style.slice(1)}`;
  const unicodeChar = String.fromCharCode(unicode);
  
  return `import { createIcon } from '../utils';

export const ${componentName} = createIcon({
  displayName: '${componentName}',
  unicode: '${unicodeChar}',
  defaultVariant: '${style}',
});
`;
}

function generateIndexFile(icons: { [key: string]: { name: string; style: string; unicode: number } }): string {
  const exports = Object.keys(icons).map(key => {
    const icon = icons[key];
    const componentName = `${icon.name}${icon.style.charAt(0).toUpperCase() + icon.style.slice(1)}`;
    return `export { ${componentName} } from './${componentName}';`;
  });

  return `// Auto-generated icon exports
${exports.join('\n')}
`;
}

async function main() {
  try {
    // 아이콘 매핑 JSON 파일 읽기
    const mappingPath = path.join(__dirname, '../../../fonts/icon-mapping.json');
    const mappingData = JSON.parse(fs.readFileSync(mappingPath, 'utf8'));
    
    const icons: { [key: string]: { name: string; style: string; unicode: number } } = {};
    const outputDir = path.join(__dirname, '../src/icons');
    
    // 출력 디렉토리 생성
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // 각 아이콘에 대해 컴포넌트 파일 생성
    for (const [cssClass, iconData] of Object.entries(mappingData.icons)) {
      const iconName = iconData.name.replace(/\s+/g, '');
      const key = `${iconName}_${iconData.style}`;
      
      icons[key] = {
        name: iconName,
        style: iconData.style,
        unicode: iconData.unicode,
      };
      
      const componentCode = generateIconComponent(
        iconName,
        iconData.unicode,
        iconData.style
      );
      
      const componentName = `${iconName}${iconData.style.charAt(0).toUpperCase() + iconData.style.slice(1)}`;
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
    console.error('Error generating icons:', error);
    process.exit(1);
  }
}

main();
