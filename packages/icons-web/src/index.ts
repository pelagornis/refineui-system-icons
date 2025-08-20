/**
 * RefineUI System Icons Web Package
 * 
 * A TypeScript-first web icon library providing type-safe access
 * to RefineUI System Icons for web applications.
 * 
 * @packageDocumentation
 */

import { IconInfo } from './types';

// Type definitions
export * from './types';

// Constants
export * from './constants';

// Utility functions
export * from './utils';



// Icon API functions
export * from './icon-api';

/**
 * Generates an icon URL for a given slug and size
 * @param slug - The icon slug
 * @param size - The icon size (default: 24)
 * @returns The icon URL
 */
export function getIconUrl(slug: string, size: number = 24): string {
  return `/icons/${size}/${slug}.svg`;
}

/**
 * Fetches icon SVG content
 * @param slug - The icon slug
 * @param size - The icon size (default: 24)
 * @returns Promise resolving to SVG content
 */
export async function getIconSvg(slug: string, size: number = 24): Promise<string> {
  const response = await fetch(getIconUrl(slug, size));
  if (!response.ok) {
    throw new Error(`Failed to fetch icon: ${response.statusText}`);
  }
  return response.text();
}

/**
 * Fetches all available icons metadata
 * @returns Promise resolving to array of icon information
 */
export async function getAllIcons(): Promise<IconInfo[]> {
  const response = await fetch('/api/icons');
  if (!response.ok) {
    throw new Error(`Failed to fetch icons: ${response.statusText}`);
  }
  return response.json();
}

/**
 * Searches for icons by name
 * @param query - Search query
 * @param icons - Array of icons to search in
 * @returns Filtered array of icons
 */
export function searchIcons(query: string, icons: IconInfo[]): IconInfo[] {
  const lowercaseQuery = query.toLowerCase();
  return icons.filter(icon => 
    icon.name.toLowerCase().includes(lowercaseQuery) ||
    icon.slug.toLowerCase().includes(lowercaseQuery)
  );
}

/**
 * Filters icons by size
 * @param size - Icon size to filter by
 * @param icons - Array of icons to filter
 * @returns Filtered array of icons
 */
export function filterIconsBySize(size: number, icons: IconInfo[]): IconInfo[] {
  return icons.filter(icon => icon.size === size);
}

/**
 * Filters icons by style
 * @param style - Icon style to filter by
 * @param icons - Array of icons to filter
 * @returns Filtered array of icons
 */
export function filterIconsByStyle(style: string, icons: IconInfo[]): IconInfo[] {
  return icons.filter(icon => icon.style === style);
}
