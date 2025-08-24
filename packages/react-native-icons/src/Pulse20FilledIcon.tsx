import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Pulse20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M8.03907 8.33629L7.42514 9.6874C7.22235 10.1337 6.7774 10.4202 6.28721 10.4202H3.83327C3.37307 10.4202 3 10.0472 3 9.58697C3 9.12677 3.37307 8.75371 3.83327 8.75371H6.01889L6.93715 6.73285C7.39748 5.7198 8.85253 5.76803 9.24476 6.80934L10.8652 11.1115L11.5118 9.53049C11.7039 9.06067 12.1611 8.75371 12.6687 8.75371H15.5001C15.9603 8.75371 16.3333 9.12677 16.3333 9.58697C16.3333 10.0472 15.9603 10.4202 15.5001 10.4202H12.9484L12.0062 12.7242C11.5762 13.7757 10.08 13.7547 9.67961 12.6917L8.03907 8.33629Z" fill="black"/>
    </Svg>
  );
};
