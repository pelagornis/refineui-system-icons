import React from 'react';
import { IconProps } from './types';

export const Shareandroid24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34315 18.6569 4 17 4C15.3431 4 14 5.34315 14 7C14 7.25132 14.0309 7.49543 14.0891 7.72872L9.32894 10.1088C8.77888 9.43225 7.93992 9 7 9C5.34315 9 4 10.3431 4 12C4 13.6569 5.34315 15 7 15C7.93992 15 8.77888 14.5678 9.32894 13.8912L14.0891 16.2713C14.0309 16.5046 14 16.7487 14 17C14 18.6569 15.3431 20 17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C16.0601 14 15.2211 14.4322 14.6711 15.1088L9.91088 12.7287C9.9691 12.4954 10 12.2513 10 12C10 11.7487 9.9691 11.5046 9.91088 11.2713L14.6711 8.89119C15.2211 9.56775 16.0601 10 17 10Z" fill="black"/>
    </svg>
  );
};
