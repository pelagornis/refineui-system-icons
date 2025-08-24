import React from 'react';
import { IconProps } from './types';

export const Pentagon20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.14995 4.17411L3.33454 8.59936C3.04825 8.81722 2.93064 9.19101 3.04088 9.53268L5.09914 15.9115C5.21229 16.2622 5.53976 16.5 5.90952 16.5H13.4238C13.7936 16.5 14.121 16.2622 14.2342 15.9115L16.2924 9.53268C16.4027 9.19101 16.2851 8.81722 15.9988 8.59936L10.1834 4.17411C9.87832 3.94196 9.45501 3.94196 9.14995 4.17411Z" fill="black"/>
    </svg>
  );
};
