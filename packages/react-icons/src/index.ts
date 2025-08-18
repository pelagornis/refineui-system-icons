// Direct font-based icon system (FluentUI style)
export { Icon } from './Icon';
export type { IconProps } from './Icon';

// Icon constants for direct usage
export const ICONS = {
  // Regular icons
  GAVEL_REGULAR: '\uE000',
  SETTINGS_REGULAR: '\uE001',
  HOME_REGULAR: '\uE002',
  SEARCH_REGULAR: '\uE003',
  ADD_REGULAR: '\uE004',
  DELETE_REGULAR: '\uE005',
  EDIT_REGULAR: '\uE006',
  SAVE_REGULAR: '\uE007',
  CLOSE_REGULAR: '\uE008',
  CHECK_REGULAR: '\uE009',
  
  // Filled icons
  GAVEL_FILLED: '\uE100',
  SETTINGS_FILLED: '\uE101',
  HOME_FILLED: '\uE102',
  SEARCH_FILLED: '\uE103',
  ADD_FILLED: '\uE104',
  DELETE_FILLED: '\uE105',
  EDIT_FILLED: '\uE106',
  SAVE_FILLED: '\uE107',
  CLOSE_FILLED: '\uE108',
  CHECK_FILLED: '\uE109',
} as const;

// Icon names for type safety
export type IconName = keyof typeof ICONS;

// Utility function to get icon unicode
export function getIconUnicode(name: IconName): string {
  return ICONS[name];
}
