import React from 'react';
import { IconProps } from './types';

export const Textboxaligntopleft32FilledIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.66625 5C6.19372 5 5 6.19372 5 7.66625V23.6637C5 25.1363 6.19372 26.33 7.66625 26.33H23.6637C25.1363 26.33 26.33 25.1363 26.33 23.6637V7.66625C26.33 6.19372 25.1363 5 23.6637 5H7.66625ZM9.13269 15.3317C9.13269 14.8531 9.52065 14.4652 9.99922 14.4652H17.998C18.4765 14.4652 18.8645 14.8531 18.8645 15.3317C18.8645 15.8103 18.4765 16.1982 17.998 16.1982H9.99922C9.52065 16.1982 9.13269 15.8103 9.13269 15.3317ZM9.13269 10.6658C9.13269 10.1872 9.52065 9.79925 9.99922 9.79925H21.3308C21.8094 9.79925 22.1973 10.1872 22.1973 10.6658C22.1973 11.1444 21.8094 11.5323 21.3308 11.5323H9.99922C9.52065 11.5323 9.13269 11.1444 9.13269 10.6658Z" fill="black"/>
    </svg>
  );
};
