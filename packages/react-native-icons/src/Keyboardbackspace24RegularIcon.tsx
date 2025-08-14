import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Keyboardbackspace24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M10.5223 7.48498C10.7674 7.7543 10.7405 8.16493 10.4622 8.40215L6.69418 11.6148H19.7591C20.1299 11.6148 20.4304 11.9058 20.4304 12.2646C20.4304 12.6235 20.1299 12.9145 19.7591 12.9145H6.69418L10.4622 16.1272C10.7405 16.3644 10.7674 16.775 10.5223 17.0443C10.2772 17.3136 9.85303 17.3397 9.57481 17.1025L4.78058 13.0149C4.3137 12.6168 4.3137 11.9125 4.78058 11.5144L9.57481 7.42684C9.85303 7.18963 10.2772 7.21565 10.5223 7.48498Z" fill="black"/>
    </Svg>
  );
};
