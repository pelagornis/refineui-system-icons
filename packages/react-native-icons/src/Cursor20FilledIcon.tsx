import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Cursor20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M3.04892 4.21542C2.80861 3.49448 3.49448 2.80861 4.21541 3.04892L15.6994 6.87691C16.5177 7.14967 16.5471 8.29627 15.7438 8.61057L11.3683 10.3228C10.8892 10.5102 10.5102 10.8892 10.3228 11.3682L8.61059 15.7438C8.29628 16.5471 7.14968 16.5177 6.87693 15.6994L3.04892 4.21542Z" fill="black"/>
    </Svg>
  );
};
