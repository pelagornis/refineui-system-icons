import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Mail16FilledIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 16 16"
      fill="none"
      {{...props}}
    >
      width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.34961 8.34961H2.65039V4.70605L5.11523 6.55469C5.63968 6.94802 6.36032 6.94802 6.88477 6.55469L9.34961 4.70605V8.34961ZM7.50781 3.65039L6 4.78125L4.49219 3.65039H7.50781Z" fill="black" stroke="black" stroke-width="1.3"/>
    </Svg>
  );
};
