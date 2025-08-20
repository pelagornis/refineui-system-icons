/**
 * RefineUI System Icons CDN Package Utilities
 * 
 * This file contains utility functions for icon name processing,
 * validation, and SVG generation.
 */

import { ICON_NAME_MAPPING } from './constants';
import { IconSize, IconStyle } from './types';

/**
 * Converts a string to snake_case format
 * @param name - The string to convert
 * @returns The snake_case formatted string
 */
export function toSnakeCase(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '_');
}

/**
 * Maps an icon display name to its snake_case format
 * @param originalName - The original display name
 * @returns The mapped snake_case name
 */
export function mapIconName(originalName: string): string {
  // First check the mapping table
  if (ICON_NAME_MAPPING[originalName]) {
    return ICON_NAME_MAPPING[originalName];
  }
  
  // If not found in mapping table, convert to snake_case
  return toSnakeCase(originalName);
}

/**
 * Formats a snake_case name to a display-friendly format
 * @param name - The snake_case name to format
 * @returns The formatted display name
 */
export function formatDisplayName(name: string): string {
  return name.split('_').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}

/**
 * Type guard to check if a number is a valid icon size
 * @param size - The size to validate
 * @returns True if the size is valid
 */
export function isValidIconSize(size: number): size is IconSize {
  return [16, 20, 24, 28, 32, 48].includes(size);
}

/**
 * Type guard to check if a string is a valid icon style
 * @param style - The style to validate
 * @returns True if the style is valid
 */
export function isValidIconStyle(style: string): style is IconStyle {
  return style === 'regular' || style === 'filled';
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
 * Generates a filename for an icon
 * @param name - The icon name
 * @param style - The icon style
 * @returns The generated filename
 */
export function generateIconFileName(name: string, style: IconStyle): string {
  return `${name}-${style}.svg`;
}

/**
 * Generates a sample SVG content for an icon
 * @param iconName - The name of the icon
 * @param size - The size of the icon
 * @param style - The style of the icon
 * @returns The SVG content as a string
 */
export function generateSampleSVG(iconName: string, size: number, style: IconStyle): string {
  const fillColor = style === 'filled' ? '#3498db' : 'none';
  const strokeColor = '#3498db';
  const textColor = style === 'filled' ? 'white' : '#3498db';
  
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" fill="${fillColor}" stroke="${strokeColor}" stroke-width="1"/>
  <text x="${size/2}" y="${size/2}" text-anchor="middle" dy=".3em" font-size="${size/3}" fill="${textColor}">${iconName.charAt(0).toUpperCase()}</text>
</svg>`;
}
