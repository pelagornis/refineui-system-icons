import React from 'react';
import { IconProps } from './types';

export const Mailread28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M14.9996 5.17666C14.5871 4.94102 14.0807 4.94112 13.6682 5.17693L6.02775 9.54541C5.95424 9.58745 5.94859 9.69134 6.01712 9.74109L14.3327 15.7787L22.7118 9.77237C22.7809 9.72284 22.7755 9.61842 22.7017 9.57626L14.9996 5.17666Z" fill="black"/>
<path d="M22.3264 23.6667C23.0674 23.6667 23.668 23.066 23.668 22.3251V11.1852C23.668 11.0902 23.5606 11.035 23.4834 11.0903L15.114 17.0847C14.647 17.4191 14.0189 17.4192 13.5518 17.0848L5.18458 11.0936C5.10738 11.0384 5 11.0935 5 11.1885V22.3251C5 23.066 5.60065 23.6667 6.3416 23.6667H22.3264Z" fill="black"/>
    </svg>
  );
};
