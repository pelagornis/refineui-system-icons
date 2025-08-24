import React from 'react';
import { IconProps } from './types';

export const Megaphone32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.3333 8.4069C26.3333 6.67619 24.5624 5.55544 22.9871 6.17017L5.97608 12.8084C5.38748 13.0381 5 13.6051 5 14.2368V16.5031C5 17.1348 5.38748 17.7018 5.97608 17.9315L8.46823 18.904C8.14719 19.5388 7.96685 20.2538 7.96685 21.0393C7.96685 23.779 10.1606 26 12.8667 26C15.0875 26 16.9631 24.5043 17.5646 22.4537L22.9871 24.5697C24.5624 25.1844 26.3333 24.0637 26.3333 22.333V8.4069ZM15.922 21.8902L10.0811 19.5634C9.83318 20.0022 9.70071 20.4939 9.70071 21.0393C9.70071 22.8424 11.1387 24.2666 12.8667 24.2666C14.3117 24.2666 15.5539 23.2708 15.922 21.8902Z" fill="black"/>
    </svg>
  );
};
