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
  
  // Classify icons by style
  for (const [cssClass, iconData] of Object.entries(mappingData.icons)) {
    const iconName = iconData.name.replace(/\s+/g, '_').toUpperCase();
    const unicodeChar = String.fromCharCode(iconData.unicode);
    
    if (iconData.style === 'regular') {
      regularIcons[iconName] = unicodeChar;
    } else if (iconData.style === 'filled') {
      filledIcons[iconName] = unicodeChar;
    }
  }
  
  // Generate Regular icons
  const regularIconEntries = Object.entries(regularIcons)
    .map(([name, unicode]) => `  ${name}_REGULAR: '${unicode}',`)
    .join('\n');
  
  // Generate Filled icons
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
    // Read icon mapping JSON file
    const mappingPath = path.join(__dirname, '../../../fonts/icon-mapping.json');
    const mappingData = JSON.parse(fs.readFileSync(mappingPath, 'utf8'));
    
    // Generate icon constants
    const iconConstants = generateIconConstants(mappingData);
    
    // Update index.ts file
    const indexPath = path.join(__dirname, '../src/index.ts');
    const indexContent = `// Direct font-based icon system
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
