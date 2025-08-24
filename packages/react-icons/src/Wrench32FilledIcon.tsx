import React from 'react';
import { IconProps } from './types';

export const Wrench32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4043 10.8613C14.4043 7.60758 17.0915 5 20.3688 5C21.0574 5 21.7206 5.11499 22.3385 5.32736L23.6657 5.7835L20.1757 9.20287C19.7 9.66891 19.7 10.417 20.1757 10.8831C20.6612 11.3588 21.4557 11.3588 21.9412 10.8831L25.4144 7.48023L25.9028 8.67129C26.1807 9.34877 26.3333 10.0885 26.3333 10.8613C26.3333 14.1151 23.6461 16.7226 20.3688 16.7226C19.866 16.7226 19.3767 16.6613 18.9087 16.5455L9.73641 25.5321C8.65294 26.5937 6.90349 26.5937 5.82002 25.5321C4.72666 24.4609 4.72666 22.7166 5.82002 21.6454L14.7674 12.8791C14.5325 12.2495 14.4043 11.5696 14.4043 10.8613Z" fill="black"/>
    </svg>
  );
};
