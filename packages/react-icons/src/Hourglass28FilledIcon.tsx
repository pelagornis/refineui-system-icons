import React from 'react';
import { IconProps } from './types';

export const Hourglass28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M7.84499 5H20.4883C21.9713 5 22.8462 6.5803 22.0061 7.74143L17.9537 13.3419C17.5216 13.9391 17.5216 14.7276 17.9537 15.3248L22.0061 20.9252C22.8462 22.0864 21.9713 23.6667 20.4883 23.6667H7.84498C6.36199 23.6667 5.48709 22.0864 6.32725 20.9252L10.3796 15.3248C10.8117 14.7276 10.8117 13.9391 10.3796 13.3419L6.32725 7.74143C5.48709 6.5803 6.36199 5 7.84499 5Z" fill="black"/>
    </svg>
  );
};
