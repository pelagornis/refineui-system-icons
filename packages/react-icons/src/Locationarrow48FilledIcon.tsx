import React from 'react';
import { IconProps } from './types';

export const Locationarrow48FilledIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.9289 9.48044C39.2628 8.57991 38.3608 7.71539 37.4776 8.08937L9.66807 19.8646C8.73865 20.2581 8.79139 21.5952 9.74891 21.914L20.6996 25.5604C21.0242 25.6684 21.2796 25.9224 21.39 26.2468L25.817 39.2577C26.1489 40.2333 27.5195 40.252 27.8778 39.2857L38.9289 9.48044Z" fill="black"/>
    </svg>
  );
};
