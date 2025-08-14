import React from 'react';
import { IconProps } from './types';

export const Mouse24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M11.35 10V4.5C11.35 4.22386 11.1261 4 10.85 4H10C7.79086 4 6 5.79086 6 8V14C6 17.3137 8.68629 20 12 20C15.3137 20 18 17.3137 18 14V8C18 5.79086 16.2091 4 14 4H13.15C12.8739 4 12.65 4.22386 12.65 4.5V10C12.65 10.359 12.359 10.65 12 10.65C11.641 10.65 11.35 10.359 11.35 10Z" fill="black"/>
    </svg>
  );
};
