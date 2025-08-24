import React from 'react';
import { IconProps } from './types';

export const Playcircle48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 40C32.8365 40 40 32.8365 40 24C40 15.1635 32.8365 8 24 8C15.1635 8 8 15.1635 8 24C8 32.8365 15.1635 40 24 40ZM19.1763 18.0869L29.5507 23.2731C30.1498 23.5726 30.1498 24.4274 29.5507 24.7269L19.1763 29.9131C18.6359 30.1833 18 29.7904 18 29.1863V18.8137C18 18.2096 18.6359 17.8167 19.1763 18.0869Z" fill="black"/>
    </svg>
  );
};
