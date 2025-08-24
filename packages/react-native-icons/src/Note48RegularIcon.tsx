import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Note48RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.5858 39.4142C24.2107 39.7893 23.702 40 23.1716 40H11.9988C9.78965 40 8 38.2091 8 36V12C8 9.79086 9.79086 8 12 8H36C38.2091 8 40 9.79086 40 12V23.1716C40 23.702 39.7893 24.2107 39.4142 24.5858L24.5858 39.4142ZM36.9 22.7C37.1761 22.7 37.4 22.4761 37.4 22.2V12C37.4 11.2268 36.7732 10.6 36 10.6H12C11.2268 10.6 10.6 11.2268 10.6 12V36C10.6 36.7742 11.2266 37.4 11.9988 37.4H22.2C22.4761 37.4 22.7 37.1761 22.7 36.9V27.9988C22.7 25.0712 25.0734 22.7 28 22.7H36.9ZM26.1536 34.1695C25.8386 34.4845 25.3 34.2614 25.3 33.8159V27.9988C25.3 26.5081 26.5083 25.3 28 25.3H33.8159C34.2614 25.3 34.4845 25.8386 34.1695 26.1536L26.1536 34.1695Z" fill="black"/>
    </Svg>
  );
};
