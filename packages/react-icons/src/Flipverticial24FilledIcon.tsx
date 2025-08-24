import React from 'react';
import { IconProps } from './types';

export const Flipverticial24FilledIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6809 10.1271C12.2894 10.5876 11.5883 10.5876 11.1968 10.1271L7.39486 5.65465C6.8443 5.00701 7.29589 4 8.13687 4H15.7409C16.5818 4 17.0334 5.00701 16.4829 5.65465L12.6809 10.1271Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1968 13.8728C11.5883 13.4124 12.2894 13.4124 12.6809 13.8728L16.4829 18.3453C17.0334 18.9929 16.5818 19.9999 15.7409 19.9999H8.13687C7.29589 19.9999 6.8443 18.9929 7.39486 18.3453L11.1968 13.8728Z" fill="black"/>
<path d="M19.362 12.65C19.7143 12.65 20 12.359 20 12C20 11.641 19.7143 11.35 19.362 11.35L4.63804 11.35C4.28566 11.35 4 11.641 4 12C4 12.359 4.28566 12.65 4.63804 12.65H19.362Z" fill="black"/>
    </svg>
  );
};
