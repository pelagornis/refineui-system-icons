import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Dismisssquare24RegularIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 24 24"
      fill="none"
      {{...props}}
    >
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.54036 8.54039C8.7942 8.28655 9.20575 8.28655 9.45959 8.54039L12 11.0808L14.5404 8.54039C14.7942 8.28655 15.2058 8.28655 15.4596 8.54039C15.7134 8.79423 15.7134 9.20578 15.4596 9.45963L12.9192 12L15.4596 14.5404C15.7134 14.7942 15.7134 15.2058 15.4596 15.4596C15.2058 15.7135 14.7942 15.7135 14.5404 15.4596L12 12.9192L9.45959 15.4596C9.20575 15.7135 8.7942 15.7135 8.54036 15.4596C8.28652 15.2058 8.28652 14.7942 8.54036 14.5404L11.0807 12L8.54036 9.45963C8.28652 9.20578 8.28652 8.79423 8.54036 8.54039Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6ZM6 5.3H18C18.3866 5.3 18.7 5.6134 18.7 6V18C18.7 18.3866 18.3866 18.7 18 18.7H6C5.6134 18.7 5.3 18.3866 5.3 18V6C5.3 5.6134 5.6134 5.3 6 5.3Z" fill="black"/>
    </Svg>
  );
};
