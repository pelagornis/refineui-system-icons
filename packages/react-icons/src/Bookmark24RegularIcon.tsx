import React from 'react';
import { IconProps } from './types';

export const Bookmark24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 6.07342C18 4.9283 17.1046 4 16 4H8C6.89543 4 6 4.9283 6 6.07342V19.4807C6 19.9201 6.49443 20.1602 6.82009 19.8789L11.6799 15.6803C11.8653 15.5202 12.1347 15.5202 12.3201 15.6803L17.1799 19.8789C17.5056 20.1602 18 19.9201 18 19.4807V6.07342ZM16 5.34772H8C7.6134 5.34772 7.3 5.67263 7.3 6.07342V17.1566C7.3 17.3763 7.54721 17.4963 7.71005 17.3557L10.8477 14.645C11.5152 14.0683 12.4848 14.0683 13.1523 14.645L16.29 17.3557C16.4528 17.4963 16.7 17.3763 16.7 17.1566V6.07342C16.7 5.67263 16.3866 5.34772 16 5.34772Z" fill="black"/>
    </svg>
  );
};
