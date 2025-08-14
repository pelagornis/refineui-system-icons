import React from 'react';
import { IconProps } from './types';

export const Textboxalignbottomright28FilledIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.33333 5C6.04467 5 5 6.04467 5 7.33333V21.3333C5 22.622 6.04467 23.6667 7.33333 23.6667H21.3333C22.622 23.6667 23.6667 22.622 23.6667 21.3333V7.33333C23.6667 6.04467 22.622 5 21.3333 5H7.33333ZM11.825 18.4167C11.825 17.9979 12.1645 17.6583 12.5833 17.6583H19.5833C20.0021 17.6583 20.3417 17.9979 20.3417 18.4167C20.3417 18.8355 20.0021 19.175 19.5833 19.175H12.5833C12.1645 19.175 11.825 18.8355 11.825 18.4167ZM8.90833 14.3333C8.90833 13.9145 9.24785 13.575 9.66667 13.575H19.5833C20.0021 13.575 20.3417 13.9145 20.3417 14.3333C20.3417 14.7521 20.0021 15.0917 19.5833 15.0917H9.66667C9.24785 15.0917 8.90833 14.7521 8.90833 14.3333Z" fill="black"/>
    </svg>
  );
};
