import React from 'react';
import { IconProps } from './types';

export const Locationarrow20FilledIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.4704 3.61685C16.6095 3.24163 16.2337 2.88141 15.8657 3.03724L4.27836 7.94357C3.8911 8.10754 3.91308 8.66465 4.31205 8.7975L8.87484 10.3168C9.01008 10.3619 9.11651 10.4677 9.16249 10.6028L11.0071 16.024C11.1454 16.4305 11.7165 16.4383 11.8657 16.0357L16.4704 3.61685Z" fill="black"/>
    </svg>
  );
};
