import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Ruler48RegularIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 12C16 9.79086 17.7909 8 20 8H28C30.2091 8 32 9.79086 32 12V36C32 38.2091 30.2091 40 28 40H20C17.7909 40 16 38.2091 16 36V12ZM20 10.6H28C28.7732 10.6 29.4 11.2268 29.4 12V36C29.4 36.7732 28.7732 37.4 28 37.4H20C19.2268 37.4 18.6 36.7732 18.6 36V35.8H22C22.718 35.8 23.3 35.218 23.3 34.5C23.3 33.782 22.718 33.2 22 33.2H18.6V30.8H24C24.718 30.8 25.3 30.218 25.3 29.5C25.3 28.782 24.718 28.2 24 28.2H18.6V25.8H22C22.718 25.8 23.3 25.218 23.3 24.5C23.3 23.782 22.718 23.2 22 23.2H18.6V20.8H24C24.718 20.8 25.3 20.218 25.3 19.5C25.3 18.782 24.718 18.2 24 18.2H18.6V15.8H22C22.718 15.8 23.3 15.218 23.3 14.5C23.3 13.782 22.718 13.2 22 13.2H18.6V12C18.6 11.2268 19.2268 10.6 20 10.6Z" fill="black"/>
    </Svg>
  );
};
