import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Important16FilledIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 16 16"
      fill="none"
      {{...props}}
    >
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99956 4.91349C9.99956 5.97029 9.10423 10.654 7.99978 10.654C6.89533 10.654 6 5.97029 6 4.91349C6 3.8567 6.89533 3 7.99978 3C9.10423 3 9.99956 3.8567 9.99956 4.91349Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.99978 10.8057C7.20936 10.8057 6.5666 11.4451 6.5666 12.2362C6.5666 13.0273 7.20936 13.6667 7.99978 13.6667C8.7902 13.6667 9.43296 13.0273 9.43296 12.2362C9.43296 11.4451 8.7902 10.8057 7.99978 10.8057Z" fill="black"/>
    </Svg>
  );
};
