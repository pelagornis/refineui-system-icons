import React from 'react';
import { IconProps } from './types';

export const Cursor32FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M5.07829 6.94515C4.69369 5.79137 5.79136 4.6937 6.94515 5.07829L25.3241 11.2046C26.6337 11.6411 26.6807 13.4761 25.3952 13.9792L18.3926 16.7193C17.6259 17.0193 17.0194 17.6259 16.7194 18.3925L13.9792 25.3952C13.4762 26.6807 11.6412 26.6337 11.2046 25.3241L5.07829 6.94515Z" fill="black"/>
    </svg>
  );
};
