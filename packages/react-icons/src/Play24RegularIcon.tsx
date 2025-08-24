import React from 'react';
import { IconProps } from './types';

export const Play24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.4009 12.9691C20.1997 12.5698 20.1997 11.4302 19.4009 11.0309L5.56838 4.11579C4.84781 3.75557 4 4.27945 4 5.08493V18.9151C4 19.7205 4.84781 20.2444 5.56838 19.8842L19.4009 12.9691ZM17.5376 12.4472C17.9062 12.263 17.9062 11.737 17.5376 11.5528L6.02358 5.79674C5.69113 5.63055 5.3 5.8723 5.3 6.24397L5.3 17.756C5.3 18.1277 5.69113 18.3695 6.02358 18.2033L17.5376 12.4472Z" fill="black"/>
    </svg>
  );
};
