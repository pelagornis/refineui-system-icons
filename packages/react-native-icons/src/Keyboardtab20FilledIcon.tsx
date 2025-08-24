import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Keyboardtab20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M9.03089 4.27021C8.71985 3.93091 8.19271 3.90806 7.85348 4.21917C7.51426 4.53028 7.49141 5.05754 7.80245 5.39684L11.1053 8.99981H3.83333C3.3731 8.99981 3 9.37299 3 9.83333C3 10.2937 3.3731 10.6669 3.83333 10.6669H11.1053L7.80245 14.2698C7.49141 14.6091 7.51426 15.1364 7.85348 15.4475C8.19271 15.7586 8.71985 15.7358 9.03089 15.3965L13.6142 10.3966C13.9064 10.078 13.9064 9.58872 13.6142 9.27002L9.03089 4.27021Z" fill="black"/>
<path d="M16.3333 4.83353C16.3333 4.37319 15.9602 4 15.5 4C15.0398 4 14.6667 4.37319 14.6667 4.83353V14.8331C14.6667 15.2935 15.0398 15.6667 15.5 15.6667C15.9602 15.6667 16.3333 15.2935 16.3333 14.8331V4.83353Z" fill="black"/>
    </Svg>
  );
};
