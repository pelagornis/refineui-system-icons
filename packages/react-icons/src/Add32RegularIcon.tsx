import React from 'react';
import { IconProps } from './types';

export const Add32RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M15.6667 5C16.1365 5 16.5174 5.38088 16.5174 5.85072V14.816H25.4826C25.9525 14.816 26.3333 15.1968 26.3333 15.6667C26.3333 16.1365 25.9525 16.5174 25.4826 16.5174H16.5174V25.4826C16.5174 25.9525 16.1365 26.3333 15.6667 26.3333C15.1968 26.3333 14.816 25.9525 14.816 25.4826V16.5174H5.85072C5.38088 16.5174 5 16.1365 5 15.6667C5 15.1968 5.38088 14.816 5.85072 14.816H14.816V5.85072C14.816 5.38088 15.1968 5 15.6667 5Z" fill="black"/>
    </svg>
  );
};
