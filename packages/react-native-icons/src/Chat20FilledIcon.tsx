import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Chat20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.66667 16.3333C13.3486 16.3333 16.3333 13.3486 16.3333 9.66667C16.3333 5.98477 13.3486 3 9.66667 3C5.98477 3 3 5.98477 3 9.66667V15.5C3 15.9602 3.3731 16.3333 3.83333 16.3333H9.66667ZM5.79165 8.83333C5.79165 8.53418 6.03416 8.29167 6.33333 8.29167H13C13.2992 8.29167 13.5417 8.53418 13.5417 8.83333C13.5417 9.13248 13.2992 9.37499 13 9.37499H6.33333C6.03416 9.37499 5.79165 9.13248 5.79165 8.83333ZM5.79165 11.3333C5.79165 11.0342 6.03416 10.7917 6.33333 10.7917H9.66667C9.96584 10.7917 10.2084 11.0342 10.2084 11.3333C10.2084 11.6325 9.96584 11.875 9.66667 11.875H6.33333C6.03416 11.875 5.79165 11.6325 5.79165 11.3333Z" fill="black"/>
    </Svg>
  );
};
