import React from 'react';
import { IconProps } from './types';

export const Subtract48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M8 24.3C8 23.582 8.53829 23 9.20231 23H38.7977C39.4617 23 40 23.582 40 24.3C40 25.018 39.4617 25.6 38.7977 25.6H9.20231C8.53829 25.6 8 25.018 8 24.3Z" fill="black"/>
    </svg>
  );
};
