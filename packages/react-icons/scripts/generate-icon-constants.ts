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
    const icon = iconData as IconMapping[string];
    const iconName = icon.name.replace(/\s+/g, '_').toUpperCase();
    const unicodeChar = String.fromCharCode(icon.unicode);
    
    if (icon.style === 'regular') {
      regularIcons[iconName] = unicodeChar;
    } else if (icon.style === 'filled') {
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
    
    // Update index.tsx file (preserve existing IconProps interface)
    const indexPath = path.join(__dirname, '../src/index.tsx');
    const existingContent = fs.readFileSync(indexPath, 'utf8');
    
    // Only update the icon constants part, preserve the IconProps interface
    const updatedContent = existingContent.replace(
      /\/\/ Icon constants for direct usage[\s\S]*$/,
      `// Icon constants for direct usage
${iconConstants}`
    );
    
    fs.writeFileSync(indexPath, updatedContent);
    console.log('Generated: icon constants in index.tsx');
    
    console.log(`Total icons generated: ${Object.keys(mappingData.icons).length}`);
    
  } catch (error) {
    console.error('Error generating icon constants:', error);
    process.exit(1);
  }
}

main();
