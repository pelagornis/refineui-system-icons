import React from 'react';
import { IconProps } from './types';

export const Comment20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.49937 16.064C5.49937 16.4263 5.90341 16.6277 6.17616 16.4014L9.64218 13.5251C9.65695 13.5129 9.67531 13.5062 9.69423 13.5062H14.6637C15.584 13.5062 16.33 12.7324 16.33 11.7778V5.7284C16.33 4.77383 15.584 4 14.6637 4H4.66625C3.746 4 3 4.77383 3 5.7284V11.7778C3 12.7324 3.746 13.5062 4.66625 13.5062H5.41606C5.46208 13.5062 5.49937 13.5449 5.49937 13.5926V16.064Z" fill="black"/>
    </svg>
  );
};
