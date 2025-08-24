import React from 'react';
import { IconProps } from './types';

export const Checkmark28RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M23.4612 8.20556C23.7351 8.47964 23.7351 8.924 23.4612 9.19808L12.3552 20.3115C11.66 21.0073 10.5327 21.0073 9.83744 20.3115L5.20542 15.6764C4.93153 15.4023 4.93153 14.958 5.20542 14.6839C5.47931 14.4098 5.92338 14.4098 6.19728 14.6839L10.8293 19.319C10.9768 19.4666 11.2159 19.4666 11.3634 19.319L22.4694 8.20556C22.7433 7.93148 23.1874 7.93148 23.4612 8.20556Z" fill="black"/>
    </svg>
  );
};
