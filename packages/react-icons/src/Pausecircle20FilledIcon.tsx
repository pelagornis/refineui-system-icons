import React from 'react';
import { IconProps } from './types';

export const Pausecircle20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.66667 16.3333C13.3486 16.3333 16.3333 13.3486 16.3333 9.66667C16.3333 5.98477 13.3486 3 9.66667 3C5.98477 3 3 5.98477 3 9.66667C3 13.3486 5.98477 16.3333 9.66667 16.3333ZM8.54167 7.16667C8.54167 6.86751 8.29915 6.625 8 6.625C7.70085 6.625 7.45833 6.86751 7.45833 7.16667V12.1667C7.45833 12.4658 7.70085 12.7083 8 12.7083C8.29915 12.7083 8.54167 12.4658 8.54167 12.1667V7.16667ZM11.875 7.16667C11.875 6.86751 11.6325 6.625 11.3333 6.625C11.0342 6.625 10.7917 6.86751 10.7917 7.16667V12.1667C10.7917 12.4658 11.0342 12.7083 11.3333 12.7083C11.6325 12.7083 11.875 12.4658 11.875 12.1667V7.16667Z" fill="black"/>
    </svg>
  );
};
