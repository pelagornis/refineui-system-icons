import React from 'react';
import { IconProps } from './types';

export const Important48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.9987 13.7405C29.9987 16.9109 27.3127 30.9619 23.9993 30.9619C20.686 30.9619 18 16.9109 18 13.7405C18 10.5701 20.686 8 23.9993 8C27.3127 8 29.9987 10.5701 29.9987 13.7405Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.9993 31.4171C21.6281 31.4171 19.6998 33.3352 19.6998 35.7086C19.6998 38.082 21.6281 40 23.9993 40C26.3706 40 28.2989 38.082 28.2989 35.7086C28.2989 33.3352 26.3706 31.4171 23.9993 31.4171Z" fill="black"/>
    </svg>
  );
};
