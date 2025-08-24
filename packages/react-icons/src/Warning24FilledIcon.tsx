import React from 'react';
import { IconProps } from './types';

export const Warning24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.9543 5.54327C12.5324 4.81891 11.4676 4.81891 11.0457 5.54327L4.14645 17.3868C3.72773 18.1056 4.25682 19 5.10078 19H18.8992C19.7432 19 20.2723 18.1056 19.8536 17.3868L12.9543 5.54327ZM12.65 9.5C12.65 9.14102 12.359 8.85 12 8.85C11.641 8.85 11.35 9.14102 11.35 9.5V13.5C11.35 13.859 11.641 14.15 12 14.15C12.359 14.15 12.65 13.859 12.65 13.5V9.5ZM12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75C12.75 15.3358 12.4142 15 12 15C11.5858 15 11.25 15.3358 11.25 15.75C11.25 16.1642 11.5858 16.5 12 16.5Z" fill="black"/>
    </svg>
  );
};
