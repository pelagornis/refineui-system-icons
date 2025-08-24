import React from 'react';
import { IconProps } from './types';

export const Chart16FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M3.86663 3.43332C3.86663 3.194 3.67263 3 3.43332 3C3.194 3 3 3.194 3 3.43332V12.5667C3 13.1742 3.49247 13.6667 4.09996 13.6667H13.2334C13.4727 13.6667 13.6667 13.4727 13.6667 13.2334C13.6667 12.994 13.4727 12.8 13.2334 12.8H4.09996C3.97109 12.8 3.86663 12.6956 3.86663 12.5667V3.43332Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.235 4.70467C13.235 4.02167 12.4092 3.67962 11.9262 4.16258L8.93084 7.15798L7.87294 6.10007C7.62419 5.85133 7.23806 5.80379 6.93641 5.98478L4.74086 7.30211C4.50994 7.44066 4.36865 7.69021 4.36865 7.9595V11.733C4.36865 12.0643 4.63727 12.333 4.96863 12.333H12.635C12.9663 12.333 13.235 12.0643 13.235 11.733V4.70467Z" fill="black"/>
    </svg>
  );
};
