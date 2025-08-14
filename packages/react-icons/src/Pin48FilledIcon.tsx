import React from 'react';
import { IconProps } from './types';

export const Pin48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5378 25.4686C9.52265 24.4339 9.90556 22.6748 11.2548 22.1748L18.4171 19.5203C18.889 19.3455 19.2771 18.9929 19.5017 18.5352L23.585 10.2118C24.783 7.76981 27.9763 7.24167 29.8706 9.17223L38.8498 18.3238C40.7441 20.2543 40.2259 23.5089 37.8298 24.7299L29.6631 28.8916C29.214 29.1204 28.8681 29.516 28.6965 29.997L26.092 37.2967C25.6014 38.6718 23.8754 39.0621 22.8602 38.0274L17.379 32.441L9.96235 40H8V38L15.4167 30.441L10.5378 25.4686Z" fill="black"/>
    </svg>
  );
};
