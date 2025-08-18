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

function generateIconConstants(mappingData: any): string {
  const regularIcons: { [key: string]: string } = {};
  const filledIcons: { [key: string]: string } = {};
  
  // 아이콘들을 스타일별로 분류
  for (const [cssClass, iconData] of Object.entries(mappingData.icons)) {
    const iconName = iconData.name.replace(/\s+/g, '_').toUpperCase();
    const unicodeChar = String.fromCharCode(iconData.unicode);
    
    if (iconData.style === 'regular') {
      regularIcons[iconName] = unicodeChar;
    } else if (iconData.style === 'filled') {
      filledIcons[iconName] = unicodeChar;
    }
  }
  
  // Regular 아이콘들 생성
  const regularIconEntries = Object.entries(regularIcons)
    .map(([name, unicode]) => `  ${name}_REGULAR: '${unicode}',`)
    .join('\n');
  
  // Filled 아이콘들 생성
  const filledIconEntries = Object.entries(filledIcons)
    .map(([name, unicode]) => `  ${name}_FILLED: '${unicode}',`)
    .join('\n');
  
  return `// Auto-generated icon constants
export const ICONS = {
${regularIconEntries}
${filledIconEntries}
} as const;

export type IconName = keyof typeof ICONS;

export function getIconUnicode(name: IconName): string {
  return ICONS[name];
}
`;
}

async function main() {
  try {
    // 아이콘 매핑 JSON 파일 읽기
    const mappingPath = path.join(__dirname, '../../../fonts/icon-mapping.json');
    const mappingData = JSON.parse(fs.readFileSync(mappingPath, 'utf8'));
    
    // 아이콘 상수 생성
    const iconConstants = generateIconConstants(mappingData);
    
    // index.ts 파일 업데이트
    const indexPath = path.join(__dirname, '../src/index.ts');
    const indexContent = `// Direct font-based icon system (FluentUI style)
export { Icon } from './Icon';
export type { IconProps } from './Icon';

// Icon constants for direct usage
${iconConstants}
`;
    
    fs.writeFileSync(indexPath, indexContent);
    console.log('Generated: icon constants in index.ts');
    
    console.log(`Total icons generated: ${Object.keys(mappingData.icons).length}`);
    
  } catch (error) {
    console.error('Error generating icon constants:', error);
    process.exit(1);
  }
}

main();
