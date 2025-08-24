import React from 'react';
import { IconProps } from './types';

export const Spacebar32RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M5.86671 13C6.34538 13 6.73342 13.3882 6.73342 13.8671V16.2723C6.73342 16.4565 6.88266 16.6058 7.06677 16.6058H24.2666C24.4507 16.6058 24.5999 16.4565 24.5999 16.2723V13.8671C24.5999 13.3882 24.988 13 25.4666 13C25.9453 13 26.3333 13.3882 26.3333 13.8671V16.8059C26.3333 17.6532 25.6468 18.34 24.7999 18.34H6.53341C5.68653 18.34 5 17.6532 5 16.8059V13.8671C5 13.3882 5.38804 13 5.86671 13Z" fill="black"/>
    </svg>
  );
};
