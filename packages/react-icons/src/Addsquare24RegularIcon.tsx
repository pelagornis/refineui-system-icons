import React from 'react';
import { IconProps } from './types';

export const Addsquare24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M8.5 12.5C8.22386 12.5 8 12.2761 8 12C8 11.7239 8.22386 11.5 8.5 11.5H11.5V8.5C11.5 8.22386 11.7239 8 12 8C12.2761 8 12.5 8.22386 12.5 8.5V11.5H15.5C15.7761 11.5 16 11.7239 16 12C16 12.2761 15.7761 12.5 15.5 12.5H12.5V15.5C12.5 15.7761 12.2761 16 12 16C11.7239 16 11.5 15.7761 11.5 15.5V12.5H8.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 7C4 5.34315 5.34315 4 7 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7ZM7 5.3H17C17.9389 5.3 18.7 6.06112 18.7 7V17C18.7 17.9389 17.9389 18.7 17 18.7H7C6.06112 18.7 5.3 17.9389 5.3 17V7C5.3 6.06112 6.06112 5.3 7 5.3Z" fill="black"/>
    </svg>
  );
};
