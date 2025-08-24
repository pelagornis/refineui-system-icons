import React from 'react';
import { IconProps } from './types';

export const Flash20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.41725 3.45422C6.53548 3.17865 6.80652 3 7.10639 3H12.1713C12.6832 3 13.0446 3.50163 12.8826 3.98725L11.9448 6.79758H14.9139C15.5822 6.79758 15.9167 7.60571 15.4439 8.07799L7.40552 16.1078C6.88399 16.6287 6.00255 16.1634 6.13854 15.4389L7.16121 9.99051H4.75069C4.21222 9.99051 3.84925 9.43982 4.06156 8.94497L6.41725 3.45422Z" fill="black"/>
    </svg>
  );
};
