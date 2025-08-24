import React from 'react';
import { IconProps } from './types';

export const Iosarrowltr32RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M15.3971 5.2288C15.7397 5.54938 15.7582 6.0877 15.4385 6.43118L7.25674 15.2202C7.02268 15.4716 7.02268 15.8617 7.25674 16.1132L15.4385 24.9022C15.7582 25.2456 15.7397 25.784 15.3971 26.1045C15.0545 26.4251 14.5176 26.4066 14.1979 26.0631L5.35108 16.5597C4.88297 16.0568 4.88297 15.2765 5.35108 14.7737L14.1979 5.27026C14.5176 4.92678 15.0545 4.90822 15.3971 5.2288Z" fill="black"/>
    </svg>
  );
};
