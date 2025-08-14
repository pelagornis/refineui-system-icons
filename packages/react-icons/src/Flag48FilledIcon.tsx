import React from 'react';
import { IconProps } from './types';

export const Flag48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6006 33.1598C10.6006 32.6076 11.0484 32.1599 11.6008 32.1599H36.5847C39.2073 32.1599 41.0756 29.2307 39.3045 26.9501L34.2454 20.4357C34.0759 20.2174 34.0759 19.9425 34.2454 19.7242L39.3045 13.2098C41.0756 10.9292 39.2072 8 36.5847 8H11.3933C9.60047 8 8 9.38087 8 11.2599V38.7002C8 39.418 8.58217 40 9.3003 40C10.0184 40 10.6006 39.418 10.6006 38.7002V33.1598Z" fill="black"/>
    </svg>
  );
};
