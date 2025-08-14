import React from 'react';
import { IconProps } from './types';

export const Textboxaligntop28FilledIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 7.33333C5 6.04467 6.04467 5 7.33333 5H21.3333C22.622 5 23.6667 6.04467 23.6667 7.33333V21.3333C23.6667 22.622 22.622 23.6667 21.3333 23.6667H7.33333C6.04467 23.6667 5 22.622 5 21.3333V7.33333ZM8.61667 9.95833C8.61667 9.53952 8.95618 9.2 9.375 9.2H19.2917C19.7105 9.2 20.05 9.53952 20.05 9.95833C20.05 10.3771 19.7105 10.7167 19.2917 10.7167H9.375C8.95618 10.7167 8.61667 10.3771 8.61667 9.95833ZM9.375 13.2833C8.95618 13.2833 8.61667 13.6229 8.61667 14.0417C8.61667 14.4605 8.95618 14.8 9.375 14.8H19.2917C19.7105 14.8 20.05 14.4605 20.05 14.0417C20.05 13.6229 19.7105 13.2833 19.2917 13.2833H9.375Z" fill="black"/>
    </svg>
  );
};
