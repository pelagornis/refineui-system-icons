import React from 'react';
import { IconProps } from './types';

export const Numbercircle428FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M14.5083 12.1024V14.9212H12.9815L14.5083 12.1024Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3333 23.6667C19.488 23.6667 23.6667 19.488 23.6667 14.3333C23.6667 9.17868 19.488 5 14.3333 5C9.17868 5 5 9.17868 5 14.3333C5 19.488 9.17868 23.6667 14.3333 23.6667ZM14.3333 10.075C14.055 10.075 13.7991 10.2274 13.6665 10.4722L11.3332 14.7798C11.2731 14.8908 11.2417 15.0149 11.2417 15.141V15.6795C11.2417 16.0983 11.5812 16.4378 12 16.4378H14.5083V17.8333C14.5083 18.2521 14.8479 18.5917 15.2667 18.5917C15.6855 18.5917 16.025 18.2521 16.025 17.8333V16.4378H16.6667C17.0855 16.4378 17.425 16.0983 17.425 15.6795C17.425 15.2607 17.0855 14.9212 16.6667 14.9212H16.025V10.8333C16.025 10.4145 15.6855 10.075 15.2667 10.075H14.3333Z" fill="black"/>
    </svg>
  );
};
