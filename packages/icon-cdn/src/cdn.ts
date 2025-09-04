/**
 * RefineUI System Icons CDN Package - CDN Functions
 * 
 * This file contains all CDN-related functions for generating URLs,
 * searching icons, and managing icon metadata.
 */

import { CDN_CONFIG, ICON_METADATA } from './constants';
import { 
  IconInfo, 
  IconSize, 
  IconStyle
} from './types';
import { isValidIconSize, isValidIconStyle, generateIconFileName } from './utils';

/**
 * Generates a CDN URL for an icon
 * @param iconName - The name of the icon
 * @param size - The size of the icon
 * @param style - The style of the icon
 * @returns The complete CDN URL
 * @throws {Error} If the style is invalid
 */
export function generateCDNUrl(iconName: string, size: number, style: 'regular' | 'filled'): string {
  if (!isValidIconStyle(style)) {
    throw new Error(`Invalid icon style: ${style}. Must be 'regular' or 'filled'`);
  }
  
  const fileName = generateIconFileName(iconName, style);
  return `${CDN_CONFIG.baseUrl}/${CDN_CONFIG.packageName}@${CDN_CONFIG.version}/icons/${size}/${fileName}`;
}

/**
 * Generates CDN URLs for all available icons
 * @returns Array of IconInfo objects for all icons
 */
export function generateAllCDNUrls(): IconInfo[] {
  const urls: IconInfo[] = [];
  
  ICON_METADATA.icons.forEach(iconName => {
    ICON_METADATA.sizes.forEach(size => {
      ICON_METADATA.styles.forEach(style => {
        urls.push({
          name: iconName,
          size: size,
          style: style,
          url: generateCDNUrl(iconName, size, style),
          fileName: generateIconFileName(iconName, style)
        });
      });
    });
  });
  
  return urls;
}

/**
 * Gets information for a specific icon
 * @param iconName - The name of the icon
 * @param size - The size of the icon (default: 24)
 * @param style - The style of the icon (default: 'regular')
 * @returns IconInfo object for the specified icon
 * @throws {Error} If the icon, size, or style is not found/supported
 */
export function getIconInfo(
  iconName: string, 
  size: number = 24, 
  style: 'regular' | 'filled' = 'regular'
): IconInfo {
  if (!ICON_METADATA.icons.includes(iconName as any)) {
    throw new Error(`Icon '${iconName}' not found. Available icons: ${ICON_METADATA.icons.slice(0, 10).join(', ')}...`);
  }
  
  if (!isValidIconSize(size)) {
    throw new Error(`Size ${size} not supported. Supported sizes: ${ICON_METADATA.sizes.join(', ')}`);
  }
  
  if (!isValidIconStyle(style)) {
    throw new Error(`Style '${style}' not supported. Supported styles: ${ICON_METADATA.styles.join(', ')}`);
  }
  
  return {
    name: iconName,
    size: size,
    style: style,
    url: generateCDNUrl(iconName, size, style),
    fileName: generateIconFileName(iconName, style)
  };
}

/**
 * Gets all icons of a specific size
 * @param size - The size to filter by
 * @returns Array of IconInfo objects for the specified size
 * @throws {Error} If the size is invalid
 */
export function getIconsBySize(size: IconSize): IconInfo[] {
  if (!isValidIconSize(size)) {
    throw new Error(`Invalid size: ${size}. Supported sizes: ${ICON_METADATA.sizes.join(', ')}`);
  }
  
  return ICON_METADATA.icons.flatMap(iconName => 
    ICON_METADATA.styles.map(style => ({
      name: iconName,
      size: size,
      style: style,
      url: generateCDNUrl(iconName, size, style),
      fileName: generateIconFileName(iconName, style)
    }))
  );
}

/**
 * Gets all icons of a specific style
 * @param style - The style to filter by
 * @returns Array of IconInfo objects for the specified style
 * @throws {Error} If the style is invalid
 */
export function getIconsByStyle(style: IconStyle): IconInfo[] {
  if (!isValidIconStyle(style)) {
    throw new Error(`Invalid style: ${style}. Supported styles: ${ICON_METADATA.styles.join(', ')}`);
  }
  
  return ICON_METADATA.icons.flatMap(iconName => 
    ICON_METADATA.sizes.map(size => ({
      name: iconName,
      size: size,
      style: style,
      url: generateCDNUrl(iconName, size, style),
      fileName: generateIconFileName(iconName, style)
    }))
  );
}

/**
 * Searches for icons by name
 * @param query - The search query
 * @returns Array of IconInfo objects matching the query
 */
export function searchIcons(query: string): IconInfo[] {
  const lowercaseQuery = query.toLowerCase();
  
  return ICON_METADATA.icons
    .filter(iconName => 
      iconName.toLowerCase().includes(lowercaseQuery) ||
      iconName.replace(/_/g, ' ').toLowerCase().includes(lowercaseQuery)
    )
    .flatMap(iconName => 
      ICON_METADATA.sizes.flatMap(size => 
        ICON_METADATA.styles.map(style => ({
          name: iconName,
          size: size,
          style: style,
          url: generateCDNUrl(iconName, size, style),
          fileName: generateIconFileName(iconName, style)
        }))
      )
    );
}



/**
 * Gets a random selection of icons
 * @param count - Number of random icons to return
 * @returns Array of random IconInfo objects
 */
export function getRandomIcons(count: number = 10): IconInfo[] {
  const allIcons = generateAllCDNUrls();
  const shuffled = allIcons.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, allIcons.length));
}


