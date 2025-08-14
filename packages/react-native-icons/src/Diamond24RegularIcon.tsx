import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Diamond24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5776 4.65345C12.7063 3.78218 11.2937 3.78218 10.4224 4.65345L4.65345 10.4224C3.78218 11.2937 3.78218 12.7063 4.65345 13.5776L10.4224 19.3465C11.2937 20.2178 12.7063 20.2178 13.5776 19.3465L19.3465 13.5776C20.2178 12.7063 20.2178 11.2937 19.3465 10.4224L13.5776 4.65345ZM18.4273 11.3417L12.6583 5.57269C12.2947 5.2091 11.7053 5.2091 11.3417 5.57269L5.57269 11.3417C5.2091 11.7053 5.2091 12.2947 5.57269 12.6583L11.3417 18.4273C11.7053 18.7909 12.2947 18.7909 12.6583 18.4273L18.4273 12.6583C18.7909 12.2947 18.7909 11.7053 18.4273 11.3417Z" fill="black"/>
    </Svg>
  );
};
