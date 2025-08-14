import React from 'react';
import { IconProps } from './types';

export const Textalignjustify24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M4 8C4 7.44772 4.44772 7 5 7H18C18.5523 7 19 7.44772 19 8C19 8.55228 18.5523 9 18 9H5C4.44772 9 4 8.55228 4 8Z" fill="black"/>
<path d="M4 12C4 11.4477 4.44772 11 5 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H5C4.44772 13 4 12.5523 4 12Z" fill="black"/>
<path d="M5 15C4.44772 15 4 15.4477 4 16C4 16.5523 4.44772 17 5 17H18C18.5523 17 19 16.5523 19 16C19 15.4477 18.5523 15 18 15H5Z" fill="black"/>
    </svg>
  );
};
