import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Chevronright20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M6.24399 4.42229C5.91867 4.09688 5.91867 3.56942 6.24399 3.24402C6.56932 2.91868 7.09667 2.91864 7.42197 3.24402L13.1142 8.93762C13.5165 9.3404 13.5165 9.99301 13.1142 10.3958L7.42197 16.0894L7.35852 16.1464C7.03132 16.4133 6.54899 16.3945 6.24399 16.0894C5.939 15.7843 5.92018 15.3019 6.18705 14.9746L6.24399 14.9111L11.4872 9.66672L6.24399 4.42229Z" fill="black"/>
    </Svg>
  );
};
