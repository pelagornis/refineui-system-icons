import React from 'react';
import { IconProps } from './types';

export const Filter24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M4 7.99992C4 7.44768 4.44768 7 4.99992 7H19.0001C19.5523 7 20 7.44768 20 7.99992C20 8.55216 19.5523 8.99984 19.0001 8.99984H4.99992C4.44768 8.99984 4 8.55216 4 7.99992Z" fill="black"/>
<path d="M5.99996 12.0001C5.99996 11.4479 6.44764 11.0002 6.99988 11.0002H17C17.5522 11.0002 17.9999 11.4479 17.9999 12.0001C17.9999 12.5523 17.5522 13 17 13H6.99988C6.44764 13 5.99996 12.5523 5.99996 12.0001Z" fill="black"/>
<path d="M8.99996 15.0004C8.44772 15.0004 8.00004 15.4481 8.00004 16.0003C8.00004 16.5525 8.44772 17.0002 8.99996 17.0002H15C15.5523 17.0002 16 16.5525 16 16.0003C16 15.4481 15.5523 15.0004 15 15.0004H8.99996Z" fill="black"/>
    </svg>
  );
};
