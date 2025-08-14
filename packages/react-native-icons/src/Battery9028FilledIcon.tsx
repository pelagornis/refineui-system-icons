import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Battery9028FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 10.3333C5 9.04467 6.04467 8 7.33333 8H19.6069C20.8956 8 21.9403 9.04467 21.9403 10.3333V11.4251C22.8937 11.4251 23.6667 12.198 23.6667 13.1515V14.5152C23.6667 15.4687 22.8937 16.2416 21.9403 16.2416V17.3333C21.9403 18.622 20.8956 19.6667 19.6069 19.6667H7.33333C6.04467 19.6667 5 18.622 5 17.3333V10.3333ZM8.5 10.3333C7.85567 10.3333 7.33333 10.8557 7.33333 11.5V16.1667C7.33333 16.811 7.85567 17.3333 8.5 17.3333H17.3667C18.011 17.3333 18.5333 16.811 18.5333 16.1667V11.5C18.5333 10.8557 18.011 10.3333 17.3667 10.3333H8.5Z" fill="black"/>
    </Svg>
  );
};
