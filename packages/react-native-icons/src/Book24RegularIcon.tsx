import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Book24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 8C8 6.89543 8.89543 6 10 6H14C15.1046 6 16 6.89543 16 8C16 9.10457 15.1046 10 14 10H10C8.89543 10 8 9.10457 8 8ZM10 7.3H14C14.3866 7.3 14.7 7.6134 14.7 8C14.7 8.3866 14.3866 8.7 14 8.7H10C9.6134 8.7 9.3 8.3866 9.3 8C9.3 7.6134 9.6134 7.3 10 7.3Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.7 17.65H7.825C7.53505 17.65 7.3 17.885 7.3 18.175C7.3 18.4649 7.53505 18.7 7.825 18.7H17.35C17.709 18.7 18 18.991 18 19.35C18 19.709 17.709 20 17.35 20H7C6.44772 20 6 19.5523 6 19V5C6 4.44772 6.44772 4 7 4H17C17.5523 4 18 4.44772 18 5V16.35C18 17.068 17.418 17.65 16.7 17.65ZM7.3 15.85C7.3 16.1261 7.52386 16.35 7.8 16.35H16.2C16.4761 16.35 16.7 16.1261 16.7 15.85V5.8C16.7 5.52386 16.4761 5.3 16.2 5.3H7.8C7.52386 5.3 7.3 5.52386 7.3 5.8V15.85Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 8C8 6.89543 8.89543 6 10 6H14C15.1046 6 16 6.89543 16 8C16 9.10457 15.1046 10 14 10H10C8.89543 10 8 9.10457 8 8ZM10 7.3H14C14.3866 7.3 14.7 7.6134 14.7 8C14.7 8.3866 14.3866 8.7 14 8.7H10C9.6134 8.7 9.3 8.3866 9.3 8C9.3 7.6134 9.6134 7.3 10 7.3Z" fill="black"/>
    </Svg>
  );
};
