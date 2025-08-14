import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Ganttchart48FilledIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 12C8 9.79086 9.79086 8 12 8H36C38.2091 8 40 9.79086 40 12V36C40 38.2091 38.2091 40 36 40H12C9.79086 40 8 38.2091 8 36V12ZM10.6 12.3C10.6 11.3611 11.3611 10.6 12.3 10.6H35.7C36.6389 10.6 37.4 11.3611 37.4 12.3C37.4 13.2389 36.6389 14 35.7 14H12.3C11.3611 14 10.6 13.2389 10.6 12.3ZM15 19.7C14.282 19.7 13.7 20.282 13.7 21C13.7 21.718 14.282 22.3 15 22.3H24C24.718 22.3 25.3 21.718 25.3 21C25.3 20.282 24.718 19.7 24 19.7H15ZM22 24.7C21.282 24.7 20.7 25.282 20.7 26C20.7 26.718 21.282 27.3 22 27.3H33C33.718 27.3 34.3 26.718 34.3 26C34.3 25.282 33.718 24.7 33 24.7H22ZM18 29.7C17.282 29.7 16.7 30.282 16.7 31C16.7 31.718 17.282 32.3 18 32.3H27C27.718 32.3 28.3 31.718 28.3 31C28.3 30.282 27.718 29.7 27 29.7H18Z" fill="black"/>
    </Svg>
  );
};
