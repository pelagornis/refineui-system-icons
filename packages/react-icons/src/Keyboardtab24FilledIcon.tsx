import React from 'react';
import { IconProps } from './types';

export const Keyboardtab24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M11.2371 5.32426C10.8638 4.9171 10.2312 4.88967 9.82418 5.263C9.41711 5.63633 9.38969 6.26905 9.76294 6.67621L13.7264 10.9998H5C4.44772 10.9998 4 11.4476 4 12C4 12.5524 4.44772 13.0002 5 13.0002H13.7264L9.76294 17.3238C9.38969 17.731 9.41711 18.3637 9.82418 18.737C10.2312 19.1103 10.8638 19.0829 11.2371 18.6757L16.7371 12.676C17.0876 12.2935 17.0876 11.7065 16.7371 11.324L11.2371 5.32426Z" fill="black"/>
<path d="M20 6.00023C20 5.44782 19.5523 5.00001 19 5.00001C18.4477 5.00001 18 5.44782 18 6.00023V17.9998C18 18.5522 18.4477 19 19 19C19.5523 19 20 18.5522 20 17.9998V6.00023Z" fill="black"/>
    </svg>
  );
};
