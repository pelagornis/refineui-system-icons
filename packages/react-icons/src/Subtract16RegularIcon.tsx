import React from 'react';
import { IconProps } from './types';

export const Subtract16RegularIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 6.325C2 6.14551 2.13457 6 2.30058 6H9.69942C9.86543 6 10 6.14551 10 6.325C10 6.50449 9.86543 6.65 9.69942 6.65H2.30058C2.13457 6.65 2 6.50449 2 6.325Z" fill="black"/>
    </svg>
  );
};
