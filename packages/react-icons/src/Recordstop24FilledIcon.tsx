import React from 'react';
import { IconProps } from './types';

export const Recordstop24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM9.75 9C9.33579 9 9 9.33579 9 9.75V14.25C9 14.6642 9.33579 15 9.75 15H14.25C14.6642 15 15 14.6642 15 14.25V9.75C15 9.33579 14.6642 9 14.25 9H9.75Z" fill="black"/>
    </svg>
  );
};
