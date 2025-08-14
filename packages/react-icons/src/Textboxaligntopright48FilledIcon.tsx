import React from 'react';
import { IconProps } from './types';

export const Textboxaligntopright48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 8C9.79086 8 8 9.79086 8 12V36C8 38.2091 9.79086 40 12 40H36C38.2091 40 40 38.2091 40 36V12C40 9.79086 38.2091 8 36 8H12ZM19.2 23.5C19.2 22.782 19.782 22.2 20.5 22.2H32.5C33.218 22.2 33.8 22.782 33.8 23.5C33.8 24.218 33.218 24.8 32.5 24.8H20.5C19.782 24.8 19.2 24.218 19.2 23.5ZM14.2 16.5C14.2 15.782 14.782 15.2 15.5 15.2H32.5C33.218 15.2 33.8 15.782 33.8 16.5C33.8 17.218 33.218 17.8 32.5 17.8H15.5C14.782 17.8 14.2 17.218 14.2 16.5Z" fill="black"/>
    </svg>
  );
};
