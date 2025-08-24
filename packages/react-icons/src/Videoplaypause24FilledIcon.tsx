import React from 'react';
import { IconProps } from './types';

export const Videoplaypause24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.8409 7.9C11.8409 7.40295 12.2439 7 12.7409 7H14.6913C15.1883 7 15.5913 7.40294 15.5913 7.9V16.1049C15.5913 16.602 15.1883 17.0049 14.6913 17.0049H12.7409C12.2439 17.0049 11.8409 16.602 11.8409 16.1049V12.4233C11.7713 12.5556 11.6664 12.6736 11.5263 12.7624L5.38212 16.6602C4.78291 17.0403 4 16.6099 4 15.9002L4 8.10466C4 7.39505 4.78291 6.96455 5.38212 7.34468L11.5263 11.2425C11.6664 11.3314 11.7713 11.4493 11.8409 11.5817V7.9Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.1515 7C16.6545 7 16.2515 7.40295 16.2515 7.9V16.1049C16.2515 16.602 16.6545 17.0049 17.1515 17.0049H19.1018C19.5989 17.0049 20.0018 16.602 20.0018 16.1049V7.9C20.0018 7.40294 19.5989 7 19.1018 7H17.1515Z" fill="black"/>
    </svg>
  );
};
