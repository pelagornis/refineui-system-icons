import React from 'react';
import { IconProps } from './types';

export const Desktop48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 13C8 10.7909 9.79086 9 12 9H36C38.2091 9 40 10.7909 40 13V27C40 29.2091 38.2091 31 36 31H29.5857V35.4H34C34.718 35.4 35.3 35.982 35.3 36.7C35.3 37.418 34.718 38 34 38H14C13.282 38 12.7 37.418 12.7 36.7C12.7 35.982 13.282 35.4 14 35.4H18.4143V31H12C9.79086 31 8 29.2091 8 27V13ZM21.0143 31V35.4H26.9857V31H21.0143Z" fill="black"/>
    </svg>
  );
};
