import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Book28FilledIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.4833 20.925H9.12917C8.79089 20.925 8.51667 21.1992 8.51667 21.5375C8.51667 21.8758 8.79089 22.15 9.12917 22.15H20.2417C20.6605 22.15 21 22.4895 21 22.9083C21 23.3271 20.6605 23.6667 20.2417 23.6667H8.16667C7.52233 23.6667 7 23.1443 7 22.5V6.16667C7 5.52233 7.52233 5 8.16667 5H19.8333C20.4777 5 21 5.52233 21 6.16667V19.4083C21 20.246 20.321 20.925 19.4833 20.925ZM9.33333 9.66667C9.33333 8.378 10.378 7.33333 11.6667 7.33333H16.3333C17.622 7.33333 18.6667 8.378 18.6667 9.66667C18.6667 10.9553 17.622 12 16.3333 12H11.6667C10.378 12 9.33333 10.9553 9.33333 9.66667Z" fill="black"/>
    </Svg>
  );
};
