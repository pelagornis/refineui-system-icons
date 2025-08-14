import React from 'react';
import { IconProps } from './types';

export const Usbcable20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M12.0166 6.97461V6.9834H12.667C13.2283 6.98357 13.6836 7.43862 13.6836 8V12.167C13.6834 12.7282 13.2282 13.1834 12.667 13.1836H7.66699C7.10561 13.1836 6.65057 12.7283 6.65039 12.167V8C6.65039 7.43851 7.1055 6.9834 7.66699 6.9834H8.31641V6.97461H12.0166Z" fill="black" stroke="black" stroke-width="1.3"/>
    </svg>
  );
};
