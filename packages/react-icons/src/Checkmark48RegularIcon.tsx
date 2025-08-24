import React from 'react';
import { IconProps } from './types';

export const Checkmark48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M39.6479 13.3524C40.1174 13.8222 40.1174 14.584 39.6479 15.0539L20.609 34.1055C19.4171 35.2982 17.4847 35.2982 16.2928 34.1055L8.35215 26.1596C7.88262 25.6897 7.88262 24.9279 8.35215 24.4581C8.82168 23.9882 9.58294 23.9882 10.0525 24.4581L17.9931 32.404C18.2459 32.657 18.6558 32.657 18.9086 32.404L37.9475 13.3524C38.4171 12.8825 39.1783 12.8825 39.6479 13.3524Z" fill="black"/>
    </svg>
  );
};
