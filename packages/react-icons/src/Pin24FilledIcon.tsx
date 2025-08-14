import React from 'react';
import { IconProps } from './types';

export const Pin24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.26892 12.7343C4.76133 12.217 4.95278 11.3374 5.62741 11.0874L9.20856 9.76017C9.44449 9.67273 9.63857 9.49645 9.75084 9.26759L11.7925 5.1059C12.3915 3.88491 13.9882 3.62083 14.9353 4.58612L19.4249 9.16188C20.372 10.1272 20.1129 11.7545 18.9149 12.3649L14.8316 14.4458C14.607 14.5602 14.4341 14.758 14.3483 14.9985L13.046 18.6483C12.8007 19.3359 11.9377 19.531 11.4301 19.0137L8.68951 16.2205L4.98118 20H4V19L7.70834 15.2205L5.26892 12.7343Z" fill="black"/>
    </svg>
  );
};
