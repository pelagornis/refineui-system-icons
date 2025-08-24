import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Numbercircle520FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.66667 16.3333C13.3486 16.3333 16.3333 13.3486 16.3333 9.66667C16.3333 5.98477 13.3486 3 9.66667 3C5.98477 3 3 5.98477 3 9.66667C3 13.3486 5.98477 16.3333 9.66667 16.3333ZM8.91667 6.625C8.43804 6.625 7.875 6.96578 7.875 7.58333V8.83333C7.875 9.45088 8.43804 9.79167 8.91667 9.79167H10.375V11.625H8.41667C8.11751 11.625 7.875 11.8675 7.875 12.1667C7.875 12.4658 8.11751 12.7083 8.41667 12.7083H10.4167C10.8953 12.7083 11.4583 12.3675 11.4583 11.75V9.66667C11.4583 9.04912 10.8953 8.70833 10.4167 8.70833H8.95833V7.70833H10.9167C11.2158 7.70833 11.4583 7.46582 11.4583 7.16667C11.4583 6.86751 11.2158 6.625 10.9167 6.625H8.91667Z" fill="black"/>
    </Svg>
  );
};
