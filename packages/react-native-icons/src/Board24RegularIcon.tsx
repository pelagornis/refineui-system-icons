import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Board24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6ZM12.65 6.3C12.65 5.74772 13.0977 5.3 13.65 5.3H18C18.3866 5.3 18.7 5.6134 18.7 6V12.85C18.7 13.4023 18.2523 13.85 17.7 13.85H12.65V6.3ZM11.35 6.3C11.35 5.74771 10.9023 5.3 10.35 5.3H6C5.6134 5.3 5.3 5.6134 5.3 6V7.85C5.3 8.40228 5.74772 8.85 6.3 8.85H10.35C10.9023 8.85 11.35 8.40228 11.35 7.85V6.3ZM6.3 10.15C5.74771 10.15 5.3 10.5977 5.3 11.15V18C5.3 18.3866 5.6134 18.7 6 18.7H10.35C10.9023 18.7 11.35 18.2523 11.35 17.7V11.15C11.35 10.5977 10.9023 10.15 10.35 10.15H6.3ZM12.65 17.7C12.65 18.2523 13.0977 18.7 13.65 18.7H18C18.3866 18.7 18.7 18.3866 18.7 18V16.15C18.7 15.5977 18.2523 15.15 17.7 15.15H13.65C13.0977 15.15 12.65 15.5977 12.65 16.15V17.7Z" fill="black"/>
    </Svg>
  );
};
