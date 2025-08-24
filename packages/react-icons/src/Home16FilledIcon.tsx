import React from 'react';
import { IconProps } from './types';

export const Home16FilledIcon: React.FC<IconProps> = ({ 
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
      width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.56653 4.31186L6.56653 2.18173C6.22528 1.93942 5.77472 1.93942 5.43347 2.18173L2.43347 4.31186C2.16212 4.50453 2 4.82283 2 5.16293V8.75081C2 9.60641 2.67157 10.3 3.5 10.3H4.75C5.02614 10.3 5.25 10.0688 5.25 9.7836V8.23442C5.25 7.94922 5.47386 7.71802 5.75 7.71802H6.25C6.52614 7.71802 6.75 7.94922 6.75 8.23442V9.7836C6.75 10.0688 6.97386 10.3 7.25 10.3H8.5C9.32843 10.3 10 9.60641 10 8.75081V5.16293C10 4.82283 9.83788 4.50454 9.56653 4.31186Z" fill="black"/>
    </svg>
  );
};
