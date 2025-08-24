import React from 'react';
import { IconProps } from './types';

export const Recordstop28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3333 23.6667C19.488 23.6667 23.6667 19.488 23.6667 14.3333C23.6667 9.17868 19.488 5 14.3333 5C9.17868 5 5 9.17868 5 14.3333C5 19.488 9.17868 23.6667 14.3333 23.6667ZM11.7083 10.8333C11.2251 10.8333 10.8333 11.2251 10.8333 11.7083V16.9583C10.8333 17.4416 11.2251 17.8333 11.7083 17.8333H16.9583C17.4416 17.8333 17.8333 17.4416 17.8333 16.9583V11.7083C17.8333 11.2251 17.4416 10.8333 16.9583 10.8333H11.7083Z" fill="black"/>
    </svg>
  );
};
