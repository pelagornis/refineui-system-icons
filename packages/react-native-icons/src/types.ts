import { TextProps } from 'react-native';

export interface IconProps extends TextProps {
  /**
   * The size of the icon.
   * @default 20
   */
  size?: 12 | 16 | 20 | 24 | 28 | 32 | 48;
  
  /**
   * The color of the icon.
   * @default 'currentColor'
   */
  color?: string;
  
  /**
   * Whether the icon should be filled or regular.
   * @default 'regular'
   */
  variant?: 'regular' | 'filled';
}
