import React from 'react';
import { IconProps } from './types';

export const Porthdmi20FilledIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.90176 7.27027C6.08054 7.09693 6.31977 7 6.56877 7H12.7646C13.0136 7 13.2528 7.09693 13.4316 7.27027L16.0421 9.80139C16.2283 9.98187 16.3333 10.2301 16.3333 10.4893V11.8759C16.3333 12.4051 15.9043 12.8341 15.3751 12.8341H3.95822C3.42901 12.8341 3 12.4051 3 11.8759V10.4893C3 10.2301 3.10506 9.98187 3.2912 9.80139L5.90176 7.27027ZM6.80832 9.37548C6.5092 9.37548 6.26672 9.61796 6.26672 9.91708C6.26672 10.2162 6.5092 10.4587 6.80832 10.4587H12.5251C12.8242 10.4587 13.0667 10.2162 13.0667 9.91708C13.0667 9.61796 12.8242 9.37548 12.5251 9.37548H6.80832Z" fill="black"/>
    </svg>
  );
};
