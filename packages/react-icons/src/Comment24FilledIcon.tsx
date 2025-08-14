import React from 'react';
import { IconProps } from './types';

export const Comment24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 19.4804C7 19.9153 7.48496 20.157 7.81235 19.8854L11.9726 16.433C11.9903 16.4183 12.0124 16.4103 12.0351 16.4103H18C19.1046 16.4103 20 15.4815 20 14.3357V7.0746C20 5.92883 19.1046 5 18 5H6C4.89543 5 4 5.92883 4 7.0746V14.3357C4 15.4815 4.89543 16.4103 6 16.4103H6.9C6.95523 16.4103 7 16.4567 7 16.514V19.4804Z" fill="black"/>
    </svg>
  );
};
