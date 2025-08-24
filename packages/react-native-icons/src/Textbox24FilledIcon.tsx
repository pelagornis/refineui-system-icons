import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textbox24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM7.5 7.85C7.14102 7.85 6.85 8.14102 6.85 8.5C6.85 8.85898 7.14102 9.15 7.5 9.15H16.5C16.859 9.15 17.15 8.85898 17.15 8.5C17.15 8.14102 16.859 7.85 16.5 7.85H7.5ZM7.5 11.35C7.14102 11.35 6.85 11.641 6.85 12C6.85 12.359 7.14102 12.65 7.5 12.65H12.5C12.859 12.65 13.15 12.359 13.15 12C13.15 11.641 12.859 11.35 12.5 11.35H7.5ZM7.5 14.85C7.14102 14.85 6.85 15.141 6.85 15.5C6.85 15.859 7.14102 16.15 7.5 16.15H15.5C15.859 16.15 16.15 15.859 16.15 15.5C16.15 15.141 15.859 14.85 15.5 14.85H7.5Z" fill="black"/>
    </Svg>
  );
};
