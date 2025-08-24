import React from 'react';
import { IconProps } from './types';

export const Lockclosed28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.74167 10.2132V9.09209C9.74167 6.83209 11.6482 5 14 5C16.3518 5 18.2583 6.83209 18.2583 9.09209V10.2132H18.6667C19.9553 10.2132 21 11.2171 21 12.4555V21.4244C21 22.6628 19.9553 23.6667 18.6667 23.6667H9.33333C8.04467 23.6667 7 22.6628 7 21.4244V12.4555C7 11.2171 8.04467 10.2132 9.33333 10.2132H9.74167ZM11.2583 9.09209C11.2583 7.63702 12.4858 6.45746 14 6.45746C15.5142 6.45746 16.7417 7.63702 16.7417 9.09209V10.2132H11.2583V9.09209ZM15.1667 16.9399C15.1667 17.5591 14.6443 18.0611 14 18.0611C13.3557 18.0611 12.8333 17.5591 12.8333 16.9399C12.8333 16.3208 13.3557 15.8188 14 15.8188C14.6443 15.8188 15.1667 16.3208 15.1667 16.9399Z" fill="black"/>
    </svg>
  );
};
