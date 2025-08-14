import React from 'react';
import { IconProps } from './types';

export const Notebook48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M38 14.5C38 13.782 37.418 13.2 36.7 13.2C35.982 13.2 35.4 13.782 35.4 14.5V17.5C35.4 18.218 35.982 18.8 36.7 18.8C37.418 18.8 38 18.218 38 17.5V14.5Z" fill="black"/>
<path d="M36.7 21.2C37.418 21.2 38 21.782 38 22.5V25.5C38 26.218 37.418 26.8 36.7 26.8C35.982 26.8 35.4 26.218 35.4 25.5V22.5C35.4 21.782 35.982 21.2 36.7 21.2Z" fill="black"/>
<path d="M38 30.5C38 29.782 37.418 29.2 36.7 29.2C35.982 29.2 35.4 29.782 35.4 30.5V33.5C35.4 34.218 35.982 34.8 36.7 34.8C37.418 34.8 38 34.218 38 33.5V30.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 10C10 8.89543 10.8954 8 12 8H32C33.1046 8 34 8.89543 34 10V38C34 39.1046 33.1046 40 32 40H12C10.8954 40 10 39.1046 10 38V10ZM18 12C15.7909 12 14 13.7909 14 16C14 18.2091 15.7909 20 18 20H26C28.2091 20 30 18.2091 30 16C30 13.7909 28.2091 12 26 12H18Z" fill="black"/>
    </svg>
  );
};
