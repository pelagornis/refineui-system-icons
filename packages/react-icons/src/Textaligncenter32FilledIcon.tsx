import React from 'react';
import { IconProps } from './types';

export const Textaligncenter32FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M8.66667 11.3C8.66667 10.582 9.26362 10 10 10H22C22.7364 10 23.3333 10.582 23.3333 11.3C23.3333 12.018 22.7364 12.6 22 12.6H10C9.26362 12.6 8.66667 12.018 8.66667 11.3Z" fill="black"/>
<path d="M6 16.5C6 15.782 6.59695 15.2 7.33333 15.2H24.6667C25.403 15.2 26 15.782 26 16.5C26 17.218 25.403 17.8 24.6667 17.8H7.33333C6.59695 17.8 6 17.218 6 16.5Z" fill="black"/>
<path d="M12.6667 20.4C11.9303 20.4 11.3333 20.982 11.3333 21.7C11.3333 22.418 11.9303 23 12.6667 23H19.3333C20.0697 23 20.6667 22.418 20.6667 21.7C20.6667 20.982 20.0697 20.4 19.3333 20.4H12.6667Z" fill="black"/>
    </svg>
  );
};
