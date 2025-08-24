import React from 'react';
import { IconProps } from './types';

export const Diamond16FilledIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.28162 3.43564C7.86246 2.85479 8.8042 2.85479 9.38505 3.43564L13.231 7.28162C13.8119 7.86246 13.8119 8.8042 13.231 9.38505L9.38505 13.231C8.8042 13.8119 7.86246 13.8119 7.28162 13.231L3.43564 9.38505C2.85479 8.8042 2.85479 7.86246 3.43564 7.28162L7.28162 3.43564Z" fill="black"/>
    </svg>
  );
};
