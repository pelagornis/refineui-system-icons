import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textalignright24RegularIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 24 24"
      fill="none"
      {{...props}}
    >
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.21535 7.64985C8.21535 7.29095 8.50637 7 8.86537 7H18.35C18.709 7 19 7.29095 19 7.64985C19 8.00876 18.709 8.29971 18.35 8.29971H8.86537C8.50637 8.29971 8.21535 8.00876 8.21535 7.64985Z" fill="black"/>
<path d="M4 12C4 11.6411 4.29102 11.3502 4.65002 11.3502H18.35C18.709 11.3502 19 11.6411 19 12C19 12.3589 18.709 12.6499 18.35 12.6499H4.65002C4.29102 12.6499 4 12.3589 4 12Z" fill="black"/>
<path d="M13.0807 15.7003C12.7217 15.7003 12.4307 15.9912 12.4307 16.3501C12.4307 16.7091 12.7217 17 13.0807 17H18.3499C18.7089 17 19 16.7091 19 16.3501C19 15.9912 18.7089 15.7003 18.3499 15.7003H13.0807Z" fill="black"/>
    </Svg>
  );
};
