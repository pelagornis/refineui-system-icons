import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Slidegrid24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.35 9.25C6.35 8.75294 6.75294 8.35 7.25 8.35H10.75C11.2471 8.35 11.65 8.75294 11.65 9.25V10.75C11.65 11.2471 11.2471 11.65 10.75 11.65H7.25C6.75294 11.65 6.35 11.2471 6.35 10.75V9.25Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.25 8.35C12.7529 8.35 12.35 8.75294 12.35 9.25V10.75C12.35 11.2471 12.7529 11.65 13.25 11.65H16.75C17.2471 11.65 17.65 11.2471 17.65 10.75V9.25C17.65 8.75294 17.2471 8.35 16.75 8.35H13.25Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.35 13.25C12.35 12.7529 12.7529 12.35 13.25 12.35H16.75C17.2471 12.35 17.65 12.7529 17.65 13.25V14.75C17.65 15.2471 17.2471 15.65 16.75 15.65H13.25C12.7529 15.65 12.35 15.2471 12.35 14.75V13.25Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 12.35C6.75294 12.35 6.35 12.7529 6.35 13.25V14.75C6.35 15.2471 6.75294 15.65 7.25 15.65H10.75C11.2471 15.65 11.65 15.2471 11.65 14.75V13.25C11.65 12.7529 11.2471 12.35 10.75 12.35H7.25Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 6C4.89543 6 4 6.89543 4 8V16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V8C20 6.89543 19.1046 6 18 6H6ZM18 7.3H6C5.6134 7.3 5.3 7.6134 5.3 8V16C5.3 16.3866 5.6134 16.7 6 16.7H18C18.3866 16.7 18.7 16.3866 18.7 16V8C18.7 7.6134 18.3866 7.3 18 7.3Z" fill="black"/>
    </Svg>
  );
};
