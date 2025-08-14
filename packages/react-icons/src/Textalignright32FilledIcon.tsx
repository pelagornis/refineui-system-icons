import React from 'react';
import { IconProps } from './types';

export const Textalignright32FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M11.3333 11.3C11.3333 10.582 11.9303 10 12.6667 10H24.6667C25.403 10 26 10.582 26 11.3C26 12.018 25.403 12.6 24.6667 12.6H12.6667C11.9303 12.6 11.3333 12.018 11.3333 11.3Z" fill="black"/>
<path d="M6 16.5C6 15.782 6.59695 15.2 7.33333 15.2H24.6667C25.403 15.2 26 15.782 26 16.5C26 17.218 25.403 17.8 24.6667 17.8H7.33333C6.59695 17.8 6 17.218 6 16.5Z" fill="black"/>
<path d="M18 20.4C17.2636 20.4 16.6667 20.982 16.6667 21.7C16.6667 22.418 17.2636 23 18 23H24.6667C25.403 23 26 22.418 26 21.7C26 20.982 25.403 20.4 24.6667 20.4H18Z" fill="black"/>
    </svg>
  );
};
