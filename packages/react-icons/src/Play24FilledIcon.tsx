import React from 'react';
import { IconProps } from './types';

export const Play24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.4009 12.9691C20.1997 12.5698 20.1997 11.4302 19.4009 11.0309L5.56838 4.11579C4.84781 3.75557 4 4.27945 4 5.08493V18.9151C4 19.7205 4.84781 20.2444 5.56838 19.8842L19.4009 12.9691Z" fill="black"/>
    </svg>
  );
};
