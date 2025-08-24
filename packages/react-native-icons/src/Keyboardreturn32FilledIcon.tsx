import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Keyboardreturn32FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M13.8076 9.4617C14.3054 10.0189 14.2418 10.8608 13.6655 11.3421L10.0842 14.3335H23.5757V10.8666C23.5757 10.1303 24.193 9.53337 24.9545 9.53337C25.716 9.53337 26.3333 10.1303 26.3333 10.8666V15.6667C26.3333 16.403 25.716 16.9999 24.9545 16.9999H10.0842L13.6655 19.9912C14.2418 20.4725 14.3054 21.3144 13.8076 21.8716C13.3098 22.4288 12.4391 22.4903 11.8629 22.009L5.47748 16.6756C4.84084 16.1438 4.84084 15.1895 5.47747 14.6578L11.8629 9.32432C12.4391 8.843 13.3098 8.9045 13.8076 9.4617Z" fill="black"/>
    </Svg>
  );
};
