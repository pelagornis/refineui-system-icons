import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Playcircle24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M9.58813 9.04343L14.7753 11.6366C15.0749 11.7863 15.0749 12.2137 14.7753 12.3634L9.58813 14.9566C9.31793 15.0917 9 14.8952 9 14.5932V9.40685C9 9.1048 9.31793 8.90834 9.58813 9.04343Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58173 20 4 16.4183 4 12C4 7.58173 7.58173 4 12 4C16.4183 4 20 7.58173 20 12ZM18.7 12C18.7 15.7003 15.7003 18.7 12 18.7C8.29968 18.7 5.29999 15.7003 5.29999 12C5.29999 8.2997 8.29968 5.3 12 5.3C15.7003 5.3 18.7 8.2997 18.7 12Z" fill="black"/>
    </Svg>
  );
};
