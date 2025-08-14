import React from 'react';
import { IconProps } from './types';

export const Apptitle48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.0093 11.9999C11.0093 9.79083 12.7995 8 15.0079 8H33.0014C35.2098 8 37 9.79083 37 11.9999V29.9997C37 32.2088 35.2098 33.9996 33.0014 33.9996H15.0079C12.7995 33.9996 11.0093 32.2088 11.0093 29.9997V11.9999Z" fill="black"/>
<path d="M11 38.7C11 39.418 11.5818 40 12.2995 40H35.6911C36.4089 40 36.9907 39.418 36.9907 38.7C36.9907 37.9821 36.4089 37.4 35.6911 37.4H12.2995C11.5818 37.4 11 37.9821 11 38.7Z" fill="black"/>
    </svg>
  );
};
