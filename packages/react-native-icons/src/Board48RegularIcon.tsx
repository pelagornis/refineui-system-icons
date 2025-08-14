import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Board48RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 12C8 9.79086 9.79086 8 12 8H36C38.2091 8 40 9.79086 40 12V36C40 38.2091 38.2091 40 36 40H12C9.79086 40 8 38.2091 8 36V12ZM25.3 12.6C25.3 11.4954 26.1954 10.6 27.3 10.6H36C36.7732 10.6 37.4 11.2268 37.4 12V25.7C37.4 26.8046 36.5046 27.7 35.4 27.7H25.3V12.6ZM22.7 12.6C22.7 11.4954 21.8046 10.6 20.7 10.6H12C11.2268 10.6 10.6 11.2268 10.6 12V15.7C10.6 16.8046 11.4954 17.7 12.6 17.7H20.7C21.8046 17.7 22.7 16.8046 22.7 15.7V12.6ZM12.6 20.3C11.4954 20.3 10.6 21.1954 10.6 22.3V36C10.6 36.7732 11.2268 37.4 12 37.4H20.7C21.8046 37.4 22.7 36.5046 22.7 35.4V22.3C22.7 21.1954 21.8046 20.3 20.7 20.3H12.6ZM25.3 35.4C25.3 36.5046 26.1954 37.4 27.3 37.4H36C36.7732 37.4 37.4 36.7732 37.4 36V32.3C37.4 31.1954 36.5046 30.3 35.4 30.3H27.3C26.1954 30.3 25.3 31.1954 25.3 32.3V35.4Z" fill="black"/>
    </Svg>
  );
};
