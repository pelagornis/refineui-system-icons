import React from 'react';
import { IconProps } from './types';

export const Portusbc28RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 10C7.567 10 6 11.567 6 13.5C6 15.433 7.567 17 9.5 17H18.8333C20.7663 17 22.3333 15.433 22.3333 13.5C22.3333 11.567 20.7663 10 18.8333 10H9.5ZM18.8333 11.5167H9.5C8.40464 11.5167 7.51667 12.4046 7.51667 13.5C7.51667 14.5954 8.40464 15.4833 9.5 15.4833H18.8333C19.9287 15.4833 20.8167 14.5954 20.8167 13.5C20.8167 12.4046 19.9287 11.5167 18.8333 11.5167Z" fill="black"/>
    </svg>
  );
};
