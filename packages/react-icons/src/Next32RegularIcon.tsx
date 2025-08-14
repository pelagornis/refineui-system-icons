import React from 'react';
import { IconProps } from './types';

export const Next32RegularIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.1183 14.4763C22.9442 14.9853 22.9442 16.1427 22.1183 16.6517L7.07817 25.9205C6.18053 26.4737 5 25.8559 5 24.8329V6.29514C5 5.27214 6.18053 4.65428 7.07818 5.20748L22.1183 14.4763ZM6.7334 8.22512C6.7334 7.70336 7.30568 7.38381 7.74987 7.65755L19.6583 14.9964C20.0809 15.2568 20.0809 15.8712 19.6583 16.1316L7.74987 23.4704C7.30568 23.7442 6.7334 23.4246 6.7334 22.9029L6.7334 8.22512Z" fill="black"/>
<path d="M26.3333 6.3205C26.3333 5.84184 25.9453 5.4538 25.4666 5.4538C24.988 5.4538 24.5999 5.84184 24.5999 6.3205V25.4678C24.5999 25.9464 24.988 26.3344 25.4666 26.3344C25.9453 26.3344 26.3333 25.9464 26.3333 25.4678V6.3205Z" fill="black"/>
    </svg>
  );
};
