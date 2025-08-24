import React from 'react';
import { IconProps } from './types';

export const Flipverticial20RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2323 8.10466C9.90614 8.48829 9.32198 8.48829 8.99587 8.10466L5.82834 4.37853C5.36966 3.83896 5.74589 3 6.44653 3H12.7816C13.4822 3 13.8585 3.83897 13.3998 4.37853L10.2323 8.10466ZM12.2446 4.08306L9.61406 7.17747L6.98355 4.08306L12.2446 4.08306Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.99587 11.2253C9.32198 10.8417 9.90614 10.8417 10.2323 11.2253L13.3998 14.9514C13.8585 15.491 13.4822 16.33 12.7816 16.33H6.44653C5.74589 16.33 5.36966 15.491 5.82834 14.9514L8.99587 11.2253ZM6.98355 15.2469L9.61406 12.1525L12.2446 15.2469H6.98355Z" fill="black"/>
<path d="M15.7984 10.2065C16.092 10.2065 16.33 9.96408 16.33 9.665C16.33 9.36592 16.092 9.12347 15.7984 9.12347H3.53156C3.23799 9.12347 3 9.36592 3 9.665C3 9.96408 3.23799 10.2065 3.53156 10.2065H15.7984Z" fill="black"/>
    </svg>
  );
};
