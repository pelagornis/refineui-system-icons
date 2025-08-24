import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Keyboardbackspace24FilledIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 24 24"
      fill="none"
      {{...props}}
    >
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4933 6.91463C10.8667 7.33252 10.819 7.96394 10.3868 8.32494L7.70074 10.5685H18.8534C19.4246 10.5685 19.8876 11.0161 19.8876 11.5684C19.8876 12.1206 19.4246 12.5683 18.8534 12.5683H7.70074L10.3868 14.8118C10.819 15.1728 10.8667 15.8042 10.4933 16.2221C10.1199 16.64 9.46691 16.6861 9.03471 16.3251L4.24568 12.325C3.76821 11.9262 3.76821 11.2105 4.24568 10.8117L9.03471 6.81161C9.46691 6.45061 10.1199 6.49673 10.4933 6.91463Z" fill="black"/>
    </Svg>
  );
};
