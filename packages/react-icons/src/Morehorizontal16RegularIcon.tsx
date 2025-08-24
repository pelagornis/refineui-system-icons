import React from 'react';
import { IconProps } from './types';

export const Morehorizontal16RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M4.16667 7C4.81098 7 5.3333 7.52233 5.33333 8.16667C5.33333 8.81103 4.811 9.33333 4.16667 9.33333C3.52233 9.33333 3 8.81103 3 8.16667C3.00003 7.52233 3.52235 7 4.16667 7Z" fill="black"/>
<path d="M8.16667 7C8.81098 7 9.3333 7.52233 9.33333 8.16667C9.33333 8.81103 8.811 9.33333 8.16667 9.33333C7.52233 9.33333 7 8.81103 7 8.16667C7.00003 7.52233 7.52235 7 8.16667 7Z" fill="black"/>
<path d="M12.1667 7C12.811 7 13.3333 7.52233 13.3333 8.16667C13.3333 8.81103 12.811 9.33333 12.1667 9.33333C11.5223 9.33333 11 8.81103 11 8.16667C11 7.52233 11.5224 7 12.1667 7Z" fill="black"/>
    </svg>
  );
};
