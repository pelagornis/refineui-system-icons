import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Search28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.3514 16.4891C15.3456 16.4935 15.3397 16.4979 15.3339 16.5023C14.3589 17.235 13.1468 17.6692 11.8333 17.6692C8.61167 17.6692 6 15.057 6 11.8346C6 8.61225 8.61167 6 11.8333 6C15.055 6 17.6667 8.61225 17.6667 11.8346C17.6667 13.1562 17.2274 14.3752 16.4868 15.3534L20.4427 19.3102C20.8212 19.6888 21.4646 20.5595 21.0105 21.0138C20.5563 21.468 19.6858 20.8245 19.3073 20.4459L15.3514 16.4891ZM15.3333 11.8346C15.3333 13.768 13.7663 15.3354 11.8333 15.3354C9.90034 15.3354 8.33333 13.768 8.33333 11.8346C8.33333 9.90119 9.90034 8.33385 11.8333 8.33385C13.7663 8.33385 15.3333 9.90119 15.3333 11.8346Z" fill="black"/>
    </Svg>
  );
};
