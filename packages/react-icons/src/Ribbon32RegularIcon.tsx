import React from 'react';
import { IconProps } from './types';

export const Ribbon32RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.8667 19.4091C22.7718 17.9407 24 15.6309 24 13.0329C24 8.59647 20.4183 5 16 5C11.5817 5 8 8.59647 8 13.0329C8 15.6309 9.22819 17.9407 11.1333 19.4091V25.1264C11.1333 26.0887 12.2015 26.6628 12.999 26.1289L16 24.12L19.001 26.1289C19.7985 26.6628 20.8667 26.0887 20.8667 25.1264V19.4091ZM22.2667 13.0329C22.2667 16.5082 19.461 19.3254 16 19.3254C12.539 19.3254 9.73333 16.5082 9.73333 13.0329C9.73333 9.55771 12.539 6.74047 16 6.74047C19.461 6.74047 22.2667 9.55771 22.2667 13.0329ZM19.1333 20.4264C18.1711 20.8381 17.112 21.0659 16 21.0659C14.888 21.0659 13.8289 20.8381 12.8667 20.4264V24.1257L16 22.0282L19.1333 24.1257V20.4264Z" fill="black"/>
    </svg>
  );
};
