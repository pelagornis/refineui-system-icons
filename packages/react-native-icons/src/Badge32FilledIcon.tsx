import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Badge32FilledIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.4889 10.6889C25.0598 10.6889 26.3333 9.41539 26.3333 7.84444C26.3333 6.2735 25.0598 5 23.4889 5C21.918 5 20.6444 6.2735 20.6444 7.84444C20.6444 9.41539 21.918 10.6889 23.4889 10.6889Z" fill="black"/>
<path d="M23.4889 12.1111C23.9876 12.1111 24.4662 12.0256 24.9111 11.8683V23.4889C24.9111 25.0598 23.6376 26.3333 22.0667 26.3333H7.84444C6.27352 26.3333 5 25.0598 5 23.4889V9.26667C5 7.69572 6.27352 6.42222 7.84444 6.42222H19.465C19.3078 6.86706 19.2222 7.34577 19.2222 7.84444C19.2222 10.2009 21.1325 12.1111 23.4889 12.1111Z" fill="black"/>
    </Svg>
  );
};
