import React from 'react';
import { IconProps } from './types';

export const Rewind48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.9624 33.8507C27.9624 35.5028 26.2905 36.5353 24.953 35.7093L9.00314 25.8586C7.66562 25.0326 7.66562 22.9674 9.00313 22.1414L24.953 12.2907C26.2905 11.4647 27.9624 12.4972 27.9624 14.1493L27.9624 17.4949C27.9624 17.6601 28.1296 17.7633 28.2633 17.6807L36.9906 12.2907C38.3281 11.4647 40 12.4972 40 14.1493L40 33.8507C40 35.5028 38.3281 36.5353 36.9906 35.7093L28.2633 30.3193C28.1296 30.2367 27.9624 30.3399 27.9624 30.5051L27.9624 33.8507Z" fill="black"/>
    </svg>
  );
};
