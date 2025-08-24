import React from 'react';
import { IconProps } from './types';

export const Shield32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.3333 26.3333L16.4425 26.3134C18.3141 25.9719 20.6003 24.6096 22.4105 22.7363C24.2218 20.8618 25.6667 18.3605 25.6667 15.6693V8.77809C25.6667 8.40987 25.3817 8.11137 25.0302 8.11137C23.3414 8.11137 21.5492 7.58981 20.0129 6.94071C18.4779 6.29215 17.2514 5.53906 16.7061 5.12631C16.4836 4.9579 16.1831 4.9579 15.9606 5.12631C15.4152 5.53911 14.1892 6.29219 12.6545 6.94072C11.1185 7.5898 9.32627 8.11137 7.63643 8.11137C7.28494 8.11137 7 8.40987 7 8.77809V15.6693C7 18.3605 8.44482 20.8618 10.2561 22.7363C12.0664 24.6096 14.3525 25.9719 16.2241 26.3134L16.3333 26.3333Z" fill="black"/>
    </svg>
  );
};
