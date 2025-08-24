import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Add48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M24 8C24.7048 8 25.2761 8.57132 25.2761 9.27607V22.7239H38.7239C39.4287 22.7239 40 23.2952 40 24C40 24.7048 39.4287 25.2761 38.7239 25.2761H25.2761V38.7239C25.2761 39.4287 24.7048 40 24 40C23.2952 40 22.7239 39.4287 22.7239 38.7239V25.2761H9.27607C8.57132 25.2761 8 24.7048 8 24C8 23.2952 8.57132 22.7239 9.27607 22.7239H22.7239V9.27607C22.7239 8.57132 23.2952 8 24 8Z" fill="black"/>
    </Svg>
  );
};
