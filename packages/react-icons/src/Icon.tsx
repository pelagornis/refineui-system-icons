import * as React from 'react';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
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
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * Additional inline styles
   */
  style?: React.CSSProperties;
}

export const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  ({ 
    name = '', 
    size = 20, 
    variant = 'regular', 
    color = 'currentColor', 
    className = '', 
    style, 
    ...props 
  }, ref) => {
    const fontFamily = variant === 'filled' 
      ? 'RefineUI-System-Icons-Filled' 
      : 'RefineUI-System-Icons-Regular';

    return (
      <span
        ref={ref}
        className={`refineui-icon refineui-icon--${size} refineui-icon--${variant} ${className}`}
        style={{
          fontFamily,
          fontSize: size,
          color,
          display: 'inline-block',
          lineHeight: 1,
          ...style,
        }}
        {...props}
      >
        {name}
      </span>
    );
  }
);

Icon.displayName = 'Icon';
