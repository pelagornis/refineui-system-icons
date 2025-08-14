import React from 'react';
import { IconProps } from './types';

export const Lightbulb28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M7 12C7 14.2444 8.05632 16.2422 9.69893 17.5232C9.88706 17.6699 10.1563 18.3516 10.4545 19.2111C10.4954 19.3289 10.6062 19.4083 10.7309 19.4083H17.2691C17.3938 19.4083 17.5046 19.3289 17.5455 19.2111C17.8437 18.3516 18.1129 17.6699 18.3011 17.5232C19.9437 16.2422 21 14.2444 21 12C21 8.13401 17.866 5 14 5C10.134 5 7 8.13401 7 12Z" fill="black"/>
<path d="M15.75 23.6667C16.0057 23.6667 16.4144 22.5744 16.8424 21.3087C16.9062 21.1201 16.7655 20.925 16.5665 20.925H11.4335C11.2345 20.925 11.0938 21.1201 11.1576 21.3087C11.5856 22.5744 11.9943 23.6667 12.25 23.6667H15.75Z" fill="black"/>
    </svg>
  );
};
