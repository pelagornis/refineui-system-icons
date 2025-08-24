import React from 'react';
import { IconProps } from './types';

export const Tag20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.86365 3.00001C3.38667 3.00001 3 3.38669 3 3.86367L3.00001 8.50844C3.00001 8.73749 3.091 8.95716 3.25297 9.11913L10.2109 16.077C10.5482 16.4143 11.095 16.4143 11.4323 16.077L16.077 11.4323C16.4143 11.095 16.4143 10.5481 16.077 10.2109L9.11914 3.25296C8.95717 3.09099 8.7375 3 8.50844 3L3.86365 3.00001ZM6.88644 8.18193C7.60192 8.18193 8.18193 7.60193 8.18193 6.88645C8.18193 6.17097 7.60192 5.59097 6.88644 5.59097C6.17097 5.59097 5.59096 6.17097 5.59096 6.88645C5.59096 7.60193 6.17097 8.18193 6.88644 8.18193Z" fill="black"/>
    </svg>
  );
};
