import React from 'react';
import { IconProps } from './types';

export const Keyboardshiftuppercase16FilledIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.76124 3.25284C8.0672 2.91572 8.59947 2.91572 8.90543 3.25284L13.379 8.18209C14.0288 8.89803 13.5018 10.0144 12.5557 10.0144H11.1262V10.9024C11.1262 11.5146 10.6245 12.0004 10.0187 12.0004H6.64799C6.04217 12.0004 5.5405 11.5146 5.5405 10.9024V10.0144H4.11093C3.16485 10.0144 2.63787 8.89803 3.28763 8.1821L7.76124 3.25284Z" fill="black"/>
<path d="M6.00013 12.8004C5.7608 12.8004 5.56678 12.9944 5.56678 13.2338C5.56678 13.4731 5.7608 13.6671 6.00013 13.6671H10.667C10.9063 13.6671 11.1003 13.4731 11.1003 13.2338C11.1003 12.9944 10.9063 12.8004 10.667 12.8004H6.00013Z" fill="black"/>
    </svg>
  );
};
