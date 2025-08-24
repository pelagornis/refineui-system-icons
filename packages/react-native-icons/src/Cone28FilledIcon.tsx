import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Cone28FilledIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.7772 5.52812C13.0827 4.82396 14.0839 4.82396 14.3895 5.52812L21.0983 20.9901C21.2808 21.4109 21.0806 21.8708 20.7023 22.0525C16.2199 24.2047 10.9468 24.2047 6.46433 22.0525C6.08605 21.8708 5.88582 21.4109 6.06838 20.9901L12.7772 5.52812Z" fill="black"/>
    </Svg>
  );
};
