import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Ioschevronrtl20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M11.7906 12.8332C11.4226 12.557 11.3481 12.0348 11.6243 11.6668L12.9377 9.91669C13.0489 9.76854 13.0489 9.56479 12.9377 9.41665L11.6243 7.66649C11.3481 7.2985 11.4226 6.77631 11.7906 6.50014C12.1586 6.22398 12.6808 6.29842 12.9569 6.66641L14.8332 9.16663C15.0556 9.46291 15.0556 9.87042 14.8332 10.1667L12.9569 12.6669C12.6808 13.0349 12.1586 13.1094 11.7906 12.8332Z" fill="black"/>
    </Svg>
  );
};
