import React from 'react';
import { Text } from 'react-native';
import { IconProps } from './types';

export interface CreateIconOptions {
  /**
   * The display name of the icon component.
   */
  displayName: string;
  
  /**
   * The unicode character for the icon.
   */
  unicode: string;
  
  /**
   * The default size of the icon.
   * @default 20
   */
  defaultSize?: IconProps['size'];
  
  /**
   * The default variant of the icon.
   * @default 'regular'
   */
  defaultVariant?: IconProps['variant'];
}

export function createIcon(options: CreateIconOptions) {
  const {
    displayName,
    unicode,
    defaultSize = 20,
    defaultVariant = 'regular'
  } = options;

  const IconComponent = React.forwardRef<Text, IconProps>(
    ({ size = defaultSize, variant = defaultVariant, color = 'currentColor', style, ...props }, ref) => {
      const fontFamily = variant === 'filled' 
        ? 'RefineUI-System-Icons-Filled' 
        : 'RefineUI-System-Icons-Regular';

      return (
        <Text
          ref={ref}
          style={[
            {
              fontFamily,
              fontSize: size,
              color,
              lineHeight: size,
            },
            style,
          ]}
          {...props}
        >
          {unicode}
        </Text>
      );
    }
  );

  IconComponent.displayName = displayName;

  return IconComponent;
}
