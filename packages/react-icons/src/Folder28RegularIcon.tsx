import React from 'react';
import { IconProps } from './types';

export const Folder28RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 8.73684C5 7.77761 5.79709 7 6.78035 7H11.1889C11.6611 7 12.1139 7.18299 12.4478 7.50871L14.5132 9.52367C14.5841 9.59276 14.6801 9.63158 14.7803 9.63158H21.8863C22.8696 9.63158 23.6667 10.4092 23.6667 11.3684V19.2632C23.6667 20.2224 22.8696 21 21.8863 21H6.78035C5.79709 21 5 20.2224 5 19.2632V8.73684ZM6.78035 8.36842C6.57178 8.36842 6.4027 8.53337 6.4027 8.73684V19.2632C6.4027 19.4666 6.57178 19.6316 6.78035 19.6316H21.8863C22.0949 19.6316 22.264 19.4666 22.264 19.2632V11.3684C22.264 11.1649 22.0949 11 21.8863 11H14.7803C14.3081 11 13.8553 10.817 13.5214 10.4913L11.4559 8.47633C11.3851 8.40724 11.2891 8.36842 11.1889 8.36842H6.78035Z" fill="black"/>
    </svg>
  );
};
