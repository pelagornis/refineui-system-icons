import React from 'react';
import { IconProps } from './types';

export const Textboxaligntopright32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.66625 5C6.19372 5 5 6.19372 5 7.66625V23.6637C5 25.1363 6.19372 26.33 7.66625 26.33H23.6637C25.1363 26.33 26.33 25.1363 26.33 23.6637V7.66625C26.33 6.19372 25.1363 5 23.6637 5H7.66625ZM12.4655 15.3317C12.4655 14.8531 12.8535 14.4652 13.332 14.4652H21.3308C21.8094 14.4652 22.1973 14.8531 22.1973 15.3317C22.1973 15.8103 21.8094 16.1982 21.3308 16.1982H13.332C12.8535 16.1982 12.4655 15.8103 12.4655 15.3317ZM9.13269 10.6658C9.13269 10.1872 9.52065 9.79925 9.99922 9.79925H21.3308C21.8094 9.79925 22.1973 10.1872 22.1973 10.6658C22.1973 11.1444 21.8094 11.5323 21.3308 11.5323H9.99922C9.52065 11.5323 9.13269 11.1444 9.13269 10.6658Z" fill="black"/>
    </svg>
  );
};
