import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Crop48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M16.4418 9.27607C16.4418 8.57132 15.8704 8 15.1657 8C14.4609 8 13.8896 8.57132 13.8896 9.27607V28.908C13.8896 31.7812 16.2188 34.1104 19.0921 34.1104H38.7239C39.4287 34.1104 40 33.5391 40 32.8343C40 32.1296 39.4287 31.5583 38.7239 31.5583H19.0921C17.6283 31.5583 16.4418 30.3717 16.4418 28.908V9.27607Z" fill="black"/>
<path d="M11.9263 13.8896H9.27607C8.57132 13.8896 8 14.4609 8 15.1657C8 15.8704 8.57132 16.4417 9.27607 16.4417H11.9263V13.8896Z" fill="black"/>
<path d="M31.5582 36.0736V38.7239C31.5582 39.4287 32.1296 40 32.8343 40C33.5391 40 34.1104 39.4287 34.1104 38.7239V36.0736H31.5582Z" fill="black"/>
<path d="M34.1104 29.5951V19.092C34.1104 16.2188 31.7812 13.8896 28.9079 13.8896H18.4048V16.4417H28.9079C30.3717 16.4417 31.5582 17.6283 31.5582 19.092V29.5951H34.1104Z" fill="black"/>
    </Svg>
  );
};
