import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Smartwatch48RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M32 12V14.5351C33.1956 15.2267 34 16.5194 34 18V20C35.1046 20 36 20.8954 36 22V24C36 25.1046 35.1046 26 34 26V30C34 31.4806 33.1956 32.7733 32 33.4649V36C32 38.2091 30.2091 40 28 40H20C17.7909 40 16 38.2091 16 36V33.4649C14.8044 32.7733 14 31.4806 14 30V18C14 16.5194 14.8044 15.2267 16 14.5351V12C16 9.79086 17.7909 8 20 8H28C30.2091 8 32 9.79086 32 12ZM20 10.6H28C28.7732 10.6 29.4 11.2268 29.4 12V14H18.6V12C18.6 11.2268 19.2268 10.6 20 10.6ZM18.6 34H29.4V36C29.4 36.7732 28.7732 37.4 28 37.4H20C19.2268 37.4 18.6 36.7732 18.6 36V34ZM30 16.6H18C17.2268 16.6 16.6 17.2268 16.6 18V30C16.6 30.7732 17.2268 31.4 18 31.4H30C30.7732 31.4 31.4 30.7732 31.4 30V18C31.4 17.2268 30.7732 16.6 30 16.6Z" fill="black"/>
    </Svg>
  );
};
