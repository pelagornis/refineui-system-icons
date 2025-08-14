import React from 'react';
import { IconProps } from './types';

export const Record48RegularIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 34C29.5228 34 34 29.5229 34 24C34 18.4771 29.5228 14 24 14C18.4772 14 14 18.4771 14 24C14 29.5229 18.4772 34 24 34Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M40 24C40 32.8365 32.8365 40 24 40C15.1635 40 8 32.8365 8 24C8 15.1635 15.1635 8 24 8C32.8365 8 40 15.1635 40 24ZM37.4 24C37.4 31.4006 31.4006 37.4 24 37.4C16.5994 37.4 10.6 31.4006 10.6 24C10.6 16.5994 16.5994 10.6 24 10.6C31.4006 10.6 37.4 16.5994 37.4 24Z" fill="black"/>
    </svg>
  );
};
