/**
 * RefineUI System Icons React Package Utilities
 * 
 * This file contains utility functions for icon processing,
 * validation, and URL generation.
 */

import { IconSize, IconStyle, IconInfo } from './types';
import { ICON_SIZES, ICON_STYLES, ICON_BASE_URL, ICON_NAME_MAPPING } from './constants';

/**
 * Validates if a number is a valid icon size
 * @param size - The size to validate
 * @returns True if the size is valid
 */
export function isValidIconSize(size: number): size is IconSize {
  return ICON_SIZES.includes(size as IconSize);
}

/**
 * Validates if a string is a valid icon style
 * @param style - The style to validate
 * @returns True if the style is valid
 */
export function isValidIconStyle(style: string): style is IconStyle {
  return ICON_STYLES.includes(style as IconStyle);
}

/**
 * Validates if a string is a valid icon name
 * @param name - The name to validate
 * @returns True if the name is valid
 */
export function isValidIconName(name: string): boolean {
  return name.length > 0 && /^[a-zA-Z0-9_-]+$/.test(name);
}

/**
 * Generates an icon filename
 * @param name - The icon name
 * @param style - The icon style
 * @returns The generated filename
 */
export function generateIconFileName(name: string, style: IconStyle): string {
  return `ic_refineui_${name}_${style}`;
}

/**
 * Gets icon unicode from icon mapping
 * @param name - The icon name
 * @param size - The icon size
 * @param style - The icon style
 * @returns The icon unicode character
 */
export function getIconUnicode(name: string, size: IconSize, style: IconStyle): string {
  // Updated icon mapping based on new font generation
  const iconUnicodeMap: Record<string, Record<string, Record<string, number>>> = {
    'gavel': {
      'regular': { '16': 0xF0001, '20': 0xF0005, '24': 0xF0003, '28': 0xF0000, '32': 0xF0004, '48': 0xF0002 },
      'filled': { '16': 0xF0001, '20': 0xF0005, '24': 0xF0003, '28': 0xF0000, '32': 0xF0004, '48': 0xF0002 }
    },
    'diamond': {
      'regular': { '16': 0xF0007, '20': 0xF0006, '24': 0xF0009, '28': 0xF000A, '32': 0xF000B, '48': 0xF0008 },
      'filled': { '16': 0xF0007, '20': 0xF0006, '24': 0xF0009, '28': 0xF000A, '32': 0xF000B, '48': 0xF0008 }
    },
    'add': {
      'regular': { '16': 0xF060E, '20': 0xF060C, '24': 0xF060F, '28': 0xF0610, '32': 0xF0611, '48': 0xF060D },
      'filled': { '16': 0xF060F, '20': 0xF060D, '24': 0xF0610, '28': 0xF060C, '32': 0xF0611, '48': 0xF060E }
    },
    'home': {
      'regular': { '16': 0xF0074, '20': 0xF0077, '24': 0xF0073, '28': 0xF0076, '32': 0xF0070, '48': 0xF0075 },
      'filled': { '16': 0xF0074, '20': 0xF0077, '24': 0xF0073, '28': 0xF0076, '32': 0xF0070, '48': 0xF0075 }
    },
    'heart': {
      'regular': { '16': 0xF0234, '20': 0xF0233, '24': 0xF0232, '28': 0xF0231, '32': 0xF0230, '48': 0xF0235 },
      'filled': { '16': 0xF0234, '20': 0xF0233, '24': 0xF0232, '28': 0xF0231, '32': 0xF0230, '48': 0xF0235 }
    }
  };

  const sizeStr = size.toString();
  const unicode = iconUnicodeMap[name]?.[style]?.[sizeStr];
  
  if (unicode) {
    return String.fromCharCode(unicode);
  }
  
  // Fallback to placeholder
  return String.fromCharCode(0xF0000);
}

/**
 * Formats a display name from a slug
 * @param slug - The icon slug
 * @returns The formatted display name
 */
export function formatDisplayName(slug: string): string {
  // First check the mapping table
  if (ICON_NAME_MAPPING[slug]) {
    return ICON_NAME_MAPPING[slug];
  }
  
  // If not found, format the slug
  return slug.split('_').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}

/**
 * Converts a display name to a slug
 * @param displayName - The display name
 * @returns The slug
 */
export function displayNameToSlug(displayName: string): string {
  return displayName.toLowerCase().replace(/\s+/g, '_');
}



/**
 * Creates an IconInfo object
 * @param name - The icon name
 * @param size - The icon size
 * @param style - The icon style
 * @returns IconInfo object
 */
export function createIconInfo(name: string, size: IconSize, style: IconStyle): IconInfo {
  return {
    name: formatDisplayName(name),
    slug: name,
    size,
    style,
    unicode: getIconUnicode(name, size, style),
    fileName: generateIconFileName(name, style)
  };
}

/**
 * Sorts icons by name
 * @param icons - Array of icons to sort
 * @returns Sorted array of icons
 */
export function sortIconsByName(icons: IconInfo[]): IconInfo[] {
  return [...icons].sort((a, b) => a.name.localeCompare(b.name));
}



/**
 * Filters icons by size
 * @param icons - Array of icons to filter
 * @param size - The size to filter by
 * @returns Filtered array of icons
 */
export function filterIconsBySize(icons: IconInfo[], size: IconSize): IconInfo[] {
  return icons.filter(icon => icon.size === size);
}

/**
 * Filters icons by style
 * @param icons - Array of icons to filter
 * @param style - The style to filter by
 * @returns Filtered array of icons
 */
export function filterIconsByStyle(icons: IconInfo[], style: IconStyle): IconInfo[] {
  return icons.filter(icon => icon.style === style);
}

/**
 * Searches icons by name or slug
 * @param icons - Array of icons to search
 * @param query - The search query
 * @returns Filtered array of icons
 */
export function searchIcons(icons: IconInfo[], query: string): IconInfo[] {
  const lowercaseQuery = query.toLowerCase();
  return icons.filter(icon => 
    icon.name.toLowerCase().includes(lowercaseQuery) ||
    icon.slug.toLowerCase().includes(lowercaseQuery)
  );
}

/**
 * Gets a random selection of icons
 * @param icons - Array of icons to select from
 * @param count - Number of random icons to return
 * @returns Array of random IconInfo objects
 */
export function getRandomIcons(icons: IconInfo[], count: number = 10): IconInfo[] {
  const shuffled = [...icons].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}


