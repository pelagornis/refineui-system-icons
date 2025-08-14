import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Doctor20FilledIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.6321 4C8.10302 4 7.67412 4.4289 7.67412 4.95798V7.46586C7.67412 7.58088 7.58088 7.67412 7.46586 7.67412H4.95798C4.4289 7.67412 4 8.10302 4 8.6321V12.6979C4 13.227 4.4289 13.6559 4.95798 13.6559H7.46586C7.58088 13.6559 7.67412 13.7491 7.67412 13.8641V16.372C7.67412 16.9011 8.10302 17.33 8.6321 17.33H12.6979C13.227 17.33 13.6559 16.9011 13.6559 16.372V13.8641C13.6559 13.7491 13.7491 13.6559 13.8641 13.6559H16.372C16.9011 13.6559 17.33 13.227 17.33 12.6979V8.6321C17.33 8.10302 16.9011 7.67412 16.372 7.67412H13.8641C13.7491 7.67412 13.6559 7.58088 13.6559 7.46586V4.95798C13.6559 4.4289 13.227 4 12.6979 4H8.6321Z" fill="black"/>
    </Svg>
  );
};
