import React from 'react';
import { IconProps } from './types';

export const Iosarrowrtl28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M14.4451 23.4043C13.9273 22.997 13.85 22.2621 14.2725 21.763L20.2484 14.7024C20.43 14.4878 20.43 14.1796 20.2484 13.9649L14.2725 6.90436C13.85 6.40517 13.9273 5.67033 14.4451 5.26304C14.963 4.85575 15.7252 4.93025 16.1477 5.42943L23.0598 13.5962C23.4231 14.0255 23.4231 14.6419 23.0598 15.0711L16.1477 23.2379C15.7252 23.7371 14.963 23.8116 14.4451 23.4043Z" fill="black"/>
    </svg>
  );
};
