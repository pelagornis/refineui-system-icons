import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Trophy24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 4C7.89543 4 7 4.89543 7 6L6 6C5.44772 6 5 6.44772 5 7V10C5 11.1046 5.89543 12 7 12H7.10002C7.52119 14.0748 9.22714 15.6831 11.3513 15.9583C11.3504 15.9721 11.35 15.986 11.35 16V17H9C7.89543 17 7 17.8954 7 19V19.75C7 19.8881 7.11193 20 7.25 20H16.75C16.8881 20 17 19.8881 17 19.75V19C17 17.8954 16.1046 17 15 17H12.65V16C12.65 15.986 12.6496 15.9721 12.6487 15.9583C14.7729 15.6831 16.4788 14.0748 16.9 12H17C18.1046 12 19 11.1046 19 10V7C19 6.44772 18.5523 6 18 6H17C17 4.89543 16.1046 4 15 4H9ZM7 10.7C6.6134 10.7 6.3 10.3866 6.3 10V7.3H7L7 10.7ZM17.7 10C17.7 10.3866 17.3866 10.7 17 10.7V7.3H17.7V10Z" fill="black"/>
    </Svg>
  );
};
