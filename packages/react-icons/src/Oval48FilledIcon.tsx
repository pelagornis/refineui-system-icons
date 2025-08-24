import React from 'react';
import { IconProps } from './types';

export const Oval48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C13.3726 12 8 17.3726 8 24C8 30.6274 13.3726 36 20 36H28C34.6274 36 40 30.6274 40 24C40 17.3726 34.6274 12 28 12H20Z" fill="black"/>
    </svg>
  );
};
