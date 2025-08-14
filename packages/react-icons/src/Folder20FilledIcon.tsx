import React from 'react';
import { IconProps } from './types';

export const Folder20FilledIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 14.1667V5.83333C3 5.3731 3.3731 5 3.83333 5H7.23816C7.45917 5 7.67113 5.0878 7.82741 5.24408L9.42259 6.83926C9.57887 6.99554 9.79083 7.08333 10.0118 7.08333H15.5C15.9602 7.08333 16.3333 7.45643 16.3333 7.91667V14.1667C16.3333 14.6269 15.9602 15 15.5 15H3.83333C3.3731 15 3 14.6269 3 14.1667Z" fill="black"/>
    </svg>
  );
};
