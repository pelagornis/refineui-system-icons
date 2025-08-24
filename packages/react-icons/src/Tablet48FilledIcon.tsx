import React from 'react';
import { IconProps } from './types';

export const Tablet48FilledIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 8C11.7909 8 10 9.79086 10 12V36C10 38.2091 11.7909 40 14 40H34C36.2091 40 38 38.2091 38 36V12C38 9.79086 36.2091 8 34 8H14ZM18 32.7C17.282 32.7 16.7 33.282 16.7 34C16.7 34.718 17.282 35.3 18 35.3H30C30.718 35.3 31.3 34.718 31.3 34C31.3 33.282 30.718 32.7 30 32.7H18Z" fill="black"/>
    </svg>
  );
};
