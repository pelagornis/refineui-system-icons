import React from 'react';
import { IconProps } from './types';

export const Shapeintersect48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 30H12C9.79086 30 8 28.2091 8 26V12C8 9.79086 9.79086 8 12 8H26C28.2091 8 30 9.79086 30 12V18H36C38.2091 18 40 19.7909 40 22V36C40 38.2091 38.2091 40 36 40H22C19.7909 40 18 38.2091 18 36V30ZM12 10.6H26C26.7732 10.6 27.4 11.2268 27.4 12V18H22C19.7909 18 18 19.7909 18 22V27.4H12C11.2268 27.4 10.6 26.7732 10.6 26V12C10.6 11.2268 11.2268 10.6 12 10.6ZM30 20.6H36C36.7732 20.6 37.4 21.2268 37.4 22V36C37.4 36.7732 36.7732 37.4 36 37.4H22C21.2268 37.4 20.6 36.7732 20.6 36V30H26C28.2091 30 30 28.2091 30 26V20.6Z" fill="black"/>
    </svg>
  );
};
