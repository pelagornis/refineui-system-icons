import React from 'react';
import { IconProps } from './types';

export const Search24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0155 13.9887C13.0105 13.9925 13.0055 13.9962 13.0005 14C12.1647 14.6279 11.1258 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 11.1326 14.6234 12.1772 13.9887 13.0155L17.3795 16.4063C17.7039 16.7307 18.2554 17.4768 17.8661 17.8661C17.4768 18.2554 16.7307 17.7039 16.4063 17.3795L13.0155 13.9887ZM13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z" fill="black"/>
    </svg>
  );
};
