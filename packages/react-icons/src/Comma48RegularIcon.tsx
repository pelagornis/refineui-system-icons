import React from 'react';
import { IconProps } from './types';

export const Comma48RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 17.7368C14 12.3593 18.4709 8 23.986 8C29.4904 8 33.9545 12.3422 33.972 17.7051C34.1536 21.698 33.4908 27.2002 30.8074 31.7627C28.2291 36.1464 23.8123 39.5948 16.7915 39.9978C16.0219 40.0419 15.3959 39.4278 15.3959 38.6761C15.3959 37.9244 16.0231 37.3207 16.7923 37.2702C22.7121 36.8821 26.2637 34.0162 28.3856 30.4085C29.3517 28.7659 30.026 26.957 30.4727 25.1399C28.7277 26.5949 26.4621 27.4736 23.986 27.4736C18.4709 27.4736 14 23.1143 14 17.7368Z" fill="black"/>
    </svg>
  );
};
