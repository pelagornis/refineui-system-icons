/**
 * RefineUI System Icons React Native Package - Icon Component
 * 
 * A React Native component for displaying RefineUI System Icons using font icons.
 */

import React, { forwardRef, useMemo } from 'react';
import { 
  TouchableOpacity, 
  Text, 
  View, 
  StyleSheet, 
  ViewStyle, 
  TextStyle 
} from 'react-native';
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
 * RefineUI Icon Component for React Native
 * 
 * Displays RefineUI System Icons as images with full TypeScript support.
 * 
 * @example
 * ```tsx
 * import { Icon } from '@refineui/react-native-icons';
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
 *   color="#007AFF"
 *   onPress={() => console.log('pressed')} 
 * />
 * ```
 */
export const Icon = forwardRef<TouchableOpacity, IconProps>(
  (
    {
      name,
      size = DEFAULT_ICON_SIZE,
      style = DEFAULT_ICON_STYLE,
      containerStyle,
      iconStyle,
      onPress,
      accessibilityLabel,
      accessibilityHint,
      accessible = true,
      testID,
      color,
      backgroundColor,
      borderRadius,
      padding,
      margin,
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

    // Generate accessibility label if not provided
    const accessibilityLabelText = useMemo(() => {
      if (accessibilityLabel) return accessibilityLabel;
      return formatDisplayName(name);
    }, [accessibilityLabel, name]);

    // Generate container styles
    const containerStyles = useMemo(() => {
      const styles: ViewStyle = {
        width: validSize,
        height: validSize,
        justifyContent: 'center',
        alignItems: 'center',
      };

      if (backgroundColor) {
        styles.backgroundColor = backgroundColor;
      }

      if (borderRadius !== undefined) {
        styles.borderRadius = borderRadius;
      }

      if (padding !== undefined) {
        styles.padding = padding;
      }

      if (margin !== undefined) {
        styles.margin = margin;
      }

      return StyleSheet.flatten([styles, containerStyle]);
    }, [validSize, backgroundColor, borderRadius, padding, margin, containerStyle]);

    // Generate text styles
    const textStyles = useMemo(() => {
      const fontFamily = validStyle === 'filled' 
        ? 'RefineUI-System-Icons-Filled' 
        : 'RefineUI-System-Icons-Regular';

      const styles: TextStyle = {
        fontSize: validSize,
        color: color,
        fontFamily,
        textAlign: 'center',
        lineHeight: validSize,
      };

      return StyleSheet.flatten([styles, iconStyle]);
    }, [validSize, validStyle, color, iconStyle]);

    // If onPress is provided, render as TouchableOpacity
    if (onPress) {
      return (
        <TouchableOpacity
          ref={ref}
          style={containerStyles}
          onPress={onPress}
          accessible={accessible}
          accessibilityLabel={accessibilityLabelText}
          accessibilityHint={accessibilityHint}
          testID={testID}
          {...props}
        >
          <Text style={textStyles}>
            {iconUnicode}
          </Text>
        </TouchableOpacity>
      );
    }

    // Otherwise render as View
    return (
      <View
        ref={ref}
        style={containerStyles}
        accessible={accessible}
        accessibilityLabel={accessibilityLabelText}
        accessibilityHint={accessibilityHint}
        testID={testID}
        {...props}
      >
        <Text style={textStyles}>
          {iconUnicode}
        </Text>
      </View>
    );
  }
);

Icon.displayName = 'RefineUIIcon';

export default Icon;
