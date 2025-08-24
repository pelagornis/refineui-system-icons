import React from 'react';
import { IconProps } from './types';

export const Battery1048FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 18C8 15.7909 9.79086 14 12 14H33.0405C35.2496 14 37.0405 15.7909 37.0405 18V19.8716C38.675 19.8716 40 21.1966 40 22.8311V25.1689C40 26.8034 38.675 28.1284 37.0405 28.1284V30C37.0405 32.2091 35.2496 34 33.0405 34H12C9.79086 34 8 32.2091 8 30V18ZM13.6 18C12.7163 18 12 18.7163 12 19.6V28.4C12 29.2837 12.7163 30 13.6 30C14.4837 30 15.2 29.2837 15.2 28.4V19.6C15.2 18.7163 14.4837 18 13.6 18Z" fill="black"/>
    </svg>
  );
};
