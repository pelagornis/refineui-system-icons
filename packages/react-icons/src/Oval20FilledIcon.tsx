import React from 'react';
import { IconProps } from './types';

export const Oval20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 5C5.23858 5 3 7.23858 3 10C3 12.7614 5.23858 15 8 15H11.3333C14.0948 15 16.3333 12.7614 16.3333 10C16.3333 7.23858 14.0948 5 11.3333 5H8Z" fill="black"/>
    </svg>
  );
};
