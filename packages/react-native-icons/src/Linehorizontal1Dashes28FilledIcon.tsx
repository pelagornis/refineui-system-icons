import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Linehorizontal1Dashes28FilledIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 14.1666C5 13.5223 5.52229 13 6.16657 13H7.5277C8.17198 13 8.69427 13.5223 8.69427 14.1666C8.69427 14.8109 8.17198 15.3331 7.5277 15.3331H6.16657C5.52229 15.3331 5 14.8109 5 14.1666Z" fill="black"/>
<path d="M9.08338 14.1666C9.08338 13.5223 9.60567 13 10.25 13H12.9722C13.6165 13 14.1388 13.5223 14.1388 14.1666C14.1388 14.8109 13.6165 15.3331 12.9722 15.3331H10.25C9.60567 15.3331 9.08338 14.8109 9.08338 14.1666Z" fill="black"/>
<path d="M14.5279 14.1666C14.5279 13.5223 15.0502 13 15.6945 13H18.4167C19.061 13 19.5833 13.5223 19.5833 14.1666C19.5833 14.8109 19.061 15.3331 18.4167 15.3331H15.6945C15.0502 15.3331 14.5279 14.8109 14.5279 14.1666Z" fill="black"/>
<path d="M19.9724 14.1666C19.9724 13.5223 20.4947 13 21.139 13H22.5001C23.1444 13 23.6667 13.5223 23.6667 14.1666C23.6667 14.8109 23.1444 15.3331 22.5001 15.3331H21.139C20.4947 15.3331 19.9724 14.8109 19.9724 14.1666Z" fill="black"/>
    </Svg>
  );
};
