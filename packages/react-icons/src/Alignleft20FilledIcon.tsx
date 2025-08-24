import React from 'react';
import { IconProps } from './types';

export const Alignleft20FilledIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.54172 3C3.8409 3 4.08343 3.24253 4.08343 3.54172V15.7888C4.08343 16.088 3.8409 16.3305 3.54172 16.3305C3.24253 16.3305 3 16.088 3 15.7888V3.54172C3 3.24253 3.24253 3 3.54172 3Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.53177 4.41652C5.61121 4.41652 4.86495 5.16278 4.86495 6.08334V7.56106C4.86495 8.48162 5.61121 9.22788 6.53177 9.22788H14.6665C15.5871 9.22788 16.3333 8.48162 16.3333 7.56106V6.08334C16.3333 5.16278 15.5871 4.41652 14.6665 4.41652H6.53177Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.86495 11.7695C4.86495 10.8489 5.61121 10.1027 6.53177 10.1027H12.02C12.9405 10.1027 13.6868 10.8489 13.6868 11.7695V13.2472C13.6868 14.1678 12.9405 14.914 12.02 14.914H6.53177C5.61121 14.914 4.86495 14.1678 4.86495 13.2472V11.7695Z" fill="black"/>
    </svg>
  );
};
