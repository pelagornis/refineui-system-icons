import React from 'react';
import { IconProps } from './types';

export const Wrench28FilledIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.2288 10.1287C13.2288 7.28164 15.5801 5 18.4477 5C19.0502 5 19.6305 5.10062 20.1712 5.28644L21.3325 5.68556L18.2787 8.67751C17.8625 9.0853 17.8625 9.7399 18.2787 10.1477C18.7036 10.5639 19.3987 10.5639 19.8236 10.1477L22.8626 7.1702L23.29 8.21238C23.5331 8.80517 23.6667 9.45241 23.6667 10.1287C23.6667 12.9757 21.3154 15.2573 18.4477 15.2573C18.0077 15.2573 17.5796 15.2036 17.1701 15.1023L9.14436 22.9656C8.19632 23.8945 6.66555 23.8945 5.71751 22.9656C4.76083 22.0283 4.76083 20.5021 5.71751 19.5647L13.5465 11.8942C13.3409 11.3434 13.2288 10.7484 13.2288 10.1287Z" fill="black"/>
    </svg>
  );
};
