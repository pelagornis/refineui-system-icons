import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Kiosk24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 6C5 4.89543 5.89543 4 7 4H17C18.1046 4 19 4.89543 19 6V11.2096C19 12.3142 18.1046 13.2096 17 13.2096H14.15V18.6994H16C16.359 18.6994 16.65 18.9904 16.65 19.3494C16.65 19.7084 16.359 19.9994 16 19.9994H8C7.64102 19.9994 7.35 19.7084 7.35 19.3494C7.35 18.9904 7.64102 18.6994 8 18.6994H9.85V13.2096H7C5.89543 13.2096 5 12.3142 5 11.2096V6ZM11.15 13.2096V18.6994H12.85V13.2096H11.15Z" fill="black"/>
    </Svg>
  );
};
