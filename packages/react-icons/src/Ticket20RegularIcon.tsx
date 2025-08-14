import React from 'react';
import { IconProps } from './types';

export const Ticket20RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.33 6.83312C16.33 6.373 15.957 6 15.4969 6H3.83312C3.373 6 3 6.373 3 6.83313V8.49937C3.92024 8.49937 4.66625 9.24538 4.66625 10.1656C4.66625 11.0859 3.92024 11.8319 3 11.8319V13.4981C3 13.9582 3.373 14.3313 3.83312 14.3313H15.4969C15.957 14.3313 16.33 13.9582 16.33 13.4981V11.8319C15.4098 11.8319 14.6637 11.0859 14.6637 10.1656C14.6637 9.24538 15.4098 8.49937 16.33 8.49937V6.83312ZM4.08306 7.08306V7.63787C5.06296 8.05827 5.74931 9.03179 5.74931 10.1656C5.74931 11.2995 5.06296 12.273 4.08306 12.6934V13.2482H15.2469V12.6934C14.267 12.273 13.5807 11.2995 13.5807 10.1656C13.5807 9.03179 14.267 8.05827 15.2469 7.63787V7.08306H4.08306Z" fill="black"/>
    </svg>
  );
};
