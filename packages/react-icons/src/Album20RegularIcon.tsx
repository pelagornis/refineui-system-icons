import React from 'react';
import { IconProps } from './types';

export const Album20RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.62312 9.665C7.62312 8.5373 8.5373 7.62312 9.665 7.62312C10.7927 7.62312 11.7069 8.5373 11.7069 9.665C11.7069 10.7927 10.7927 11.7069 9.665 11.7069C8.5373 11.7069 7.62312 10.7927 7.62312 9.665ZM9.665 8.6248C9.09051 8.6248 8.6248 9.09051 8.6248 9.665C8.6248 10.2395 9.09051 10.7052 9.665 10.7052C10.2395 10.7052 10.7052 10.2395 10.7052 9.665C10.7052 9.09051 10.2395 8.6248 9.665 8.6248Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 9.665C3 5.98402 5.98402 3 9.665 3C13.346 3 16.33 5.98402 16.33 9.665C16.33 13.346 13.346 16.33 9.665 16.33C5.98402 16.33 3 13.346 3 9.665ZM9.665 4.00168C6.53723 4.00168 4.00168 6.53723 4.00168 9.665C4.00168 12.7928 6.53723 15.3283 9.665 15.3283C12.7928 15.3283 15.3283 12.7928 15.3283 9.665C15.3283 6.53723 12.7928 4.00168 9.665 4.00168Z" fill="black"/>
    </svg>
  );
};
