import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Cone16FilledIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 16 16"
      fill="none"
      {{...props}}
    >
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.87268 3.30178C8.04727 2.89941 8.6194 2.89941 8.79398 3.30178L12.6276 12.1372C12.7319 12.3777 12.6175 12.6405 12.4013 12.7443C9.83995 13.9741 6.82672 13.9741 4.26533 12.7443C4.04917 12.6405 3.93476 12.3777 4.03908 12.1372L7.87268 3.30178Z" fill="black"/>
    </Svg>
  );
};
