import React from 'react';
import { IconProps } from './types';

export const Ioschevronltr28RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M11.6968 9.19147C12.0165 9.46961 12.0453 9.94878 11.7612 10.2617L9.02138 13.2793C8.82077 13.5002 8.82077 13.8331 9.02138 14.0541L11.7612 17.0716C12.0453 17.3846 12.0165 17.8637 11.6968 18.1419C11.3771 18.42 10.8876 18.3918 10.6035 18.0789L7.3009 14.4415C6.8997 13.9996 6.8997 13.3337 7.3009 12.8919L10.6035 9.25448C10.8876 8.94154 11.3771 8.91333 11.6968 9.19147Z" fill="black"/>
    </svg>
  );
};
