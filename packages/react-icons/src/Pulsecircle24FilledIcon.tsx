import React from 'react';
import { IconProps } from './types';

export const Pulsecircle24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM10.2409 12.4353L10.6261 11.5543L11.7758 14.7267C12.0584 15.5065 13.1558 15.5214 13.4595 14.7496L14.1579 12.9747H15.9206C16.2796 12.9747 16.5706 12.6837 16.5706 12.3247C16.5706 11.9658 16.2796 11.6747 15.9206 11.6747H13.8854C13.5155 11.6747 13.1833 11.901 13.0479 12.2452L12.6374 13.2886L11.507 10.1696C11.23 9.4053 10.1619 9.37085 9.83621 10.1157L9.15459 11.6747H7.65C7.29101 11.6747 7 11.9658 7 12.3247C7 12.6837 7.29101 12.9747 7.65 12.9747H9.41626C9.77391 12.9747 10.0976 12.763 10.2409 12.4353Z" fill="black"/>
    </svg>
  );
};
