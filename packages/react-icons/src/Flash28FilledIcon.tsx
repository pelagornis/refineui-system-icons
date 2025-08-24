import React from 'react';
import { IconProps } from './types';

export const Flash28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.38385 5.63586C9.54936 5.25008 9.92878 5 10.3486 5H17.4388C18.1554 5 18.6614 5.70222 18.4345 6.38202L17.1217 10.3161H21.2782C22.2136 10.3161 22.6819 11.4474 22.02 12.1086L10.7673 23.3493C10.0372 24.0785 8.80332 23.4271 8.99369 22.4129L10.4253 14.7858H7.05088C6.29708 14.7858 5.78896 14.015 6.08617 13.3222L9.38385 5.63586Z" fill="black"/>
    </svg>
  );
};
