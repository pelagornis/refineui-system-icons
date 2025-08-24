import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Spacebar20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M3.83327 8C4.29347 8 4.66653 8.37307 4.66653 8.83327V9.46161C4.66653 9.57666 4.7598 9.66992 4.87485 9.66992H14.4585C14.5735 9.66992 14.6668 9.57666 14.6668 9.46161V8.83327C14.6668 8.37307 15.0399 8 15.5001 8C15.9603 8 16.3333 8.37307 16.3333 8.83327V10.0866C16.3333 10.7769 15.7737 11.3365 15.0834 11.3365H4.2499C3.5596 11.3365 3 10.7769 3 10.0866V8.83327C3 8.37307 3.37307 8 3.83327 8Z" fill="black"/>
    </Svg>
  );
};
