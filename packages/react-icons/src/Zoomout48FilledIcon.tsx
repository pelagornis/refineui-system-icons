import React from 'react';
import { IconProps } from './types';

export const Zoomout48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.031 28.9774L27.001 29C25.3295 30.2558 23.2516 31 21 31C15.4772 31 11 26.5228 11 21C11 15.4772 15.4772 11 21 11C26.5228 11 31 15.4772 31 21C31 23.2651 30.2469 25.3544 28.9774 27.031L35.759 33.8125C35.9125 33.9661 36.0915 34.1669 36.265 34.3943L36.2852 34.421C36.8365 35.1521 37.3194 36.1451 36.7322 36.7322C36.1451 37.3194 35.1521 36.8365 34.421 36.2852L34.3943 36.265C34.1669 36.0915 33.9661 35.9125 33.8125 35.759L27.031 28.9774ZM17.3006 20C17.1346 20 17 20.4477 17 21C17 21.5523 17.1346 22 17.3006 22H24.6995C24.8655 22 25 21.5523 25 21C25 20.4477 24.8655 20 24.6995 20H17.3006Z" fill="black"/>
    </svg>
  );
};
