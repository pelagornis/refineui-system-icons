import React from 'react';
import { IconProps } from './types';

export const Ribbon24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.65 14.8068C17.0789 13.7055 18 11.9731 18 10.0247C18 6.69735 15.3137 4 12 4C8.68629 4 6 6.69735 6 10.0247C6 11.9731 6.92114 13.7055 8.35 14.8068V19.0948C8.35 19.8166 9.15113 20.2471 9.74923 19.8467L12 18.34L14.2508 19.8467C14.8489 20.2471 15.65 19.8166 15.65 19.0948V14.8068ZM16.7 10.0247C16.7 12.6311 14.5957 14.7441 12 14.7441C9.40426 14.7441 7.3 12.6311 7.3 10.0247C7.3 7.41828 9.40426 5.30535 12 5.30535C14.5957 5.30535 16.7 7.41828 16.7 10.0247ZM14.35 15.5698C13.6283 15.8785 12.834 16.0494 12 16.0494C11.166 16.0494 10.3717 15.8785 9.65 15.5698V18.3443L12 16.7712L14.35 18.3443V15.5698Z" fill="black"/>
    </svg>
  );
};
