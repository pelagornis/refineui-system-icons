import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textboxalignmiddleright24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6ZM7.1 10.25C7.1 9.89102 7.39102 9.6 7.75 9.6H16.25C16.609 9.6 16.9 9.89102 16.9 10.25C16.9 10.609 16.609 10.9 16.25 10.9H7.75C7.39102 10.9 7.1 10.609 7.1 10.25ZM10.25 13.1C9.89102 13.1 9.6 13.391 9.6 13.75C9.6 14.109 9.89102 14.4 10.25 14.4H16.25C16.609 14.4 16.9 14.109 16.9 13.75C16.9 13.391 16.609 13.1 16.25 13.1H10.25Z" fill="black"/>
    </Svg>
  );
};
