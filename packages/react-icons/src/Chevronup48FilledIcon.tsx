import React from 'react';
import { IconProps } from './types';

export const Chevronup48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M11.4135 32.4078C10.6325 33.1974 9.36662 33.1974 8.58565 32.4078C7.80483 31.6181 7.80473 30.3382 8.58565 29.5486L22.2503 15.7324C23.217 14.7558 24.7832 14.7559 25.75 15.7324L39.4146 29.5486L39.5513 29.7026C40.1919 30.4968 40.1467 31.6675 39.4146 32.4078C38.6824 33.1481 37.5246 33.1937 36.7391 32.546L36.5868 32.4078L24.0001 19.6815L11.4135 32.4078Z" fill="black"/>
    </svg>
  );
};
