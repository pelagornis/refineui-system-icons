import React from 'react';
import { IconProps } from './types';

export const Keyboardbackspace20RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M8.07657 6.18353C8.28078 6.40788 8.25838 6.74993 8.02652 6.94754L4.88647 9.62368H15.7739C16.0829 9.62368 16.3333 9.86604 16.3333 10.165C16.3333 10.464 16.0829 10.7063 15.7739 10.7063H4.88647L8.02652 13.3825C8.25838 13.5801 8.28078 13.9221 8.07657 14.1465C7.87235 14.3708 7.51884 14.3925 7.28699 14.1949L3.2918 10.7899C2.90273 10.4584 2.90273 9.87164 3.2918 9.54006L7.28699 6.13511C7.51884 5.93751 7.87235 5.95919 8.07657 6.18353Z" fill="black"/>
    </svg>
  );
};
