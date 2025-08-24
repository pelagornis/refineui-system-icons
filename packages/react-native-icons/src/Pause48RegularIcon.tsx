import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Pause48RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 12C8 9.79086 9.79086 8 12 8H18C20.2091 8 22 9.79086 22 12V36C22 38.2091 20.2091 40 18 40H12C9.79086 40 8 38.2091 8 36V12ZM10.6 12.6C10.6 11.4954 11.4954 10.6 12.6 10.6H17.4C18.5046 10.6 19.4 11.4954 19.4 12.6V35.4C19.4 36.5046 18.5046 37.4 17.4 37.4H12.6C11.4954 37.4 10.6 36.5046 10.6 35.4V12.6Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26 12C26 9.79086 27.7909 8 30 8H36C38.2091 8 40 9.79086 40 12V36C40 38.2091 38.2091 40 36 40H30C27.7909 40 26 38.2091 26 36V12ZM28.6 12.6C28.6 11.4954 29.4954 10.6 30.6 10.6H35.4C36.5046 10.6 37.4 11.4954 37.4 12.6V35.4C37.4 36.5046 36.5046 37.4 35.4 37.4H30.6C29.4954 37.4 28.6 36.5046 28.6 35.4V12.6Z" fill="black"/>
    </Svg>
  );
};
