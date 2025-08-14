import React from 'react';
import { IconProps } from './types';

export const Chevronright20RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M6.09652 3.85025C5.9528 3.64343 5.9689 3.35695 6.14942 3.16753C6.35579 2.95119 6.69873 2.94348 6.91526 3.14963L13.1836 9.12397C13.4739 9.40096 13.4922 9.85289 13.2381 10.1517L13.1836 10.2095L6.91526 16.1838L6.82899 16.2513C6.61548 16.385 6.33002 16.3545 6.14942 16.1651C5.96925 15.9757 5.95298 15.6899 6.09652 15.4832L6.16814 15.3994L12.1825 9.66672L6.16814 3.93325L6.09652 3.85025Z" fill="black"/>
    </svg>
  );
};
