import React from 'react';
import { IconProps } from './types';

export const Alignleft28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M5.7584 5C6.17726 5 6.51681 5.33968 6.51681 5.7587V22.9113C6.51681 23.3303 6.17726 23.67 5.7584 23.67C5.33955 23.67 5 23.3303 5 22.9113V5.7587C5 5.33968 5.33955 5 5.7584 5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.94448 6.9839C8.6557 6.9839 7.61093 8.02907 7.61093 9.31836V11.388C7.61093 12.6773 8.6557 13.7224 9.94448 13.7224H21.3331C22.6219 13.7224 23.6667 12.6773 23.6667 11.388V9.31836C23.6667 8.02907 22.6219 6.9839 21.3331 6.9839H9.94448Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.61093 17.2821C7.61093 15.9928 8.6557 14.9476 9.94448 14.9476H17.6279C18.9167 14.9476 19.9615 15.9928 19.9615 17.2821V19.3517C19.9615 20.641 18.9167 21.6861 17.6279 21.6861H9.94448C8.6557 21.6861 7.61093 20.6409 7.61093 19.3517V17.2821Z" fill="black"/>
    </svg>
  );
};
