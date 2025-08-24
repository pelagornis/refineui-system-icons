import React from 'react';
import { IconProps } from './types';

export const Barchartverticaldescending24FilledIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 18C20 19.1046 19.1046 20 18 20C16.8954 20 16 19.1046 16 18V13C16 11.8954 16.8954 11 18 11C19.1046 11 20 11.8954 20 13V18Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18L10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10L14 18Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 20C7.10457 20 8 19.1046 8 18L8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6L4 18C4 19.1046 4.89543 20 6 20Z" fill="black"/>
    </svg>
  );
};
