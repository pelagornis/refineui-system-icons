import React from 'react';
import { IconProps } from './types';

export const Rewind24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.9812 16.9253C13.9812 17.7514 13.1452 18.2677 12.4765 17.8546L4.50157 12.9293C3.83281 12.5163 3.83281 11.4837 4.50157 11.0707L12.4765 6.14536C13.1452 5.73234 13.9812 6.24862 13.9812 7.07467L13.9812 8.74742C13.9812 8.83003 14.0648 8.88166 14.1317 8.84036L18.4953 6.14536C19.1641 5.73234 20 6.24862 20 7.07467L20 16.9253C20 17.7514 19.1641 18.2677 18.4953 17.8546L14.1317 15.1596C14.0648 15.1183 13.9812 15.17 13.9812 15.2526L13.9812 16.9253Z" fill="black"/>
    </svg>
  );
};
