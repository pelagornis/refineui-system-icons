import React from 'react';
import { IconProps } from './types';

export const Rewind20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3177 14.1044C11.3177 14.7928 10.621 15.223 10.0638 14.8789L3.41798 10.7744C2.86069 10.4302 2.86069 9.56976 3.41798 9.22558L10.0638 5.12114C10.621 4.77695 11.3177 5.20718 11.3177 5.89556L11.3177 7.28952C11.3177 7.35836 11.3873 7.40138 11.4431 7.36696L15.0794 5.12114C15.6367 4.77695 16.3333 5.20718 16.3333 5.89556L16.3333 14.1044C16.3333 14.7928 15.6367 15.223 15.0794 14.8789L11.4431 12.633C11.3873 12.5986 11.3177 12.6416 11.3177 12.7105L11.3177 14.1044Z" fill="black"/>
    </svg>
  );
};
