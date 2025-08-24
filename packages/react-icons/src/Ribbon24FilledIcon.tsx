import React from 'react';
import { IconProps } from './types';

export const Ribbon24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M12 16.0588C15.3137 16.0588 18 13.3594 18 10.0294C18 6.69947 15.3137 4 12 4C8.68628 4 6 6.69947 6 10.0294C6 13.3594 8.68628 16.0588 12 16.0588Z" fill="black"/>
<path d="M8.71259 16.0664C8.54379 15.9908 8.34998 16.1122 8.34998 16.2971V19.0941C8.34998 19.8164 9.15112 20.2473 9.74921 19.8466L12 18.3387L14.2507 19.8466C14.8489 20.2473 15.65 19.8164 15.65 19.0941V16.3292C15.65 16.1368 15.4398 16.0132 15.2654 16.0946C14.495 16.4539 13.2614 16.8398 12 16.8398C10.7056 16.8398 9.53185 16.4335 8.71259 16.0664Z" fill="black"/>
    </svg>
  );
};
