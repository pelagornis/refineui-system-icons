import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Videoclip24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M14.7753 11.6366C15.0749 11.7863 15.0749 12.2137 14.7753 12.3634L9.58813 14.9566C9.31793 15.0917 9 14.8952 9 14.5932V9.40685C9 9.1048 9.31793 8.90834 9.58813 9.04343L14.7753 11.6366Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 7C4 5.89543 4.89545 5 6 5H18C19.1046 5 20 5.89543 20 7V17C20 18.1046 19.1046 19 18 19H6C4.89545 19 4 18.1046 4 17V7ZM6 6.3H18C18.3866 6.3 18.7 6.6134 18.7 7V17C18.7 17.3866 18.3866 17.7 18 17.7H6C5.6134 17.7 5.29999 17.3866 5.29999 17V7C5.29999 6.6134 5.6134 6.3 6 6.3Z" fill="black"/>
    </Svg>
  );
};
