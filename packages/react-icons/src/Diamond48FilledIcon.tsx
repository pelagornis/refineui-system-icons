import React from 'react';
import { IconProps } from './types';

export const Diamond48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M20.8448 9.30691C22.5874 7.56436 25.4126 7.56437 27.1552 9.30691L38.6931 20.8448C40.4356 22.5874 40.4356 25.4126 38.6931 27.1552L27.1552 38.6931C25.4126 40.4356 22.5874 40.4356 20.8448 38.6931L9.30691 27.1552C7.56436 25.4126 7.56437 22.5874 9.30691 20.8448L20.8448 9.30691Z" fill="black"/>
    </svg>
  );
};
