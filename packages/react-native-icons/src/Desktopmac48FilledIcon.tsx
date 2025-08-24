import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Desktopmac48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 9C9.79086 9 8 10.7909 8 13V27C8 29.2091 9.79086 31 12 31H18.4143V35.4H14C13.282 35.4 12.7 35.982 12.7 36.7C12.7 37.418 13.282 38 14 38H34C34.718 38 35.3 37.418 35.3 36.7C35.3 35.982 34.718 35.4 34 35.4H29.5857V31H36C38.2091 31 40 29.2091 40 27V13C40 10.7909 38.2091 9 36 9H12ZM37.4 25.3H10.6V27C10.6 27.7732 11.2268 28.4 12 28.4H36C36.7732 28.4 37.4 27.7732 37.4 27V25.3ZM21.0143 35.4V31H26.9857V35.4H21.0143Z" fill="black"/>
    </Svg>
  );
};
