import React from 'react';
import { IconProps } from './types';

export const Alert28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M14.1667 5C17.8616 5 20.8569 8.17259 20.8569 12.0862V14.7955C20.8569 15.1877 20.9491 15.5737 21.1252 15.9187L22.1977 18.0202C22.5992 18.8071 22.0612 19.7629 21.2167 19.7629H7.11663C6.27212 19.7629 5.73413 18.8071 6.13567 18.0202L7.20817 15.9187C7.38423 15.5737 7.47645 15.1877 7.47645 14.7955V12.0862C7.47645 8.17259 10.4717 5 14.1667 5Z" fill="black"/>
<path d="M16.532 22.8587C17.1594 22.1943 17.5118 21.2931 17.5118 20.3534H10.8216C10.8216 21.2931 11.174 22.1943 11.8013 22.8587C12.4286 23.5232 13.2795 23.8965 14.1667 23.8965C15.0539 23.8965 15.9047 23.5232 16.532 22.8587Z" fill="black"/>
    </svg>
  );
};
