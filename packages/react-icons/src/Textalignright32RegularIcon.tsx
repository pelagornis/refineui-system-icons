import React from 'react';
import { IconProps } from './types';

export const Textalignright32RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M11.6205 10.8448C11.6205 10.3782 12.0085 10 12.4872 10H25.1333C25.6119 10 26 10.3782 26 10.8448C26 11.3114 25.6119 11.6896 25.1333 11.6896H12.4872C12.0085 11.6896 11.6205 11.3114 11.6205 10.8448Z" fill="black"/>
<path d="M6 16.5C6 16.0335 6.38803 15.6552 6.8667 15.6552H25.1333C25.612 15.6552 26 16.0335 26 16.5C26 16.9666 25.612 17.3448 25.1333 17.3448H6.8667C6.38803 17.3448 6 16.9666 6 16.5Z" fill="black"/>
<path d="M18.1076 21.3104C17.629 21.3104 17.2409 21.6886 17.2409 22.1552C17.2409 22.6218 17.629 23 18.1076 23H25.1332C25.6119 23 25.9999 22.6218 25.9999 22.1552C25.9999 21.6886 25.6119 21.3104 25.1332 21.3104H18.1076Z" fill="black"/>
    </svg>
  );
};
