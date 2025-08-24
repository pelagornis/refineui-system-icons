import React from 'react';
import { IconProps } from './types';

export const Chevronright24FilledIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.29282 5.70692C7.90239 5.31639 7.90239 4.68338 8.29282 4.29285C8.68326 3.90241 9.31614 3.90236 9.70654 4.29285L16.5379 11.1259C17.0207 11.6092 17.0207 12.3925 16.5379 12.8759L9.70654 19.7089L9.63039 19.7772C9.23771 20.0976 8.65885 20.075 8.29282 19.7089C7.92679 19.3428 7.90421 18.7638 8.22448 18.371L8.29282 18.2948L14.5852 12.0009L8.29282 5.70692Z" fill="black"/>
    </svg>
  );
};
