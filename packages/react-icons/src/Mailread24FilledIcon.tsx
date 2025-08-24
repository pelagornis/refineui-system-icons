import React from 'react';
import { IconProps } from './types';

export const Mailread24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M12.5715 4.15143C12.2179 3.94944 11.7838 3.94953 11.4303 4.15166L4.88098 7.89626C4.81796 7.93229 4.81312 8.02134 4.87186 8.06399L11.9999 13.2394L19.1823 8.0908C19.2415 8.04835 19.2369 7.95884 19.1736 7.9227L12.5715 4.15143Z" fill="black"/>
<path d="M18.8519 20.0008C19.4871 20.0008 20.0019 19.4859 20.0019 18.8508V9.30183C20.0019 9.22044 19.9099 9.17314 19.8437 9.22053L12.6695 14.3588C12.2692 14.6455 11.7308 14.6455 11.3305 14.3589L4.15822 9.22338C4.09204 9.17599 4 9.22329 4 9.30468V18.8508C4 19.4859 4.51487 20.0008 5.15 20.0008H18.8519Z" fill="black"/>
    </svg>
  );
};
