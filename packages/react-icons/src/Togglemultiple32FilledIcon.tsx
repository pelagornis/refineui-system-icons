import React from 'react';
import { IconProps } from './types';

export const Togglemultiple32FilledIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15H21.3333C24.0948 15 26.3333 12.7614 26.3333 10C26.3333 7.23858 24.0948 5 21.3333 5H10ZM21 12.6667C22.4728 12.6667 23.6667 11.4728 23.6667 10C23.6667 8.52724 22.4728 7.33333 21 7.33333C19.5272 7.33333 18.3333 8.52724 18.3333 10C18.3333 11.4728 19.5272 12.6667 21 12.6667Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 16.3333C7.23858 16.3333 5 18.5719 5 21.3333C5 24.0948 7.23858 26.3333 10 26.3333H21.3333C24.0948 26.3333 26.3333 24.0948 26.3333 21.3333C26.3333 18.5719 24.0948 16.3333 21.3333 16.3333H10ZM13 21.3333C13 22.8061 11.8061 24 10.3333 24C8.86057 24 7.66667 22.8061 7.66667 21.3333C7.66667 19.8606 8.86057 18.6667 10.3333 18.6667C11.8061 18.6667 13 19.8606 13 21.3333Z" fill="black"/>
    </svg>
  );
};
