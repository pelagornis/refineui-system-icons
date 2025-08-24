import React from 'react';
import { IconProps } from './types';

export const Comma24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 9.01257C7 6.2442 9.23567 4 11.9935 4C14.7435 4 16.9743 6.23149 16.987 8.98902C17.0721 10.9405 16.7592 13.6439 15.469 15.9023C14.2562 18.0252 12.1985 19.7074 8.99644 19.9963C8.44708 20.0459 7.9987 19.5914 7.9987 19.0377C7.9987 18.484 8.44798 18.0428 8.99614 17.9813C11.4009 17.7115 12.8485 16.4588 13.7363 14.9049C14.0075 14.4301 14.2277 13.9236 14.4038 13.4036C13.6892 13.7997 12.8676 14.0251 11.9935 14.0251C9.23567 14.0251 7 11.7809 7 9.01257Z" fill="black"/>
    </svg>
  );
};
