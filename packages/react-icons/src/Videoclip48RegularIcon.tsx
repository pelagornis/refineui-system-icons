import React from 'react';
import { IconProps } from './types';

export const Videoclip48RegularIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.5507 23.2731C30.1498 23.5726 30.1498 24.4274 29.5507 24.7269L19.1763 29.9131C18.6359 30.1833 18 29.7904 18 29.1863V18.8137C18 18.2096 18.6359 17.8167 19.1763 18.0869L29.5507 23.2731Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 14C8 11.7909 9.79089 10 12 10H36C38.2091 10 40 11.7909 40 14V34C40 36.2091 38.2091 38 36 38H12C9.79089 38 8 36.2091 8 34V14ZM12 12.6H36C36.7732 12.6 37.4 13.2268 37.4 14V34C37.4 34.7732 36.7732 35.4 36 35.4H12C11.2268 35.4 10.6 34.7732 10.6 34V14C10.6 13.2268 11.2268 12.6 12 12.6Z" fill="black"/>
    </svg>
  );
};
