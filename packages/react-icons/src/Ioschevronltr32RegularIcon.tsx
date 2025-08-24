import React from 'react';
import { IconProps } from './types';

export const Ioschevronltr32RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M13.3678 11.2188C13.7331 11.5367 13.7661 12.0843 13.4413 12.442L10.3101 15.8906C10.0809 16.1431 10.0809 16.5236 10.3101 16.7761L13.4413 20.2247C13.7661 20.5823 13.7331 21.13 13.3678 21.4478C13.0024 21.7657 12.443 21.7335 12.1183 21.3758L8.34389 17.2188C7.88537 16.7138 7.88537 15.9529 8.34389 15.4478L12.1183 11.2908C12.443 10.9332 13.0024 10.9009 13.3678 11.2188Z" fill="black"/>
    </svg>
  );
};
