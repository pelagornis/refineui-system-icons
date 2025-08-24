import React from 'react';
import { IconProps } from './types';

export const Pulse48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M20.0938 20.6071L18.6203 23.8498C18.1336 24.9209 17.0658 25.6086 15.8893 25.6086H9.99984C8.89536 25.6086 8 24.7132 8 23.6087C8 22.5042 8.89536 21.6089 9.99984 21.6089H15.2453L17.4492 16.7589C18.5539 14.3275 22.0461 14.4433 22.9874 16.9424L26.8765 27.2675L28.4282 23.4732C28.8894 22.3456 29.9866 21.6089 31.2048 21.6089H38.0002C39.1046 21.6089 40 22.5042 40 23.6087C40 24.7132 39.1046 25.6086 38.0002 25.6086H31.8762L29.6148 31.1382C28.5829 33.6616 24.9921 33.6114 24.0311 31.0601L20.0938 20.6071Z" fill="black"/>
    </svg>
  );
};
