import React from 'react';
import { IconProps } from './types';

export const Flipverticial28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.1295 11.1496C14.6727 11.6869 13.8546 11.6869 13.3978 11.1496L8.96137 5.93077C8.31895 5.17505 8.84589 4 9.82721 4H18.7001C19.6814 4 20.2084 5.17506 19.5659 5.93077L15.1295 11.1496Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.3978 15.5203C13.8546 14.983 14.6727 14.983 15.1295 15.5203L19.5659 20.7392C20.2084 21.4949 19.6814 22.6699 18.7001 22.6699H9.82721C8.84589 22.6699 8.31895 21.4949 8.96137 20.7392L13.3978 15.5203Z" fill="black"/>
<path d="M22.9255 14.0935C23.3367 14.0935 23.67 13.7539 23.67 13.335C23.67 12.9161 23.3367 12.5765 22.9255 12.5765L5.74451 12.5765C5.33333 12.5765 5 12.9161 5 13.335C5 13.7539 5.33333 14.0935 5.74451 14.0935H22.9255Z" fill="black"/>
    </svg>
  );
};
