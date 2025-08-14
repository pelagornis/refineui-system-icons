import React from 'react';
import { IconProps } from './types';

export const Parallelogram28RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.91792 8.06883C10.2113 7.4216 10.8991 7 11.6618 7H21.7755C23.1236 7 24.0379 8.26082 23.5194 9.40486L18.7487 19.9312C18.4554 20.5784 17.7676 21 17.0049 21H6.89114C5.54306 21 4.6288 19.7392 5.14728 18.5951L9.91792 8.06883ZM11.6618 8.36842C11.5 8.36842 11.3541 8.45785 11.2919 8.59514L6.52123 19.1215C6.41125 19.3641 6.60518 19.6316 6.89114 19.6316H17.0049C17.1667 19.6316 17.3126 19.5421 17.3748 19.4049L22.1454 8.87854C22.2554 8.63587 22.0615 8.36842 21.7755 8.36842H11.6618Z" fill="black"/>
    </svg>
  );
};
