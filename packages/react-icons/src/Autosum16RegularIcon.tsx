import React from 'react';
import { IconProps } from './types';

export const Autosum16RegularIcon: React.FC<IconProps> = ({ 
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
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.10065 3.56712C2.88404 3.35628 3.04015 3 3.34914 3H13.217C13.4672 3 13.67 3.19405 13.67 3.43342C13.67 3.67279 13.4672 3.86683 13.217 3.86683H5.09451C4.94001 3.86683 4.86196 4.04497 4.97026 4.15039L9.02931 8.10128C9.16258 8.231 9.16258 8.439 9.02931 8.56872L4.97026 12.5196C4.86196 12.625 4.94001 12.8032 5.09451 12.8032H13.217C13.4672 12.8032 13.67 12.9972 13.67 13.2366C13.67 13.476 13.4672 13.67 13.217 13.67H3.34914C3.04015 13.67 2.88404 13.3137 3.10065 13.1029L7.87899 8.45186C7.94563 8.387 7.94563 8.283 7.87899 8.21814L3.10065 3.56712Z" fill="black"/>
    </svg>
  );
};
