import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Toggleleft20FilledIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.16563 6C4.86501 6 3 7.86501 3 10.1656C3 12.4662 4.86501 14.3313 7.16563 14.3313H12.1644C14.465 14.3313 16.33 12.4662 16.33 10.1656C16.33 7.86501 14.465 6 12.1644 6H7.16563ZM9.665 10.1656C9.665 11.546 8.54599 12.665 7.16563 12.665C5.78526 12.665 4.66625 11.546 4.66625 10.1656C4.66625 8.78526 5.78526 7.66625 7.16563 7.66625C8.54599 7.66625 9.665 8.78526 9.665 10.1656Z" fill="black"/>
    </Svg>
  );
};
