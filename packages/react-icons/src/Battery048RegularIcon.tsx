import React from 'react';
import { IconProps } from './types';

export const Battery048RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 18C8 15.7909 9.79086 14 12 14H33.0405C35.2496 14 37.0405 15.7909 37.0405 18V19.8716C38.675 19.8716 40 21.1966 40 22.8311V25.1689C40 26.8034 38.675 28.1284 37.0405 28.1284V30C37.0405 32.2091 35.2496 34 33.0405 34H12C9.79086 34 8 32.2091 8 30V18ZM12.4046 16.3853C11.3001 16.3853 10.4046 17.2808 10.4046 18.3853V29.6147C10.4046 30.7192 11.3001 31.6147 12.4046 31.6147H32.6358C33.7404 31.6147 34.6358 30.7193 34.6358 29.6147V18.3853C34.6358 17.2808 33.7404 16.3853 32.6358 16.3853H12.4046Z" fill="black"/>
    </svg>
  );
};
