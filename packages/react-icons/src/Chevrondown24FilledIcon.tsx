import React from 'react';
import { IconProps } from './types';

export const Chevrondown24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M18.2947 8.29282C18.6852 7.90239 19.3182 7.90239 19.7087 8.29282C20.0992 8.68326 20.0992 9.31614 19.7087 9.70654L12.8757 16.5379C12.3924 17.0207 11.6092 17.0207 11.1257 16.5379L4.29273 9.70654L4.22437 9.63039C3.90402 9.23771 3.92662 8.65885 4.29273 8.29282C4.65885 7.92679 5.23785 7.90421 5.63062 8.22448L5.70679 8.29282L12.0007 14.5852L18.2947 8.29282Z" fill="black"/>
    </svg>
  );
};
