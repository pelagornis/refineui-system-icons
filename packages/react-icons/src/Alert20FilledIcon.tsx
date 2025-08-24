import React from 'react';
import { IconProps } from './types';

export const Alert20FilledIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.83333 3C12.4726 3 14.6121 5.26666 14.6121 8.06272V9.99841C14.6121 10.2786 14.6779 10.5544 14.8037 10.8009L15.5698 12.3023C15.8566 12.8645 15.4723 13.5473 14.8691 13.5473H4.79759C4.19437 13.5473 3.81009 12.8645 4.0969 12.3023L4.86298 10.8009C4.98874 10.5544 5.0546 10.2786 5.0546 9.99841V8.06272C5.0546 5.26666 7.1941 3 9.83333 3Z" fill="black"/>
<path d="M11.5229 15.7592C11.971 15.2845 12.2227 14.6406 12.2227 13.9692H7.44397C7.44397 14.6406 7.69573 15.2845 8.14378 15.7592C8.59189 16.2339 9.19963 16.5006 9.83333 16.5006C10.467 16.5006 11.0748 16.2339 11.5229 15.7592Z" fill="black"/>
    </svg>
  );
};
