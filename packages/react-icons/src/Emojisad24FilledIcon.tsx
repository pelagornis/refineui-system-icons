import React from 'react';
import { IconProps } from './types';

export const Emojisad24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM9 12C9.55228 12 10 11.5523 10 11C10 10.4477 9.55228 10 9 10C8.44772 10 8 10.4477 8 11C8 11.5523 8.44772 12 9 12ZM15 12C15.5523 12 16 11.5523 16 11C16 10.4477 15.5523 10 15 10C14.4477 10 14 10.4477 14 11C14 11.5523 14.4477 12 15 12ZM9.29069 15.5814C10.1837 15.1349 12.5569 14.5052 14.7093 15.5814C15.0304 15.7419 15.4208 15.6118 15.5814 15.2907C15.7419 14.9696 15.6118 14.5792 15.2907 14.4186C12.6431 13.0948 9.81628 13.8651 8.70931 14.4186C8.38823 14.5792 8.25808 14.9696 8.41862 15.2907C8.57917 15.6118 8.9696 15.7419 9.29069 15.5814Z" fill="black"/>
    </svg>
  );
};
