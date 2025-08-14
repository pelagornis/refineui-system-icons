import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Playcircle48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M19.1763 18.0869L29.5507 23.2731C30.1498 23.5726 30.1498 24.4274 29.5507 24.7269L19.1763 29.9131C18.6359 30.1833 18 29.7904 18 29.1863V18.8137C18 18.2096 18.6359 17.8167 19.1763 18.0869Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M40 24C40 32.8365 32.8365 40 24 40C15.1635 40 8 32.8365 8 24C8 15.1635 15.1635 8 24 8C32.8365 8 40 15.1635 40 24ZM37.4 24C37.4 31.4006 31.4006 37.4 24 37.4C16.5994 37.4 10.6 31.4006 10.6 24C10.6 16.5994 16.5994 10.6 24 10.6C31.4006 10.6 37.4 16.5994 37.4 24Z" fill="black"/>
    </Svg>
  );
};
