import React from 'react';
import { IconProps } from './types';

export const Battery10048FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 18C8 15.7909 9.79089 14 12 14H33.0404C35.2496 14 37.0404 15.7909 37.0404 18V19.8716C38.6749 19.8716 40 21.1966 40 22.8311V25.1689C40 26.8034 38.6749 28.1284 37.0404 28.1284V30C37.0404 32.2092 35.2496 34 33.0404 34H12C9.79089 34 8 32.2092 8 30V18ZM14 18C12.8954 18 12 18.8954 12 20V28C12 29.1046 12.8954 30 14 30H31.2C32.3046 30 33.2 29.1046 33.2 28V20C33.2 18.8954 32.3046 18 31.2 18H14Z" fill="black"/>
    </svg>
  );
};
