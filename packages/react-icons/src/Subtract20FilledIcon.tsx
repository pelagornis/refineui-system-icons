import React from 'react';
import { IconProps } from './types';

export const Subtract20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M3 10.8333C3 10.3731 3.3731 10 3.83333 10H15.5C15.9602 10 16.3333 10.3731 16.3333 10.8333C16.3333 11.2936 15.9602 11.6667 15.5 11.6667H3.83333C3.3731 11.6667 3 11.2936 3 10.8333Z" fill="black"/>
    </svg>
  );
};
