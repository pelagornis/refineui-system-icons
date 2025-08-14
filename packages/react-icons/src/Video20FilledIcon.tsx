import React from 'react';
import { IconProps } from './types';

export const Video20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M4.66667 6C3.74619 6 3 6.74619 3 7.66667V12.6667C3 13.5871 3.74619 14.3333 4.66667 14.3333H10.5C11.4205 14.3333 12.1667 13.5871 12.1667 12.6667V7.66667C12.1667 6.74619 11.4205 6 10.5 6H4.66667Z" fill="black"/>
<path d="M16.3333 12.5541V7.7792C16.3333 7.07267 15.5093 6.68671 14.9665 7.13902L12.8035 8.9415C12.6135 9.09983 12.5037 9.33437 12.5037 9.58169V10.7517C12.5037 10.999 12.6135 11.2335 12.8035 11.3918L14.9665 13.1943C15.5093 13.6466 16.3333 13.2607 16.3333 12.5541Z" fill="black"/>
    </svg>
  );
};
