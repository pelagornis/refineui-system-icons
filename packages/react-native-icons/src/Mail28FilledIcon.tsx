import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Mail28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M23.0195 19.833C23.0195 20.1182 22.7885 20.3496 22.5029 20.3496H6.16699C5.88142 20.3496 5.65039 20.1182 5.65039 19.833V9.24805L12.79 14.6016C13.7057 15.2881 14.9643 15.2881 15.8799 14.6016L23.0195 9.24805V19.833ZM20.4551 7.65039L14.335 12.2402L8.21484 7.65039H20.4551Z" fill="black" stroke="black" stroke-width="1.3"/>
    </Svg>
  );
};
