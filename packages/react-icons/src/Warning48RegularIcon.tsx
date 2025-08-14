import React from 'react';
import { IconProps } from './types';

export const Warning48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M24 17.7C24.718 17.7 25.3 18.282 25.3 19V27C25.3 27.718 24.718 28.3 24 28.3C23.282 28.3 22.7 27.718 22.7 27V19C22.7 18.282 23.282 17.7 24 17.7Z" fill="black"/>
<path d="M24 33C24.8284 33 25.5 32.3284 25.5 31.5C25.5 30.6716 24.8284 30 24 30C23.1716 30 22.5 30.6716 22.5 31.5C22.5 32.3284 23.1716 33 24 33Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.9087 11.0865C25.0648 9.63782 22.9352 9.63782 22.0913 11.0865L8.29289 34.7737C7.45545 36.2113 8.51365 38 10.2016 38H37.7984C39.4864 38 40.5446 36.2113 39.7071 34.7737L25.9087 11.0865ZM24.8641 14.4587C24.4783 13.7965 23.5217 13.7965 23.1359 14.4587L11.8128 33.8967C11.4244 34.5633 11.9053 35.4 12.6768 35.4H35.3232C36.0947 35.4 36.5756 34.5633 36.1872 33.8966L24.8641 14.4587Z" fill="black"/>
    </svg>
  );
};
