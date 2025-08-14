import React from 'react';
import { IconProps } from './types';

export const Equaloff24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M4.10962 3.19038C3.85578 2.93654 3.44422 2.93654 3.19038 3.19038C2.93654 3.44422 2.93654 3.85578 3.19038 4.10962L19.8908 20.8101C20.1447 21.0639 20.5562 21.0639 20.8101 20.8101C21.0639 20.5562 21.0639 20.1447 20.8101 19.8908L4.10962 3.19038Z" fill="black"/>
<path d="M4.6502 8H6L7.2998 9.2998H4.6502C4.2911 9.2998 4 9.00883 4 8.6499C4 8.29097 4.2911 8 4.6502 8Z" fill="black"/>
<path d="M10 8L11.2998 9.2998H19.3498C19.7089 9.2998 20 9.00883 20 8.6499C20 8.29097 19.7089 8 19.3498 8H10Z" fill="black"/>
<path d="M4.6502 14.7002H12.7002L14 16H4.6502C4.2911 16 4 15.709 4 15.3501C4 14.9912 4.2911 14.7002 4.6502 14.7002Z" fill="black"/>
<path d="M16.7002 14.7002L18 16H19.3498C19.7089 16 20 15.709 20 15.3501C20 14.9912 19.7089 14.7002 19.3498 14.7002H16.7002Z" fill="black"/>
    </svg>
  );
};
