import React from 'react';
import { IconProps } from './types';

export const Location48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M38 22.1329C38 28.9164 31.9575 33.8212 26.4369 38.3025C25.8307 38.7946 25.2307 39.2816 24.6458 39.7654C24.2711 40.0753 23.7289 40.0753 23.3542 39.7654C22.7694 39.2816 22.1695 38.7947 21.5633 38.3027C16.0427 33.8214 10 28.9164 10 22.1329C10 14.3275 16.268 8 24 8C31.732 8 38 14.3275 38 22.1329ZM18.7 22.1329C18.7 19.1964 21.0613 16.7949 24 16.7949C26.9387 16.7949 29.3 19.1964 29.3 22.1329C29.3 25.0694 26.9387 27.4709 24 27.4709C21.0613 27.4709 18.7 25.0694 18.7 22.1329Z" fill="black"/>
    </svg>
  );
};
