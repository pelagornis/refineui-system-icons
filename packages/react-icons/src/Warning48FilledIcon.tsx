import React from 'react';
import { IconProps } from './types';

export const Warning48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.9087 11.0865C25.0648 9.63782 22.9352 9.63782 22.0913 11.0865L8.29289 34.7737C7.45545 36.2113 8.51365 38 10.2016 38H37.7984C39.4864 38 40.5445 36.2113 39.7071 34.7737L25.9087 11.0865ZM25.3 19C25.3 18.282 24.718 17.7 24 17.7C23.282 17.7 22.7 18.282 22.7 19V27C22.7 27.718 23.282 28.3 24 28.3C24.718 28.3 25.3 27.718 25.3 27V19ZM24 33C24.8284 33 25.5 32.3284 25.5 31.5C25.5 30.6716 24.8284 30 24 30C23.1716 30 22.5 30.6716 22.5 31.5C22.5 32.3284 23.1716 33 24 33Z" fill="black"/>
    </svg>
  );
};
