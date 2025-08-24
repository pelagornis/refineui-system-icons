import React from 'react';
import { IconProps } from './types';

export const Chart32FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M6.73326 5.86663C6.73326 5.388 6.34526 5 5.86663 5C5.388 5 5 5.388 5 5.86663V24.1334C5 25.3484 5.98493 26.3333 7.19991 26.3333H25.4667C25.9453 26.3333 26.3333 25.9453 26.3333 25.4667C26.3333 24.9881 25.9453 24.6001 25.4667 24.6001H7.19991C6.94219 24.6001 6.73326 24.3911 6.73326 24.1334V5.86663Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4699 8.40934C25.4699 7.04334 23.8184 6.35925 22.8525 7.32515L16.8617 13.316L14.7459 11.2001C14.2484 10.7027 13.4761 10.6076 12.8728 10.9696L8.48172 13.6042C8.01989 13.8813 7.73731 14.3804 7.73731 14.919V22.466C7.73731 23.1287 8.27454 23.6659 8.93726 23.6659H24.27C24.9327 23.6659 25.4699 23.1287 25.4699 22.466V8.40934Z" fill="black"/>
    </svg>
  );
};
