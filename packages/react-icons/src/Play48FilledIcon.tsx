import React from 'react';
import { IconProps } from './types';

export const Play48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.8019 25.9383C40.3994 25.1397 40.3994 22.8603 38.8019 22.0617L11.1368 8.23158C9.69562 7.51114 8 8.5589 8 10.1699V37.8301C8 39.4411 9.69562 40.4889 11.1368 39.7684L38.8019 25.9383Z" fill="black"/>
    </svg>
  );
};
