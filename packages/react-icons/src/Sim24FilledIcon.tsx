import React from 'react';
import { IconProps } from './types';

export const Sim24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 8.70711C17.8946 8.89464 18 9.149 18 9.41421V19C18 19.5523 17.5523 20 17 20H7C6.44772 20 6 19.5523 6 19V5C6 4.44772 6.44772 4 7 4H12.5858C12.851 4 13.1054 4.10536 13.2929 4.29289L17.7071 8.70711ZM11.35 17.65V10.35H10C9.08873 10.35 8.35 11.0887 8.35 12V16C8.35 16.9113 9.08873 17.65 10 17.65H11.35ZM12.65 14.65V17.65H14C14.9113 17.65 15.65 16.9113 15.65 16V14.65H12.65ZM15.65 13.35V12C15.65 11.0887 14.9113 10.35 14 10.35H12.65V13.35H15.65Z" fill="black"/>
    </svg>
  );
};
