import React from 'react';
import { IconProps } from './types';

export const Keyboardshiftuppercase32FilledIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5225 5.50568C15.1344 4.83144 16.1989 4.83144 16.8109 5.50568L25.7581 15.3642C27.0576 16.7961 26.0036 19.0289 24.1115 19.0289H21.2523V20.8048C21.2523 22.0292 20.249 23.0007 19.0374 23.0007H12.296C11.0843 23.0007 10.081 22.0292 10.081 20.8048V19.0289H7.22185C5.3297 19.0289 4.27575 16.7961 5.57527 15.3642L14.5225 5.50568Z" fill="black"/>
<path d="M11.0003 24.6008C10.5216 24.6008 10.1336 24.9888 10.1336 25.4675C10.1336 25.9462 10.5216 26.3342 11.0003 26.3342H20.334C20.8126 26.3342 21.2007 25.9462 21.2007 25.4675C21.2007 24.9888 20.8126 24.6008 20.334 24.6008H11.0003Z" fill="black"/>
    </svg>
  );
};
