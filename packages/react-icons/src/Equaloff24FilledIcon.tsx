import React from 'react';
import { IconProps } from './types';

export const Equaloff24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M4.99992 8H6L7.99939 9.99939H4.99992C4.44768 9.99939 4 9.55181 4 8.99969C4 8.44758 4.44768 8 4.99992 8Z" fill="black"/>
<path d="M10 8L11.9994 9.99939H19.0001C19.5523 9.99939 20 9.55181 20 8.99969C20 8.44758 19.5523 8 19.0001 8H10Z" fill="black"/>
<path d="M4.99992 14.0006H12.0006L14 16H4.99992C4.44768 16 4 15.5524 4 15.0003C4 14.4482 4.44768 14.0006 4.99992 14.0006Z" fill="black"/>
<path d="M16.0006 14.0006L18 16H19.0001C19.5523 16 20 15.5524 20 15.0003C20 14.4482 19.5523 14.0006 19.0001 14.0006H16.0006Z" fill="black"/>
    </svg>
  );
};
