import React from 'react';
import { IconProps } from './types';

export const Wifi428RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M14.2769 20.7461C15.0362 20.7461 15.6519 20.1305 15.6519 19.3711C15.6519 18.6117 15.0362 17.9961 14.2769 17.9961C13.5175 17.9961 12.9019 18.6117 12.9019 19.3711C12.9019 20.1305 13.5175 20.7461 14.2769 20.7461Z" fill="black"/>
    </svg>
  );
};
