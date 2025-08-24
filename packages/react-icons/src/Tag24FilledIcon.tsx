import React from 'react';
import { IconProps } from './types';

export const Tag24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.03664 4.00001C4.46412 4.00001 4 4.46414 4 5.03666L4.00001 10.6118C4.00001 10.8867 4.10923 11.1504 4.30364 11.3448L12.6552 19.6964C13.06 20.1012 13.7164 20.1012 14.1212 19.6964L19.6964 14.1212C20.1012 13.7164 20.1012 13.06 19.6964 12.6552L11.3448 4.30363C11.1504 4.10922 10.8867 4 10.6118 4L5.03664 4.00001ZM8.6649 10.2199C9.52368 10.2199 10.2199 9.52369 10.2199 8.66491C10.2199 7.80612 9.52368 7.10994 8.6649 7.10994C7.80611 7.10994 7.10993 7.80612 7.10993 8.66491C7.10993 9.52369 7.80611 10.2199 8.6649 10.2199Z" fill="black"/>
    </svg>
  );
};
