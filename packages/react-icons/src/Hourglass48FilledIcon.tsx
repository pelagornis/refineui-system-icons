import React from 'react';
import { IconProps } from './types';

export const Hourglass48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M13.1628 8H34.8372C37.3794 8 38.8793 10.7091 37.439 12.6996L30.4921 22.3004C29.7514 23.3242 29.7514 24.6758 30.4921 25.6996L37.439 35.3004C38.8793 37.2909 37.3794 40 34.8372 40H13.1628C10.6206 40 9.12072 37.2909 10.561 35.3004L17.5079 25.6996C18.2486 24.6758 18.2486 23.3242 17.5079 22.3004L10.561 12.6996C9.12072 10.7091 10.6206 8 13.1628 8Z" fill="black"/>
    </svg>
  );
};
