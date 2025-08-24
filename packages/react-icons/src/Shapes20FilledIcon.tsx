import React from 'react';
import { IconProps } from './types';

export const Shapes20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M6.33333 8V11.9941C4.40958 11.45 3 9.68129 3 7.58333C3 5.05203 5.05203 3 7.58333 3C9.68129 3 11.45 4.40958 11.9941 6.33333H8C7.07953 6.33333 6.33333 7.07953 6.33333 8Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.16667 8.83333C7.16667 7.91286 7.91286 7.16667 8.83333 7.16667H14.6667C15.5871 7.16667 16.3333 7.91286 16.3333 8.83333V14.6667C16.3333 15.5871 15.5871 16.3333 14.6667 16.3333H8.83333C7.91286 16.3333 7.16667 15.5871 7.16667 14.6667V8.83333Z" fill="black"/>
    </svg>
  );
};
