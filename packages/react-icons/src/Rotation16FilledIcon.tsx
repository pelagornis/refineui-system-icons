import React from 'react';
import { IconProps } from './types';

export const Rotation16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.66682 2C3.0351 2 3.33364 2.29855 3.33364 2.66682V6.67515C4.14186 6.73691 5.11296 6.99124 5.96732 7.59043C7.00832 8.32052 7.81511 9.52124 7.97351 11.3364H12.0032C12.3715 11.3364 12.67 11.6349 12.67 12.0032C12.67 12.3715 12.3715 12.67 12.0032 12.67H3.33364C2.59709 12.67 2 12.0729 2 11.3364V2.66682C2 2.29855 2.29855 2 2.66682 2ZM6.63382 11.3364C6.4859 9.96106 5.88006 9.15817 5.20155 8.68231C4.60988 8.26735 3.92105 8.07303 3.33364 8.0137V11.3364H6.63382Z" fill="black"/>
    </svg>
  );
};
