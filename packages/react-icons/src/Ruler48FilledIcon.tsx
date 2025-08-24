import React from 'react';
import { IconProps } from './types';

export const Ruler48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 8C17.7909 8 16 9.79086 16 12V36C16 38.2091 17.7909 40 20 40H28C30.2091 40 32 38.2091 32 36V12C32 9.79086 30.2091 8 28 8H20ZM18.6 15.8H22C22.718 15.8 23.3 15.218 23.3 14.5C23.3 13.782 22.718 13.2 22 13.2H18.6V15.8ZM24 20.8H18.6V18.2H24C24.718 18.2 25.3 18.782 25.3 19.5C25.3 20.218 24.718 20.8 24 20.8ZM18.6 25.8H22C22.718 25.8 23.3 25.218 23.3 24.5C23.3 23.782 22.718 23.2 22 23.2H18.6V25.8ZM24 30.8H18.6V28.2H24C24.718 28.2 25.3 28.782 25.3 29.5C25.3 30.218 24.718 30.8 24 30.8ZM18.6 35.8H22C22.718 35.8 23.3 35.218 23.3 34.5C23.3 33.782 22.718 33.2 22 33.2H18.6V35.8Z" fill="black"/>
    </svg>
  );
};
