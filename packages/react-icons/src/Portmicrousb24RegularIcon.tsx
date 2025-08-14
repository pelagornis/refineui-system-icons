import React from 'react';
import { IconProps } from './types';

export const Portmicrousb24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.63506 9.35854C7.83559 9.13254 8.12373 9 8.43003 9H15.5718C15.8781 9 16.1663 9.13254 16.3668 9.35854L18.5118 11.7761C19.5939 12.9956 18.7782 15.0029 17.0993 15.0029H6.9025C5.22367 15.0029 4.40797 12.9956 5.49002 11.7761L7.63506 9.35854ZM8.98729 10.3C8.70134 10.3 8.42907 10.4224 8.23928 10.6363L6.46243 12.6389C6.0824 13.0672 6.40779 13.7029 6.9025 13.7029H17.0993C17.5941 13.7029 17.9194 13.0672 17.5394 12.6389L15.7626 10.6363C15.5728 10.4224 15.3005 10.3 15.0146 10.3H8.98729Z" fill="black"/>
    </svg>
  );
};
