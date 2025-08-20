/**
 * RefineUI System Icons React Package - Icon Component
 * 
 * A React component for displaying RefineUI System Icons using font icons.
 */

import React, { forwardRef, useMemo } from 'react';
import { IconProps } from './types';
import { 
  DEFAULT_ICON_SIZE, 
  DEFAULT_ICON_STYLE 
} from './constants';
import { 
  getIconUnicode, 
  isValidIconSize, 
  isValidIconStyle,
  formatDisplayName 
} from './utils';

/**
 * RefineUI Icon Component
 * 
 * Displays RefineUI System Icons as font icons with full TypeScript support.
 * 
 * @example
 * ```tsx
 * import { Icon } from '@refineui/react-icons';
 * 
 * // Basic usage
 * <Icon name="add" />
 * 
 * // With size and style
 * <Icon name="heart" size={32} style="filled" />
 * 
 * // With custom styling
 * <Icon 
 *   name="settings" 
 *   size={24} 
 *   className="my-icon" 
 *   onClick={() => console.log('clicked')} 
 * />
 * ```
 */
export const Icon = forwardRef<HTMLSpanElement, IconProps>(
  (
    {
      name,
      size = DEFAULT_ICON_SIZE,
      style = DEFAULT_ICON_STYLE,
      className,
      inlineStyle,
      onClick,
      alt,
      title,
      loading = 'lazy',
      onError,
      onLoad,
      ...props
    },
    ref
  ) => {
    // Validate props
    const validSize = isValidIconSize(size) ? size : DEFAULT_ICON_SIZE;
    const validStyle = isValidIconStyle(style) ? style : DEFAULT_ICON_STYLE;

    // Get icon unicode
    const iconUnicode = useMemo(() => {
      return getIconUnicode(name, validSize, validStyle);
    }, [name, validSize, validStyle]);

    // Generate title if not provided
    const titleText = useMemo(() => {
      if (title) return title;
      return `${formatDisplayName(name)} (${validSize}px, ${validStyle})`;
    }, [title, name, validSize, validStyle]);

    // Generate font family
    const fontFamily = useMemo(() => {
      return validStyle === 'filled' 
        ? 'RefineUI-System-Icons-Filled' 
        : 'RefineUI-System-Icons-Regular';
    }, [validStyle]);

    // Generate styles
    const iconStyles = useMemo(() => {
      return {
        fontFamily,
        fontSize: `${validSize}px`,
        lineHeight: `${validSize}px`,
        display: 'inline-block',
        width: `${validSize}px`,
        height: `${validSize}px`,
        textAlign: 'center' as const,
        ...inlineStyle
      };
    }, [fontFamily, validSize, inlineStyle]);

    return (
      <span
        ref={ref}
        title={titleText}
        className={className}
        style={iconStyles}
        onClick={onClick}
        {...props}
      >
        {iconUnicode}
      </span>
    );
  }
);

Icon.displayName = 'RefineUIIcon';

export default Icon;
