import React from 'react';
import { IconProps } from './types';

export const Wifi448FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M24.147 36C25.5277 36 26.647 34.8807 26.647 33.5C26.647 32.1193 25.5277 31 24.147 31C22.7663 31 21.647 32.1193 21.647 33.5C21.647 34.8807 22.7663 36 24.147 36Z" fill="black"/>
    </svg>
  );
};
