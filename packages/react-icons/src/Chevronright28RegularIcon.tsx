import React from 'react';
import { IconProps } from './types';

export const Chevronright28RegularIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.13515 6.19056C8.93391 5.90097 8.95645 5.49982 9.20922 5.23459C9.4982 4.93165 9.9784 4.92085 10.2816 5.20952L19.0588 13.5751C19.4654 13.9629 19.491 14.5958 19.1352 15.0142L19.0588 15.0951L10.2816 23.4606L10.1608 23.5552C9.86183 23.7424 9.46212 23.6996 9.20922 23.4344C8.95694 23.1692 8.93416 22.769 9.13515 22.4796L9.23543 22.3622L17.6571 14.3351L9.23543 6.30678L9.13515 6.19056Z" fill="black"/>
    </svg>
  );
};
