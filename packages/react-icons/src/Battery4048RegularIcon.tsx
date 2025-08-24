import React from 'react';
import { IconProps } from './types';

export const Battery4048RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M14 18C12.8954 18 12 18.8954 12 20V28C12 29.1046 12.8954 30 14 30H19.2C20.3046 30 21.2 29.1046 21.2 28V20C21.2 18.8954 20.3046 18 19.2 18H14Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 14C9.79086 14 8 15.7909 8 18V30C8 32.2091 9.79086 34 12 34H33.0405C35.2496 34 37.0405 32.2091 37.0405 30V28.1284C38.675 28.1284 40 26.8034 40 25.1689V22.8311C40 21.1966 38.675 19.8716 37.0405 19.8716V18C37.0405 15.7909 35.2496 14 33.0405 14H12ZM10.4046 18.3853C10.4046 17.2808 11.3001 16.3853 12.4046 16.3853H32.6358C33.7404 16.3853 34.6358 17.2808 34.6358 18.3853V29.6147C34.6358 30.7193 33.7404 31.6147 32.6358 31.6147H12.4046C11.3001 31.6147 10.4046 30.7192 10.4046 29.6147V18.3853Z" fill="black"/>
    </svg>
  );
};
