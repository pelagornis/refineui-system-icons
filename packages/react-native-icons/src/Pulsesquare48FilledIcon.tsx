import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Pulsesquare48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 8C9.79086 8 8 9.79086 8 12V36C8 38.2091 9.79086 40 12 40H36C38.2091 40 40 38.2091 40 36V12C40 9.79086 38.2091 8 36 8H12ZM20.4818 24.8706L21.2522 23.1085L23.5517 29.4534C24.1169 31.0129 26.3116 31.0428 26.919 29.4992L28.3157 25.9495H31.8412C32.5592 25.9495 33.1412 25.3675 33.1412 24.6495C33.1412 23.9315 32.5592 23.3495 31.8412 23.3495H27.7708C27.0311 23.3495 26.3667 23.802 26.0958 24.4904L25.2747 26.5771L23.014 20.3392C22.46 18.8106 20.3237 18.7417 19.6724 20.2314L18.3092 23.3495H15.3C14.582 23.3495 14 23.9315 14 24.6495C14 25.3675 14.582 25.9495 15.3 25.9495H18.8325C19.5478 25.9495 20.1952 25.526 20.4818 24.8706Z" fill="black"/>
    </Svg>
  );
};
