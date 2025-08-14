import React from 'react';
import { IconProps } from './types';

export const Apptitle20RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00388 4.66607C5.00388 3.74592 5.74981 3 6.66995 3H14.1673C15.0874 3 15.8333 3.74592 15.8333 4.66607V12.1634C15.8333 13.0835 15.0874 13.8294 14.1673 13.8294H6.66995C5.74981 13.8294 5.00388 13.0835 5.00388 12.1634V4.66607ZM6.66995 4.08294H14.1673C14.4893 4.08294 14.7504 4.34402 14.7504 4.66607V12.1634C14.7504 12.4854 14.4893 12.7465 14.1673 12.7465H6.66995C6.3479 12.7465 6.08683 12.4854 6.08683 12.1634V4.66607C6.08683 4.34402 6.3479 4.08294 6.66995 4.08294Z" fill="black"/>
<path d="M5 15.7873C5 16.0863 5.24243 16.3288 5.54147 16.3288H15.288C15.587 16.3288 15.8294 16.0863 15.8294 15.7873C15.8294 15.4882 15.587 15.2458 15.288 15.2458H5.54147C5.24243 15.2458 5 15.4882 5 15.7873Z" fill="black"/>
    </svg>
  );
};
