import React from 'react';
import { IconProps } from './types';

export const Circle16RegularIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10ZM6 9.35C7.85015 9.35 9.35 7.85015 9.35 6C9.35 4.14985 7.85015 2.65 6 2.65C4.14985 2.65 2.65 4.14985 2.65 6C2.65 7.85015 4.14985 9.35 6 9.35Z" fill="black"/>
    </svg>
  );
};
