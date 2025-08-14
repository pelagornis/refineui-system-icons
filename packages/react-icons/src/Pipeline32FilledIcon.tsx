import React from 'react';
import { IconProps } from './types';

export const Pipeline32FilledIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.66667 8C6.19391 8 5 9.19391 5 10.6667V21.3333C5 22.8061 6.19391 24 7.66667 24C9.13943 24 10.3333 22.8061 10.3333 21.3333V10.6667C10.3333 9.19391 9.13943 8 7.66667 8Z" fill="black"/>
<path d="M12.4 11.1333C12.2159 11.1333 12.0667 11.2826 12.0667 11.4667V20.5333C12.0667 20.7174 12.2159 20.8667 12.4 20.8667H18.9333C19.1174 20.8667 19.2667 20.7174 19.2667 20.5333V11.4667C19.2667 11.2826 19.1174 11.1333 18.9333 11.1333H12.4Z" fill="black"/>
<path d="M21 10.6667V21.3333C21 22.8061 22.1939 24 23.6667 24C25.1394 24 26.3333 22.8061 26.3333 21.3333V10.6667C26.3333 9.19391 25.1394 8 23.6667 8C22.1939 8 21 9.19391 21 10.6667Z" fill="black"/>
    </svg>
  );
};
