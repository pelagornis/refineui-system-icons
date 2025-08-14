import React from 'react';
import { IconProps } from './types';

export const Squaremultiple48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M36 10.6H20C19.2268 10.6 18.6 11.2268 18.6 12H16C16 9.79086 17.7909 8 20 8H36C38.2091 8 40 9.79086 40 12V28C40 30.2091 38.2091 32 36 32V29.4C36.7732 29.4 37.4 28.7732 37.4 28V12C37.4 11.2268 36.7732 10.6 36 10.6Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 14C9.79086 14 8 15.7909 8 18V36C8 38.2091 9.79086 40 12 40H30C32.2091 40 34 38.2091 34 36V18C34 15.7909 32.2091 14 30 14H12ZM12 16.6C11.2268 16.6 10.6 17.2268 10.6 18V36C10.6 36.7732 11.2268 37.4 12 37.4H30C30.7732 37.4 31.4 36.7732 31.4 36V18C31.4 17.2268 30.7732 16.6 30 16.6H12Z" fill="black"/>
    </svg>
  );
};
