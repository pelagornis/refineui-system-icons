import React from 'react';
import { IconProps } from './types';

export const Keyboardoption24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M4.99992 7C4.44768 7 4 7.44767 4 7.9999C4 8.55213 4.44768 8.99979 4.99992 8.99979H9.11692C9.30831 8.99979 9.4829 9.10905 9.56657 9.28118L13.0452 16.4372C13.2125 16.7815 13.5617 17 13.9445 17H19.0001C19.5523 17 20 16.5523 20 16.0001C20 15.4479 19.5523 15.0002 19.0001 15.0002H14.8831C14.6917 15.0002 14.5171 14.8909 14.4334 14.7188L10.9548 7.56276C10.7875 7.21851 10.4383 7 10.0555 7H4.99992Z" fill="black"/>
<path d="M13.4 7C12.8478 7 12.4001 7.44767 12.4001 7.9999C12.4001 8.55213 12.8478 8.99979 13.4 8.99979H19.0001C19.5523 8.99979 20 8.55213 20 7.9999C20 7.44767 19.5523 7 19.0001 7H13.4Z" fill="black"/>
    </svg>
  );
};
