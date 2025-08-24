import React from 'react';
import { IconProps } from './types';

export const Bookmark28RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 7.41899C21 6.08302 19.9553 5 18.6667 5H9.33333C8.04467 5 7 6.08302 7 7.41899V23.0608C7 23.5735 7.57683 23.8536 7.95677 23.5253L13.6266 18.6271C13.8429 18.4402 14.1571 18.4402 14.3734 18.6271L20.0432 23.5253C20.4232 23.8536 21 23.5735 21 23.0608V7.41899ZM18.6667 6.57234H9.33333C8.8823 6.57234 8.51667 6.9514 8.51667 7.41899V20.3493C8.51667 20.6057 8.80508 20.7457 8.99505 20.5816L12.6556 17.4192C13.4344 16.7464 14.5656 16.7464 15.3444 17.4192L19.0049 20.5816C19.1949 20.7457 19.4833 20.6057 19.4833 20.3493V7.41899C19.4833 6.9514 19.1177 6.57234 18.6667 6.57234Z" fill="black"/>
    </svg>
  );
};
