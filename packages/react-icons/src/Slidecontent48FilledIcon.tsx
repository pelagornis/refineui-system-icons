import React from 'react';
import { IconProps } from './types';

export const Slidecontent48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C8 13.7909 9.79086 12 12 12H36C38.2091 12 40 13.7909 40 16V32C40 34.2091 38.2091 36 36 36H12C9.79086 36 8 34.2091 8 32V16ZM12.5 20C12.5 18.8954 13.3954 18 14.5 18H22.5C23.6046 18 24.5 18.8954 24.5 20V28C24.5 29.1046 23.6046 30 22.5 30H14.5C13.3954 30 12.5 29.1046 12.5 28V20ZM28 18.2C27.282 18.2 26.7 18.782 26.7 19.5C26.7 20.218 27.282 20.8 28 20.8H34C34.718 20.8 35.3 20.218 35.3 19.5C35.3 18.782 34.718 18.2 34 18.2H28ZM26.7 24C26.7 23.282 27.282 22.7 28 22.7H34C34.718 22.7 35.3 23.282 35.3 24C35.3 24.718 34.718 25.3 34 25.3H28C27.282 25.3 26.7 24.718 26.7 24ZM28 27.2C27.282 27.2 26.7 27.782 26.7 28.5C26.7 29.218 27.282 29.8 28 29.8H34C34.718 29.8 35.3 29.218 35.3 28.5C35.3 27.782 34.718 27.2 34 27.2H28Z" fill="black"/>
    </svg>
  );
};
