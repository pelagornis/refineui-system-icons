import React from 'react';
import { IconProps } from './types';

export const Play48RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.8019 25.9383C40.3994 25.1397 40.3994 22.8603 38.8019 22.0617L11.1368 8.23158C9.69562 7.51114 8 8.5589 8 10.1699V37.8301C8 39.4411 9.69562 40.4889 11.1368 39.7684L38.8019 25.9383ZM35.0753 24.8945C35.8124 24.526 35.8124 23.474 35.0753 23.1055L12.0472 11.5935C11.3823 11.2611 10.6 11.7446 10.6 12.4879L10.6 35.5121C10.6 36.2554 11.3823 36.7389 12.0472 36.4065L35.0753 24.8945Z" fill="black"/>
    </svg>
  );
};
