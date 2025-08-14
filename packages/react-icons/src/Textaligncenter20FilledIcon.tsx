import React from 'react';
import { IconProps } from './types';

export const Textaligncenter20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M5.66667 6.83333C5.66667 6.3731 6.03976 6 6.5 6H14C14.4602 6 14.8333 6.3731 14.8333 6.83333C14.8333 7.29357 14.4602 7.66667 14 7.66667H6.5C6.03976 7.66667 5.66667 7.29357 5.66667 6.83333Z" fill="black"/>
<path d="M4 10.1667C4 9.70643 4.3731 9.33333 4.83333 9.33333H15.6667C16.1269 9.33333 16.5 9.70643 16.5 10.1667C16.5 10.6269 16.1269 11 15.6667 11H4.83333C4.3731 11 4 10.6269 4 10.1667Z" fill="black"/>
<path d="M8.16667 12.6667C7.70643 12.6667 7.33333 13.0398 7.33333 13.5C7.33333 13.9602 7.70643 14.3333 8.16667 14.3333H12.3333C12.7936 14.3333 13.1667 13.9602 13.1667 13.5C13.1667 13.0398 12.7936 12.6667 12.3333 12.6667H8.16667Z" fill="black"/>
    </svg>
  );
};
