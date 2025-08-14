import React from 'react';
import { IconProps } from './types';

export const Highlight20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.66667 3C5.74619 3 5 3.74619 5 4.66666V7.00407C5 7.92454 5.74619 8.67073 6.66667 8.67073H13.3333C14.2538 8.67073 15 7.92454 15 7.00407V4.66667C15 3.74619 14.2538 3 13.3333 3H6.66667Z" fill="black"/>
<path d="M14.1667 9.8243C14.1667 9.50712 13.9095 9.25 13.5924 9.25H6.40763C6.09045 9.25 5.83333 9.50712 5.83333 9.8243C5.83333 10.4586 6.34757 10.9729 6.98192 10.9729H13.0181C13.6524 10.9729 14.1667 10.4586 14.1667 9.8243Z" fill="black"/>
<path d="M6.95833 14.9569V12.1667C6.95833 11.9365 7.14488 11.75 7.375 11.75H12.625C12.8551 11.75 13.0417 11.9365 13.0417 12.1667V13.8284C13.0417 14.4178 12.6659 14.9417 12.1076 15.1308L8.77425 16.2593C7.88273 16.5611 6.95833 15.8981 6.95833 14.9569Z" fill="black"/>
    </svg>
  );
};
