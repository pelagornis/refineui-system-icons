import React from 'react';
import { IconProps } from './types';

export const Videoclip24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 5C4.89543 5 4 5.89543 4 7V17C4 18.1046 4.89543 19 6 19H18C19.1046 19 20 18.1046 20 17V7C20 5.89543 19.1046 5 18 5H6ZM14.7753 11.6366C15.0749 11.7863 15.0749 12.2137 14.7753 12.3634L9.58814 14.9566C9.31793 15.0917 9 14.8952 9 14.5932V9.40685C9 9.10479 9.31793 8.90834 9.58814 9.04342L14.7753 11.6366Z" fill="black"/>
    </svg>
  );
};
