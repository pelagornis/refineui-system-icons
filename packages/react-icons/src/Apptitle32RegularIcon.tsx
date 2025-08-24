import React from 'react';
import { IconProps } from './types';

export const Apptitle32RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.00622 7.66663C7.00622 6.19389 8.20011 5 9.67284 5H21.6727C23.1454 5 24.3393 6.19389 24.3393 7.66662V19.6664C24.3393 21.1392 23.1454 22.3331 21.6727 22.3331H9.67284C8.20011 22.3331 7.00622 21.1392 7.00622 19.6664V7.66663ZM9.67284 6.73331H21.6727C22.1881 6.73331 22.606 7.15117 22.606 7.66662V19.6664C22.606 20.1819 22.1881 20.5998 21.6727 20.5998H9.67284C9.15738 20.5998 8.73952 20.1819 8.73952 19.6664V7.66663C8.73952 7.15117 9.15738 6.73331 9.67284 6.73331Z" fill="black"/>
<path d="M7 25.4667C7 25.9453 7.38801 26.3333 7.86665 26.3333H23.4664C23.945 26.3333 24.3331 25.9453 24.3331 25.4667C24.3331 24.988 23.945 24.6 23.4664 24.6H7.86665C7.38801 24.6 7 24.988 7 25.4667Z" fill="black"/>
    </svg>
  );
};
