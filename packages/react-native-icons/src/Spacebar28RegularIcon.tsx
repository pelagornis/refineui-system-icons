import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Spacebar28RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M5.75837 12C6.17721 12 6.51674 12.3395 6.51674 12.7584V14.862C6.51674 15.0231 6.64733 15.1537 6.80842 15.1537H21.8582C22.0193 15.1537 22.1499 15.0231 22.1499 14.862V12.7584C22.1499 12.3395 22.4895 12 22.9083 12C23.3271 12 23.6667 12.3395 23.6667 12.7584V15.3287C23.6667 16.0697 23.066 16.6704 22.3249 16.6704H6.34173C5.60071 16.6704 5 16.0697 5 15.3287V12.7584C5 12.3395 5.33953 12 5.75837 12Z" fill="black"/>
    </Svg>
  );
};
