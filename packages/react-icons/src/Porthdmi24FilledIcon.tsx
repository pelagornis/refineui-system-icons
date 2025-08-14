import React from 'react';
import { IconProps } from './types';

export const Porthdmi24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.48253 9.32436C7.69709 9.11634 7.9842 9 8.28305 9H15.7189C16.0177 9 16.3048 9.11633 16.5194 9.32436L19.6525 12.3621C19.8758 12.5787 20.0019 12.8766 20.0019 13.1877V14.8518C20.0019 15.487 19.4871 16.0018 18.8519 16.0018H5.15C4.51487 16.0018 4 15.487 4 14.8518V13.1877C4 12.8766 4.12609 12.5787 4.34949 12.3621L7.48253 9.32436ZM8.57054 11.8509C8.21155 11.8509 7.92054 12.1419 7.92054 12.5009C7.92054 12.8599 8.21155 13.1509 8.57054 13.1509H15.4314C15.7904 13.1509 16.0814 12.8599 16.0814 12.5009C16.0814 12.1419 15.7904 11.8509 15.4314 11.8509H8.57054Z" fill="black"/>
    </svg>
  );
};
