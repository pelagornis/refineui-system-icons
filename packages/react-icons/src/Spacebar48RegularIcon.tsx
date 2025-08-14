import React from 'react';
import { IconProps } from './types';

export const Spacebar48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M9.30006 20C10.0181 20 10.6001 20.5816 10.6001 21.299V24.9023C10.6001 25.1783 10.824 25.402 11.1002 25.402H36.8999C37.176 25.402 37.3999 25.1783 37.3999 24.9023V21.299C37.3999 20.5816 37.9819 20 38.6999 20C39.4179 20 40 20.5816 40 21.299V25.7017C40 26.971 38.9702 28 37.6999 28H10.3001C9.0298 28 8 26.971 8 25.7017V21.299C8 20.5816 8.58206 20 9.30006 20Z" fill="black"/>
    </svg>
  );
};
