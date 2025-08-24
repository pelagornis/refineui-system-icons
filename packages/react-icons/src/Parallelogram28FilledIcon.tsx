import React from 'react';
import { IconProps } from './types';

export const Parallelogram28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.91792 8.06883C10.2113 7.4216 10.8991 7 11.6618 7H21.7755C23.1236 7 24.0379 8.26082 23.5194 9.40486L18.7487 19.9312C18.4554 20.5784 17.7676 21 17.0049 21H6.89114C5.54306 21 4.6288 19.7392 5.14728 18.5951L9.91792 8.06883Z" fill="black"/>
    </svg>
  );
};
