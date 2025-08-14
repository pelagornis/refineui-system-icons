import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Slideeraser28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M7.33333 7C6.04467 7 5 8.04467 5 9.33333V18.6667C5 19.9553 6.04467 21 7.33333 21H16.8139C16.518 20.2645 16.6681 19.3914 17.2641 18.7954L21.4621 14.5974C22.0581 14.0014 22.9311 13.8514 23.6667 14.1472V9.33333C23.6667 8.04467 22.622 7 21.3333 7H7.33333Z" fill="black"/>
<path d="M18.0891 19.6204C17.7481 19.9614 17.7481 20.5142 18.0891 20.8552L20.3115 23.0776C20.6525 23.4186 21.2053 23.4186 21.5463 23.0776L21.9961 22.6278L18.5389 19.1706L18.0891 19.6204Z" fill="black"/>
<path d="M19.1563 18.5532L22.6135 22.0104L25.7443 18.8796C26.0852 18.5386 26.0852 17.9858 25.7443 17.6448L23.5218 15.4224C23.1809 15.0814 22.628 15.0814 22.2871 15.4224L19.1563 18.5532Z" fill="black"/>
    </Svg>
  );
};
