// CDN package utilities for SVG icon URLs

// CDN base URL
const CDN_BASE_URL = 'https://jihoonahn.github.io/refineui-system-icons/cdn';

// === SVG URL generation method ===
export const createIconURL = (iconName: string, size: number = 24, style: 'regular' | 'filled' = 'regular') => {
  return `${CDN_BASE_URL}/icons/${size}/${iconName}-${style}.svg`;
};

// === CDN utility functions ===
export const getCDNBaseUrl = () => CDN_BASE_URL;

// === Functions needed for build.ts ===
export const mapIconName = (iconDir: string): string => {
  // Convert folder name to icon name using the mapping from constants
  const { ICON_NAME_MAPPING } = require('./constants');
  return ICON_NAME_MAPPING[iconDir] || iconDir.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
};

export const generateSampleSVG = (iconName: string, size: number, style: string): string => {
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" fill="${style === 'filled' ? '#000' : 'none'}" stroke="#000" stroke-width="1"/>
  <text x="${size/2}" y="${size/2 + 4}" text-anchor="middle" font-family="Arial" font-size="${size/3}" fill="#000">${iconName}</text>
</svg>`;
};

// === Functions needed for cdn.ts ===
export const isValidIconSize = (size: number): boolean => {
  return [16, 20, 24, 28, 32, 48].includes(size);
};

export const isValidIconStyle = (style: string): style is 'regular' | 'filled' => {
  return style === 'regular' || style === 'filled';
};

export const generateIconFileName = (iconName: string, style: string): string => {
  return `${iconName}-${style}.svg`;
};

// === Utility functions ===
export const getIconURL = (iconName: string, size: number = 24, style: 'regular' | 'filled' = 'regular') => {
  return createIconURL(iconName, size, style);
};