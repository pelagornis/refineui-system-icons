import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Appfolder24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 6.5C6.94772 6.5 6.5 6.94772 6.5 7.5V10.5C6.5 11.0523 6.94772 11.5 7.5 11.5H10.5C11.0523 11.5 11.5 11.0523 11.5 10.5V7.5C11.5 6.94772 11.0523 6.5 10.5 6.5H7.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 13.5C6.5 12.9477 6.94772 12.5 7.5 12.5H10.5C11.0523 12.5 11.5 12.9477 11.5 13.5V16.5C11.5 17.0523 11.0523 17.5 10.5 17.5H7.5C6.94772 17.5 6.5 17.0523 6.5 16.5V13.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 12.5C12.9477 12.5 12.5 12.9477 12.5 13.5V16.5C12.5 17.0523 12.9477 17.5 13.5 17.5H16.5C17.0523 17.5 17.5 17.0523 17.5 16.5V13.5C17.5 12.9477 17.0523 12.5 16.5 12.5H13.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 7.5C12.5 6.94772 12.9477 6.5 13.5 6.5H16.5C17.0523 6.5 17.5 6.94772 17.5 7.5V10.5C17.5 11.0523 17.0523 11.5 16.5 11.5H13.5C12.9477 11.5 12.5 11.0523 12.5 10.5V7.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM18 5.3H6C5.6134 5.3 5.3 5.6134 5.3 6V18C5.3 18.3866 5.6134 18.7 6 18.7H18C18.3866 18.7 18.7 18.3866 18.7 18V6C18.7 5.6134 18.3866 5.3 18 5.3Z" fill="black"/>
    </Svg>
  );
};
