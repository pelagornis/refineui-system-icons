import React from 'react';
import { IconProps } from './types';

export const Textboxalignbottomright20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.66667 3C3.74619 3 3 3.74619 3 4.66667V14.6667C3 15.5871 3.74619 16.3333 4.66667 16.3333H14.6667C15.5871 16.3333 16.3333 15.5871 16.3333 14.6667V4.66667C16.3333 3.74619 15.5871 3 14.6667 3H4.66667ZM7.875 12.5833C7.875 12.2842 8.11751 12.0417 8.41667 12.0417H13.4167C13.7158 12.0417 13.9583 12.2842 13.9583 12.5833C13.9583 12.8825 13.7158 13.125 13.4167 13.125H8.41667C8.11751 13.125 7.875 12.8825 7.875 12.5833ZM5.79167 9.66667C5.79167 9.36751 6.03418 9.125 6.33333 9.125H13.4167C13.7158 9.125 13.9583 9.36751 13.9583 9.66667C13.9583 9.96582 13.7158 10.2083 13.4167 10.2083H6.33333C6.03418 10.2083 5.79167 9.96582 5.79167 9.66667Z" fill="black"/>
    </svg>
  );
};
