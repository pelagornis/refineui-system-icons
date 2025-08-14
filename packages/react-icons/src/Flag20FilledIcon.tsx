import React from 'react';
import { IconProps } from './types';

export const Flag20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.08359 13.4806C4.08359 13.2506 4.27018 13.0641 4.50035 13.0641H14.9103C16.003 13.0641 16.7815 11.8439 16.0435 10.8939L13.9356 8.18024C13.8649 8.08932 13.8649 7.97479 13.9356 7.88387L16.0435 5.1702C16.7815 4.2202 16.003 3 14.9103 3H4.41386C3.66686 3 3 3.57522 3 4.35794V15.7885C3 16.0876 3.24257 16.33 3.54179 16.33C3.84102 16.33 4.08359 16.0876 4.08359 15.7885V13.4806Z" fill="black"/>
    </svg>
  );
};
