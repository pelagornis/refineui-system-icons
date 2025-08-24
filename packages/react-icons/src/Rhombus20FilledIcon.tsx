import React from 'react';
import { IconProps } from './types';

export const Rhombus20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M5.17391 10.2121C4.94203 9.88889 4.94203 9.44444 5.17391 9.12121L9.30435 3.36364C9.65217 2.87879 10.3478 2.87879 10.6957 3.36364L14.8261 9.12121C15.058 9.44444 15.058 9.88889 14.8261 10.2121L10.6957 15.9697C10.3478 16.4545 9.65217 16.4545 9.30435 15.9697L5.17391 10.2121Z" fill="black"/>
    </svg>
  );
};
