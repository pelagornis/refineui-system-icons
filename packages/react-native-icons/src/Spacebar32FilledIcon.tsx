import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Spacebar32FilledIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.33323 13C7.06954 13 7.66645 13.5971 7.66645 14.3336V15.3393C7.66645 15.5234 7.81568 15.6727 7.99976 15.6727H23.3336C23.5177 15.6727 23.6669 15.5234 23.6669 15.3393V14.3336C23.6669 13.5971 24.2638 13 25.0001 13C25.7364 13 26.3333 13.5971 26.3333 14.3336V16.3395C26.3333 17.4444 25.438 18.34 24.3335 18.34H6.99984C5.89536 18.34 5 17.4444 5 16.3395V14.3336C5 13.5971 5.59691 13 6.33323 13Z" fill="black"/>
    </Svg>
  );
};
