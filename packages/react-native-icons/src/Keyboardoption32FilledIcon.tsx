import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Keyboardoption32FilledIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.33322 9C5.5969 9 5 9.59689 5 10.3332C5 11.0695 5.5969 11.6664 6.33322 11.6664H11.8226C12.0777 11.6664 12.3105 11.8121 12.4221 12.0416L17.0602 21.583C17.2833 22.042 17.7489 22.3333 18.2593 22.3333H25.0001C25.7364 22.3333 26.3333 21.7364 26.3333 21.0001C26.3333 20.2638 25.7364 19.6669 25.0001 19.6669H19.5108C19.2556 19.6669 19.0228 19.5213 18.9112 19.2918L14.2731 9.75035C14.05 9.29135 13.5844 9 13.074 9H6.33322Z" fill="black"/>
<path d="M17.5333 9C16.797 9 16.2001 9.59689 16.2001 10.3332C16.2001 11.0695 16.797 11.6664 17.5333 11.6664H25.0001C25.7364 11.6664 26.3333 11.0695 26.3333 10.3332C26.3333 9.59689 25.7364 9 25.0001 9H17.5333Z" fill="black"/>
    </Svg>
  );
};
