import React from 'react';
import { IconProps } from './types';

export const Line24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M19.8096 4.19036C20.0635 4.44417 20.0635 4.85567 19.8096 5.10948L5.10948 19.8096C4.85567 20.0635 4.44417 20.0635 4.19036 19.8096C3.93655 19.5558 3.93655 19.1443 4.19036 18.8905L18.8905 4.19036C19.1443 3.93655 19.5558 3.93655 19.8096 4.19036Z" fill="black"/>
    </svg>
  );
};
