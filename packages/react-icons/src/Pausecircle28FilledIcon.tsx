import React from 'react';
import { IconProps } from './types';

export const Pausecircle28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3333 23.6667C19.488 23.6667 23.6667 19.488 23.6667 14.3333C23.6667 9.17868 19.488 5 14.3333 5C9.17868 5 5 9.17868 5 14.3333C5 19.488 9.17868 23.6667 14.3333 23.6667ZM12.7583 10.8333C12.7583 10.4145 12.4188 10.075 12 10.075C11.5812 10.075 11.2417 10.4145 11.2417 10.8333V17.8333C11.2417 18.2521 11.5812 18.5917 12 18.5917C12.4188 18.5917 12.7583 18.2521 12.7583 17.8333V10.8333ZM17.425 10.8333C17.425 10.4145 17.0855 10.075 16.6667 10.075C16.2479 10.075 15.9083 10.4145 15.9083 10.8333V17.8333C15.9083 18.2521 16.2479 18.5917 16.6667 18.5917C17.0855 18.5917 17.425 18.2521 17.425 17.8333V10.8333Z" fill="black"/>
    </svg>
  );
};
