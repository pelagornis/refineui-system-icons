import React from 'react';
import { IconProps } from './types';

export const Linehorizontal128RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M23.6667 13.7582C23.6667 14.177 23.4208 14.5165 23.1174 14.5165L5.54923 14.5165C5.2459 14.5165 5 14.177 5 13.7582C5 13.3395 5.2459 13 5.54923 13L23.1174 13C23.4208 13 23.6667 13.3395 23.6667 13.7582Z" fill="black"/>
    </svg>
  );
};
