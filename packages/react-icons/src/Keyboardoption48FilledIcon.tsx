import React from 'react';
import { IconProps } from './types';

export const Keyboardoption48FilledIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99984 14C8.89536 14 8 14.8953 8 15.9998C8 17.1043 8.89536 17.9996 9.99984 17.9996H18.2338C18.6166 17.9996 18.9658 18.2181 19.1331 18.5624L26.0903 32.8745C26.425 33.563 27.1234 34 27.8889 34H38.0002C39.1046 34 40 33.1047 40 32.0002C40 30.8958 39.1046 30.0004 38.0002 30.0004H29.7662C29.3834 30.0004 29.0342 29.7819 28.8669 29.4376L21.9097 15.1255C21.575 14.437 20.8766 14 20.1111 14H9.99984Z" fill="black"/>
<path d="M26.8 14C25.6955 14 24.8002 14.8953 24.8002 15.9998C24.8002 17.1043 25.6955 17.9996 26.8 17.9996H38.0001C39.1046 17.9996 40 17.1043 40 15.9998C40 14.8953 39.1046 14 38.0001 14H26.8Z" fill="black"/>
    </svg>
  );
};
