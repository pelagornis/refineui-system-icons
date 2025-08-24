import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Play20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8341 10.4743C16.4997 10.1415 16.4997 9.19181 15.8341 8.85905L4.30698 3.09649C3.70651 2.79631 3 3.23288 3 3.90411V15.4292C3 16.1005 3.70651 16.537 4.30698 16.2368L15.8341 10.4743Z" fill="black"/>
    </Svg>
  );
};
