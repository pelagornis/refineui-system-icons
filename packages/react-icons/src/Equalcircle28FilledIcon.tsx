import React from 'react';
import { IconProps } from './types';

export const Equalcircle28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.6667 14.3333C23.6667 19.488 19.488 23.6667 14.3333 23.6667C9.17868 23.6667 5 19.488 5 14.3333C5 9.17868 9.17868 5 14.3333 5C19.488 5 23.6667 9.17868 23.6667 14.3333ZM9.49167 12.5833C9.49167 12.1645 9.83118 11.825 10.25 11.825H18.4167C18.8355 11.825 19.175 12.1645 19.175 12.5833C19.175 13.0021 18.8355 13.3417 18.4167 13.3417H10.25C9.83118 13.3417 9.49167 13.0021 9.49167 12.5833ZM10.25 15.325C9.83118 15.325 9.49167 15.6645 9.49167 16.0833C9.49167 16.5021 9.83118 16.8417 10.25 16.8417H18.4167C18.8355 16.8417 19.175 16.5021 19.175 16.0833C19.175 15.6645 18.8355 15.325 18.4167 15.325H10.25Z" fill="black"/>
    </svg>
  );
};
