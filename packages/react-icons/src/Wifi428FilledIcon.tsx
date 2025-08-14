import React from 'react';
import { IconProps } from './types';

export const Wifi428FilledIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.3357 20.834C15.0951 20.834 15.7107 20.2184 15.7107 19.459C15.7107 18.6996 15.0951 18.084 14.3357 18.084C13.5763 18.084 12.9607 18.6996 12.9607 19.459C12.9607 20.2184 13.5763 20.834 14.3357 20.834Z" fill="black"/>
    </svg>
  );
};
