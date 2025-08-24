import React from 'react';
import { IconProps } from './types';

export const Textalignleft24FilledIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.65002 8C4.65002 7.44772 5.09774 7 5.65002 7H14.65C15.2023 7 15.65 7.44772 15.65 8C15.65 8.55228 15.2023 9 14.65 9H5.65002C5.09774 9 4.65002 8.55228 4.65002 8Z" fill="black"/>
<path d="M4.65002 12C4.65002 11.4477 5.09774 11 5.65002 11H18.65C19.2023 11 19.65 11.4477 19.65 12C19.65 12.5523 19.2023 13 18.65 13H5.65002C5.09774 13 4.65002 12.5523 4.65002 12Z" fill="black"/>
<path d="M5.65002 15C5.09774 15 4.65002 15.4477 4.65002 16C4.65002 16.5523 5.09774 17 5.65002 17H10.65C11.2023 17 11.65 16.5523 11.65 16C11.65 15.4477 11.2023 15 10.65 15H5.65002Z" fill="black"/>
    </svg>
  );
};
