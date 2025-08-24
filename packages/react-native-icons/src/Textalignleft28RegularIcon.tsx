import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textalignleft28RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M7 9.75891C7 9.33978 7.33953 9 7.75836 9H18.8237C19.2425 9 19.5821 9.33978 19.5821 9.75891C19.5821 10.178 19.2425 10.5178 18.8237 10.5178H7.75836C7.33953 10.5178 7 10.178 7 9.75891Z" fill="black"/>
<path d="M7 14.835C7 14.4159 7.33953 14.0761 7.75836 14.0761H23.7416C24.1605 14.0761 24.5 14.4159 24.5 14.835C24.5 15.2541 24.1605 15.5939 23.7416 15.5939H7.75836C7.33953 15.5939 7 15.2541 7 14.835Z" fill="black"/>
<path d="M7.75836 19.1522C7.33953 19.1522 7 19.492 7 19.9111C7 20.3302 7.33953 20.67 7.75836 20.67H13.9058C14.3246 20.67 14.6641 20.3302 14.6641 19.9111C14.6641 19.492 14.3246 19.1522 13.9058 19.1522H7.75836Z" fill="black"/>
    </Svg>
  );
};
