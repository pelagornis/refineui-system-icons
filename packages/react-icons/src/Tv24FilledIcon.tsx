import React from 'react';
import { IconProps } from './types';

export const Tv24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M5 6C4.44772 6 4 6.44772 4 7V15C4 15.5523 4.44772 16 5 16H19C19.5523 16 20 15.5523 20 15V7C20 6.44772 19.5523 6 19 6H5Z" fill="black"/>
<path d="M6.65 17C6.29101 17 6 17.291 6 17.65C6 18.009 6.29101 18.3 6.65 18.3H17.35C17.709 18.3 18 18.009 18 17.65C18 17.291 17.709 17 17.35 17H6.65Z" fill="black"/>
    </svg>
  );
};
