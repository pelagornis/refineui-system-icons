import React from 'react';
import { IconProps } from './types';

export const Sim28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.6583 10.4916C20.8771 10.7104 21 11.0072 21 11.3166V22.5C21 23.1443 20.4777 23.6667 19.8333 23.6667H8.16667C7.52233 23.6667 7 23.1443 7 22.5V6.16667C7 5.52233 7.52233 5 8.16667 5H14.6834C14.9928 5 15.2896 5.12292 15.5084 5.34171L20.6583 10.4916ZM13.2417 20.925V12.4083H11.6667C10.6035 12.4083 9.74167 13.2702 9.74167 14.3333V19C9.74167 20.0631 10.6035 20.925 11.6667 20.925H13.2417ZM14.7583 17.425V20.925H16.3333C17.3965 20.925 18.2583 20.0631 18.2583 19V17.425H14.7583ZM18.2583 15.9083V14.3333C18.2583 13.2702 17.3965 12.4083 16.3333 12.4083H14.7583V15.9083H18.2583Z" fill="black"/>
    </svg>
  );
};
