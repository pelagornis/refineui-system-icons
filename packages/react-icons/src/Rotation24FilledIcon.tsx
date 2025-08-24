import React from 'react';
import { IconProps } from './types';

export const Rotation24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.99992 4C5.55216 4 5.99984 4.44768 5.99984 4.99992V11.0105C7.21178 11.1031 8.66798 11.4845 9.94912 12.383C11.5101 13.4778 12.7199 15.2783 12.9575 18.0002H19.0001C19.5523 18.0002 20 18.4478 20 19.0001C20 19.5523 19.5523 20 19.0001 20H5.99984C4.89536 20 4 19.1046 4 18.0002V4.99992C4 4.44768 4.44768 4 4.99992 4ZM10.9486 18.0002C10.7267 15.9379 9.81827 14.7339 8.80082 14.0203C7.91359 13.3981 6.88068 13.1067 5.99984 13.0177V18.0002H10.9486Z" fill="black"/>
    </svg>
  );
};
