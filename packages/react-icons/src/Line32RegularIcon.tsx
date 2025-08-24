import React from 'react';
import { IconProps } from './types';

export const Line32RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M26.0795 5.25381C26.4179 5.59222 26.4179 6.1409 26.0795 6.47931L6.47931 26.0795C6.1409 26.4179 5.59222 26.4179 5.25381 26.0795C4.9154 25.7411 4.9154 25.1924 5.25381 24.854L24.854 5.25381C25.1924 4.9154 25.7411 4.9154 26.0795 5.25381Z" fill="black"/>
    </svg>
  );
};
