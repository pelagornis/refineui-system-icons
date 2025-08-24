import React from 'react';
import { IconProps } from './types';

export const Smartwatch32FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M11.3333 7.66667C11.3333 6.19391 12.5272 5 14 5H19.3333C20.8061 5 22 6.19391 22 7.66667V7.89427C21.583 7.74687 21.1342 7.66667 20.6667 7.66667H12.6667C12.1992 7.66667 11.7504 7.74687 11.3333 7.89427V7.66667Z" fill="black"/>
<path d="M20.6667 23.6667C21.1342 23.6667 21.583 23.5865 22 23.4391V23.6667C22 25.1394 20.8061 26.3333 19.3333 26.3333H14C12.5272 26.3333 11.3333 25.1394 11.3333 23.6667V23.4391C11.7504 23.5865 12.1992 23.6667 12.6667 23.6667H20.6667Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6667 9C11.1939 9 10 10.1939 10 11.6667V19.6667C10 21.1394 11.1939 22.3333 12.6667 22.3333H20.6667C22.1394 22.3333 23.3333 21.1394 23.3333 19.6667V17C24.0697 17 24.6667 16.403 24.6667 15.6667V14.3333C24.6667 13.597 24.0697 13 23.3333 13V11.6667C23.3333 10.1939 22.1394 9 20.6667 9H12.6667Z" fill="black"/>
    </svg>
  );
};
