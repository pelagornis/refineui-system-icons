import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Ganttchart24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6ZM5.3 6.15C5.3 5.68056 5.68056 5.3 6.15 5.3H17.85C18.3194 5.3 18.7 5.68056 18.7 6.15C18.7 6.61944 18.3194 7 17.85 7H6.15C5.68056 7 5.3 6.61944 5.3 6.15ZM7.5 9.85C7.14102 9.85 6.85 10.141 6.85 10.5C6.85 10.859 7.14102 11.15 7.5 11.15H12C12.359 11.15 12.65 10.859 12.65 10.5C12.65 10.141 12.359 9.85 12 9.85H7.5ZM11 12.35C10.641 12.35 10.35 12.641 10.35 13C10.35 13.359 10.641 13.65 11 13.65H16.5C16.859 13.65 17.15 13.359 17.15 13C17.15 12.641 16.859 12.35 16.5 12.35H11ZM9 14.85C8.64102 14.85 8.35 15.141 8.35 15.5C8.35 15.859 8.64102 16.15 9 16.15H13.5C13.859 16.15 14.15 15.859 14.15 15.5C14.15 15.141 13.859 14.85 13.5 14.85H9Z" fill="black"/>
    </Svg>
  );
};
