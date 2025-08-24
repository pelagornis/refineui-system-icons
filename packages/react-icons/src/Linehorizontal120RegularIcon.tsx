import React from 'react';
import { IconProps } from './types';

export const Linehorizontal120RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M16.3333 9.5416C16.3333 9.84072 16.1577 10.0832 15.941 10.0832L3.3923 10.0832C3.17564 10.0832 3 9.84072 3 9.5416C3 9.24248 3.17564 9 3.3923 9L15.941 9C16.1577 9 16.3333 9.24248 16.3333 9.5416Z" fill="black"/>
    </svg>
  );
};
