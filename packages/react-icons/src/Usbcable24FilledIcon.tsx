import React from 'react';
import { IconProps } from './types';

export const Usbcable24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M9.65039 8.63965H14.3496V8.65039H15C15.7456 8.65039 16.3496 9.25442 16.3496 10V15C16.3496 15.7456 15.7456 16.3496 15 16.3496H9C8.25442 16.3496 7.65039 15.7456 7.65039 15V10C7.65039 9.25442 8.25442 8.65039 9 8.65039H9.65039V8.63965Z" fill="black" stroke="black" stroke-width="1.3"/>
    </svg>
  );
};
