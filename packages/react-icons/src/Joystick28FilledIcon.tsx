import React from 'react';
import { IconProps } from './types';

export const Joystick28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7583 11.9176C16.3267 11.5712 17.5 10.1726 17.5 8.5C17.5 6.567 15.933 5 14 5C12.067 5 10.5 6.567 10.5 8.5C10.5 10.1726 11.6733 11.5712 13.2417 11.9176V14.9167H12.5106C11.4002 14.9167 10.5 15.6218 10.5 16.4917V17.1601H17.5V16.4917C17.5 15.6218 16.5998 14.9167 15.4894 14.9167H14.7583V11.9176Z" fill="black"/>
<path d="M8.16667 17.8333C7.52233 17.8333 7 18.3557 7 19V21.3333C7 21.9777 7.52233 22.5 8.16667 22.5H19.8333C20.4777 22.5 21 21.9777 21 21.3333V19C21 18.3557 20.4777 17.8333 19.8333 17.8333H8.16667Z" fill="black"/>
    </svg>
  );
};
