import React from 'react';
import { IconProps } from './types';

export const Hexagon24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.40055 5.76359C7.70349 5.28797 8.22833 5 8.79223 5H15.2067C15.7706 5 16.2955 5.28797 16.5984 5.76359L19.7406 10.6969C20.065 11.2063 20.0853 11.8521 19.7935 12.3807L16.6097 18.1483C16.3193 18.6743 15.766 19.0009 15.1652 19.0009H8.83378C8.23295 19.0009 7.67961 18.6743 7.38925 18.1483L4.20547 12.3807C3.91365 11.8521 3.93392 11.2063 4.25832 10.6969L7.40055 5.76359Z" fill="black"/>
    </svg>
  );
};
