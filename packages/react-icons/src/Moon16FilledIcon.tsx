import React from 'react';
import { IconProps } from './types';

export const Moon16FilledIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5038 9.86672C13.5729 9.63973 13.2965 9.47706 13.0978 9.60682C12.4131 10.0541 11.5951 10.314 10.7163 10.314C8.3076 10.314 6.35493 8.36074 6.35493 5.95125C6.35493 5.07212 6.61488 4.25372 7.06208 3.56877C7.19178 3.37012 7.02909 3.09376 6.80214 3.16288C4.60132 3.83318 3 5.87975 3 8.30043C3 11.266 5.40329 13.67 8.36789 13.67C10.7878 13.67 12.8337 12.0682 13.5038 9.86672Z" fill="black"/>
    </svg>
  );
};
