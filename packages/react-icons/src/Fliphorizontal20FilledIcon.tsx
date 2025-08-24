import React from 'react';
import { IconProps } from './types';

export const Fliphorizontal20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.8952 10.2323C11.5116 9.90614 11.5116 9.32198 11.8952 8.99587L15.6213 5.82834C16.1609 5.36966 16.9999 5.74589 16.9999 6.44653L16.9999 12.7816C16.9999 13.4822 16.1609 13.8585 15.6213 13.3998L11.8952 10.2323Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.77459 8.99587C9.15821 9.32198 9.15821 9.90614 8.77459 10.2323L5.04846 13.3998C4.50889 13.8585 3.66993 13.4822 3.66993 12.7816L3.66993 6.44653C3.66993 5.74589 4.50889 5.36966 5.04846 5.82834L8.77459 8.99587Z" fill="black"/>
<path d="M9.79335 15.7984C9.79335 16.092 10.0358 16.33 10.3349 16.33C10.634 16.33 10.8764 16.092 10.8764 15.7984L10.8764 3.53156C10.8764 3.23799 10.634 3 10.3349 3C10.0358 3 9.79335 3.23799 9.79335 3.53156L9.79335 15.7984Z" fill="black"/>
    </svg>
  );
};
