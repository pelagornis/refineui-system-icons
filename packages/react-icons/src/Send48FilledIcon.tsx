import React from 'react';
import { IconProps } from './types';

export const Send48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M39.425 23.0697C40.1917 23.453 40.1917 24.547 39.425 24.9303L9.50536 39.8889C8.81375 40.2346 8 39.7318 8 38.9586V26.9434C8 26.4429 8.35651 26.0133 8.84849 25.9211L18.0047 24.2045C18.231 24.162 18.231 23.838 18.0047 23.7955L8.84849 22.0789C8.35651 21.9867 8 21.5571 8 21.0566L8 9.04143C8 8.26825 8.81375 7.76537 9.50536 8.11115L39.425 23.0697Z" fill="black"/>
    </svg>
  );
};
