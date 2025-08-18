import React from 'react';
import { Text, TextProps } from 'react-native';

export interface IconProps extends TextProps {
  /**
   * The icon name or unicode character
   */
  name?: string;
  
  /**
   * The size of the icon
   * @default 20
   */
  size?: 12 | 16 | 20 | 24 | 28 | 32 | 48;
  
  /**
   * The color of the icon
   * @default 'currentColor'
   */
  color?: string;
  
  /**
   * Whether the icon should be filled or regular
   * @default 'regular'
   */
  variant?: 'regular' | 'filled';
}

export const Icon = React.forwardRef<Text, IconProps>(
  ({ 
    name = '', 
    size = 20, 
    variant = 'regular', 
    color = 'currentColor', 
    style, 
    ...props 
  }, ref) => {
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
        {name}
      </Text>
    );
  }
);

Icon.displayName = 'Icon';
