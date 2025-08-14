import React from 'react';
import { IconProps } from './types';

export const Subtract24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M4 12.65C4 12.291 4.26915 12 4.60116 12H19.3988C19.7309 12 20 12.291 20 12.65C20 13.009 19.7309 13.3 19.3988 13.3H4.60116C4.26915 13.3 4 13.009 4 12.65Z" fill="black"/>
    </svg>
  );
};
