import React from 'react';
import { IconProps } from './types';

export const Addcircle32FilledIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.665 26.33C21.5551 26.33 26.33 21.5551 26.33 15.665C26.33 9.77488 21.5551 5 15.665 5C9.77488 5 5 9.77488 5 15.665C5 21.5551 9.77488 26.33 15.665 26.33ZM16.3316 10.9991C16.3316 10.6309 16.0332 10.3325 15.665 10.3325C15.2969 10.3325 14.9985 10.6309 14.9985 10.9991L14.9985 14.9984H10.9991C10.6309 14.9984 10.3325 15.2969 10.3325 15.665C10.3325 16.0331 10.6309 16.3316 10.9991 16.3316H14.9985V20.3309C14.9985 20.6991 15.2969 20.9975 15.665 20.9975C16.0332 20.9975 16.3316 20.6991 16.3316 20.3309V16.3316H20.331C20.6991 16.3316 20.9975 16.0331 20.9975 15.665C20.9975 15.2969 20.6991 14.9984 20.331 14.9984H16.3316L16.3316 10.9991Z" fill="black"/>
    </svg>
  );
};
