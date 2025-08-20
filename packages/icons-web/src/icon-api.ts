/**
 * RefineUI System Icons Web Package - API Functions
 * 
 * This file contains API functions for fetching and managing icons.
 */

import { IconInfo, IconSize, IconStyle } from './types';
import { ICON_BASE_URL, ICON_API_URL } from './constants';
import { isValidIconSize, isValidIconStyle, generateIconUrl } from './utils';

/**
 * Icon API class for managing icon operations
 */
export class IconAPI {
  private baseUrl: string;

  constructor(baseUrl: string = '') {
    this.baseUrl = baseUrl;
  }

  /**
   * Generates an icon URL
   * @param slug - The icon slug
   * @param size - The icon size
   * @returns The complete icon URL
   */
  getIconUrl(slug: string, size: number = 24): string {
    return `${this.baseUrl}${ICON_BASE_URL}/${size}/${slug}.svg`;
  }

  /**
   * Fetches icon SVG content
   * @param slug - The icon slug
   * @param size - The icon size
   * @returns Promise resolving to SVG content
   */
  async getIconSVG(slug: string, size: number = 24): Promise<string> {
    const response = await fetch(this.getIconUrl(slug, size));
    if (!response.ok) {
      throw new Error(`Failed to fetch icon: ${slug} (${size}px)`);
    }
    return response.text();
  }

  /**
   * Fetches all available icons
   * @returns Promise resolving to array of icon information
   */
  async getAllIcons(): Promise<IconInfo[]> {
    const response = await fetch(`${this.baseUrl}${ICON_API_URL}`);
    if (!response.ok) {
      throw new Error('Failed to fetch icons list');
    }
    return response.json();
  }

  /**
   * Fetches icons by size
   * @param size - The icon size to filter by
   * @returns Promise resolving to array of icon information
   */
  async getIconsBySize(size: number): Promise<IconInfo[]> {
    if (!isValidIconSize(size)) {
      throw new Error(`Invalid icon size: ${size}`);
    }
    const response = await fetch(`${this.baseUrl}${ICON_API_URL}?size=${size}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch icons for size: ${size}`);
    }
    return response.json();
  }

  /**
   * Fetches icons by style
   * @param style - The icon style to filter by
   * @returns Promise resolving to array of icon information
   */
  async getIconsByStyle(style: string): Promise<IconInfo[]> {
    if (!isValidIconStyle(style)) {
      throw new Error(`Invalid icon style: ${style}`);
    }
    const response = await fetch(`${this.baseUrl}${ICON_API_URL}?style=${style}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch icons for style: ${style}`);
    }
    return response.json();
  }

  /**
   * Searches for icons by query
   * @param query - The search query
   * @returns Promise resolving to array of matching icons
   */
  async searchIcons(query: string): Promise<IconInfo[]> {
    const response = await fetch(`${this.baseUrl}${ICON_API_URL}/search?q=${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error('Failed to search icons');
    }
    return response.json();
  }

  /**
   * Downloads an icon as SVG file
   * @param slug - The icon slug
   * @param size - The icon size
   */
  downloadIcon(slug: string, size: number = 24): void {
    const link = document.createElement('a');
    link.href = this.getIconUrl(slug, size);
    link.download = `${slug}-${size}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

/** Default icon API instance */
export const iconAPI = new IconAPI();

/**
 * Generates an icon URL
 * @param slug - The icon slug
 * @param size - The icon size
 * @returns The complete icon URL
 */
export const getIconUrl = (slug: string, size: number = 24): string => {
  return iconAPI.getIconUrl(slug, size);
};

/**
 * Fetches icon SVG content
 * @param slug - The icon slug
 * @param size - The icon size
 * @returns Promise resolving to SVG content
 */
export const getIconSVG = (slug: string, size: number = 24): Promise<string> => {
  return iconAPI.getIconSVG(slug, size);
};

/**
 * Fetches all available icons
 * @returns Promise resolving to array of icon information
 */
export const getAllIcons = (): Promise<IconInfo[]> => {
  return iconAPI.getAllIcons();
};

/**
 * Searches for icons by query
 * @param query - The search query
 * @returns Promise resolving to array of matching icons
 */
export const searchIcons = (query: string): Promise<IconInfo[]> => {
  return iconAPI.searchIcons(query);
};

/**
 * Downloads an icon as SVG file
 * @param slug - The icon slug
 * @param size - The icon size
 */
export const downloadIcon = (slug: string, size: number = 24): void => {
  return iconAPI.downloadIcon(slug, size);
};
