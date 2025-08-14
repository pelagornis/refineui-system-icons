import React from 'react';
import { IconProps } from './types';

export const Folder32FilledIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 22.6667V9.33333C5 8.59695 5.59695 8 6.33333 8H11.781C12.1347 8 12.4738 8.14048 12.7239 8.39052L15.2761 10.9428C15.5262 11.1929 15.8653 11.3333 16.219 11.3333H25C25.7364 11.3333 26.3333 11.9303 26.3333 12.6667V22.6667C26.3333 23.403 25.7364 24 25 24H6.33333C5.59695 24 5 23.403 5 22.6667Z" fill="black"/>
    </svg>
  );
};
