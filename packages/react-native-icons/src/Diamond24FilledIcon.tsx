import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Diamond24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M10.4224 4.65345C11.2937 3.78218 12.7063 3.78218 13.5776 4.65345L19.3465 10.4224C20.2178 11.2937 20.2178 12.7063 19.3465 13.5776L13.5776 19.3465C12.7063 20.2178 11.2937 20.2178 10.4224 19.3465L4.65345 13.5776C3.78218 12.7063 3.78218 11.2937 4.65345 10.4224L10.4224 4.65345Z" fill="black"/>
    </Svg>
  );
};
