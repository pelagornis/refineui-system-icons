import React from 'react';
import { IconProps } from './types';

export const Heart28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.4655 7.7098C20.5389 5.4367 17.1173 5.42889 15.181 7.69353L14.3333 8.68509L13.4855 7.69357C11.5493 5.42892 8.12765 5.43674 6.20109 7.70989C4.5279 9.68408 4.61183 12.6592 6.39666 14.5291L13.5082 21.9794C13.9587 22.4513 14.7079 22.4513 15.1584 21.9794L22.27 14.5292C24.0549 12.6593 24.1388 9.68402 22.4655 7.7098Z" fill="black"/>
    </svg>
  );
};
