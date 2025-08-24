import React from 'react';
import { IconProps } from './types';

export const Payment28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.33333 7C6.04467 7 5 8.04467 5 9.33333L5.00006 10.6167C5.00007 10.7778 5.13065 10.9083 5.29172 10.9083H23.375C23.5361 10.9083 23.6667 10.7777 23.6667 10.6167V9.33333C23.6667 8.04467 22.622 7 21.3333 7H7.33333ZM23.6667 18.6667V12.7167C23.6667 12.5556 23.5361 12.425 23.375 12.425H5.29167C5.13058 12.425 5 12.5556 5 12.7167V18.6667C5 19.9553 6.04467 21 7.33333 21H21.3333C22.622 21 23.6667 19.9553 23.6667 18.6667ZM8.5 16.7417C8.5 16.3228 8.83952 15.9833 9.25833 15.9833H11.2417C11.6605 15.9833 12 16.3228 12 16.7417C12 17.1605 11.6605 17.5 11.2417 17.5H9.25833C8.83952 17.5 8.5 17.1605 8.5 16.7417Z" fill="black"/>
    </svg>
  );
};
