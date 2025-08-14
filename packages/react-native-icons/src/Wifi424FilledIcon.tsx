import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Wifi424FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M12.0485 17.95C12.725 17.95 13.2735 17.4015 13.2735 16.725C13.2735 16.0485 12.725 15.5 12.0485 15.5C11.3719 15.5 10.8235 16.0485 10.8235 16.725C10.8235 17.4015 11.3719 17.95 12.0485 17.95Z" fill="black"/>
    </Svg>
  );
};
