import React from 'react';
import { IconProps } from './types';

export const Porthdmi32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.64282 11.4324C9.92886 11.1551 10.3116 11 10.71 11H20.6233C21.0217 11 21.4045 11.1551 21.6905 11.4324L25.8674 15.4822C26.1652 15.771 26.3333 16.1681 26.3333 16.5829V18.8015C26.3333 19.6482 25.6469 20.3346 24.8002 20.3346H6.53315C5.68641 20.3346 5 19.6482 5 18.8015V16.5829C5 16.1681 5.1681 15.771 5.46592 15.4822L9.64282 11.4324ZM11.0933 14.8008C10.6147 14.8008 10.2268 15.1887 10.2268 15.6673C10.2268 16.1459 10.6147 16.5339 11.0933 16.5339H20.2401C20.7187 16.5339 21.1066 16.1459 21.1066 15.6673C21.1066 15.1887 20.7187 14.8008 20.2401 14.8008H11.0933Z" fill="black"/>
    </svg>
  );
};
