import React from 'react';
import { IconProps } from './types';

export const Cursor16FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M3.03914 3.97288C2.84685 3.39581 3.39568 2.8468 3.97257 3.03916L13.1621 6.10327C13.8168 6.3216 13.8404 7.2394 13.1976 7.49098L9.69628 8.8615C9.31295 9.01155 9.00968 9.31491 8.85968 9.69836L7.48959 13.2008C7.23809 13.8437 6.32058 13.8202 6.10232 13.1652L3.03914 3.97288Z" fill="black"/>
    </svg>
  );
};
