import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Album32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6686 26.34C21.5607 26.34 26.3371 21.5629 26.3371 15.67C26.3371 9.77712 21.5607 5 15.6686 5C9.77648 5 5 9.77712 5 15.67C5 21.5629 9.77648 26.34 15.6686 26.34ZM15.6686 19.6713C17.8781 19.6713 19.6693 17.8798 19.6693 15.67C19.6693 13.4602 17.8781 11.6687 15.6686 11.6687C13.459 11.6687 11.6679 13.4602 11.6679 15.67C11.6679 17.8798 13.459 19.6713 15.6686 19.6713Z" fill="black"/>
<path d="M18.3357 15.67C18.3357 17.1432 17.1416 18.3375 15.6686 18.3375C14.1955 18.3375 13.0014 17.1432 13.0014 15.67C13.0014 14.1968 14.1955 13.0025 15.6686 13.0025C17.1416 13.0025 18.3357 14.1968 18.3357 15.67Z" fill="black"/>
    </Svg>
  );
};
