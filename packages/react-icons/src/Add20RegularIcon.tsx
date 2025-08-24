import React from 'react';
import { IconProps } from './types';

export const Add20RegularIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.66667 3C9.96031 3 10.1984 3.23805 10.1984 3.5317V9.13497H15.8016C16.0953 9.13497 16.3333 9.37302 16.3333 9.66667C16.3333 9.96031 16.0953 10.1984 15.8016 10.1984H10.1984V15.8016C10.1984 16.0953 9.96031 16.3333 9.66667 16.3333C9.37302 16.3333 9.13497 16.0953 9.13497 15.8016V10.1984H3.5317C3.23805 10.1984 3 9.96031 3 9.66667C3 9.37302 3.23805 9.13497 3.5317 9.13497H9.13497V3.5317C9.13497 3.23805 9.37302 3 9.66667 3Z" fill="black"/>
    </svg>
  );
};
