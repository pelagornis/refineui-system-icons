import React from 'react';
import { IconProps } from './types';

export const Videoclip20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.66667 4C3.74619 4 3 4.74619 3 5.66667V14C3 14.9205 3.74619 15.6667 4.66667 15.6667H14.6667C15.5871 15.6667 16.3333 14.9205 16.3333 14V5.66667C16.3333 4.74619 15.5871 4 14.6667 4H4.66667ZM11.9795 9.53048C12.2291 9.65526 12.2291 10.0114 11.9795 10.1362L7.65678 12.2971C7.43161 12.4097 7.16667 12.246 7.16667 11.9943V7.67237C7.16667 7.42066 7.43161 7.25695 7.65679 7.36952L11.9795 9.53048Z" fill="black"/>
    </svg>
  );
};
