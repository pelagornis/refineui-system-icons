import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Equalcircle24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM7.85 10.5C7.85 10.141 8.14102 9.85 8.5 9.85H15.5C15.859 9.85 16.15 10.141 16.15 10.5C16.15 10.859 15.859 11.15 15.5 11.15H8.5C8.14102 11.15 7.85 10.859 7.85 10.5ZM8.5 12.85C8.14102 12.85 7.85 13.141 7.85 13.5C7.85 13.859 8.14102 14.15 8.5 14.15H15.5C15.859 14.15 16.15 13.859 16.15 13.5C16.15 13.141 15.859 12.85 15.5 12.85H8.5Z" fill="black"/>
    </Svg>
  );
};
