import React from 'react';
import { IconProps } from './types';

export const Textalignright16FilledIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.66667 5.7C5.66667 5.3134 5.96514 5 6.33333 5H12.3333C12.7015 5 13 5.3134 13 5.7C13 6.0866 12.7015 6.4 12.3333 6.4H6.33333C5.96514 6.4 5.66667 6.0866 5.66667 5.7Z" fill="black"/>
<path d="M3 8.5C3 8.1134 3.29848 7.8 3.66667 7.8H12.3333C12.7015 7.8 13 8.1134 13 8.5C13 8.8866 12.7015 9.2 12.3333 9.2H3.66667C3.29848 9.2 3 8.8866 3 8.5Z" fill="black"/>
<path d="M9 10.6C8.63181 10.6 8.33333 10.9134 8.33333 11.3C8.33333 11.6866 8.63181 12 9 12H12.3333C12.7015 12 13 11.6866 13 11.3C13 10.9134 12.7015 10.6 12.3333 10.6H9Z" fill="black"/>
    </svg>
  );
};
