import React from 'react';
import { IconProps } from './types';

export const Moon48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M39.8688 27.1967C39.9172 26.9644 39.639 26.8099 39.4558 26.9606C37.1964 28.8192 34.303 29.9352 31.149 29.9352C23.9228 29.9352 18.0648 24.0772 18.0648 16.851C18.0648 13.697 19.1808 10.8036 21.0394 8.54424C21.1901 8.36101 21.0356 8.08278 20.8033 8.13116C13.4925 9.65383 8 16.1337 8 23.8963C8 32.7901 15.2099 40 24.1037 40C31.8663 40 38.3462 34.5075 39.8688 27.1967Z" fill="black"/>
    </svg>
  );
};
