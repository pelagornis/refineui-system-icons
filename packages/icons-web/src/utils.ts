/**
 * RefineUI System Icons Web Package Utilities
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
  return `${name}-${style}.svg`;
}

/**
 * Generates an icon URL
 * @param name - The icon name
 * @param size - The icon size
 * @param style - The icon style
 * @returns The complete icon URL
 */
export function generateIconUrl(name: string, size: IconSize, style: IconStyle): string {
  const fileName = generateIconFileName(name, style);
  return `${ICON_BASE_URL}/${size}/${fileName}`;
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
 * Gets the category of an icon based on its name
 * @param iconName - The icon name
 * @returns The category name or null if not found
 */
export function getIconCategory(iconName: string): string | null {
  const categories = {
    navigation: ['home', 'search', 'arrow', 'chevron', 'location', 'map'],
    actions: ['add', 'edit', 'delete', 'save', 'close', 'checkmark'],
    communication: ['mail', 'chat', 'phone', 'share', 'notification'],
    media: ['play', 'pause', 'stop', 'video', 'audio', 'camera'],
    social: ['person', 'user', 'group', 'heart', 'star'],
    technology: ['computer', 'laptop', 'phone', 'tablet', 'wifi'],
    weather: ['sun', 'moon', 'cloud', 'rain', 'snow'],
    tools: ['settings', 'gear', 'tool', 'wrench', 'hammer']
  };

  for (const [category, patterns] of Object.entries(categories)) {
    if (patterns.some(pattern => iconName.includes(pattern))) {
      return category;
    }
  }

  return null;
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
    url: generateIconUrl(name, size, style),
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
 * Sorts icons by category
 * @param icons - Array of icons to sort
 * @returns Sorted array of icons
 */
export function sortIconsByCategory(icons: IconInfo[]): IconInfo[] {
  return [...icons].sort((a, b) => {
    const categoryA = getIconCategory(a.slug) || 'other';
    const categoryB = getIconCategory(b.slug) || 'other';
    return categoryA.localeCompare(categoryB);
  });
}
