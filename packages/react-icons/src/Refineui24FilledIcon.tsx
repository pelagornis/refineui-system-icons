import React from 'react';
import { IconProps } from './types';

export const Refineui24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M4 19.6667V8.31284C4 4.98302 7.09774 4.05019 8.64661 4H19.5801C19.7678 4 19.92 4.14924 19.92 4.33333V8.31284C19.9002 11.5267 17.2752 12.8651 15.7389 13.1953C15.6158 13.2217 15.5554 13.3632 15.6279 13.4643L19.9375 19.4749C20.0959 19.6958 19.9348 20 19.6595 20H15.0184C14.903 20 14.7955 19.9426 14.7329 19.8475L10.6964 13.7194C10.6045 13.5798 10.3838 13.6437 10.3838 13.8098V19.6667C10.3838 19.8508 10.2316 20 10.0439 20H4.33988C4.15217 20 4 19.8508 4 19.6667Z" fill="black"/>
    </svg>
  );
};
