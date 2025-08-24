import React from 'react';
import { IconProps } from './types';

export const Badge28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M21.1778 9.97867C22.5523 9.97867 23.6667 8.86415 23.6667 7.48933C23.6667 6.11451 22.5523 5 21.1778 5C19.8032 5 18.6889 6.11451 18.6889 7.48933C18.6889 8.86415 19.8032 9.97867 21.1778 9.97867Z" fill="black"/>
<path d="M21.1778 11.2233C21.6141 11.2233 22.033 11.1485 22.4222 11.0109V21.1807C22.4222 22.5555 21.3079 23.67 19.9333 23.67H7.48889C6.11433 23.67 5 22.5555 5 21.1807V8.734C5 7.35918 6.11433 6.24467 7.48889 6.24467H17.6569C17.5193 6.63397 17.4444 7.05291 17.4444 7.48933C17.4444 9.55157 19.1159 11.2233 21.1778 11.2233Z" fill="black"/>
    </svg>
  );
};
