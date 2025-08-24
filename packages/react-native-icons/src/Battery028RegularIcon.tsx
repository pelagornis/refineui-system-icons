import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Battery028RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 10.3333C5 9.04467 6.04467 8 7.33333 8H19.6069C20.8956 8 21.9403 9.04467 21.9403 10.3333V11.4251C22.8937 11.4251 23.6667 12.198 23.6667 13.1515V14.5152C23.6667 15.4687 22.8937 16.2416 21.9403 16.2416V17.3333C21.9403 18.622 20.8956 19.6667 19.6069 19.6667H7.33333C6.04467 19.6667 5 18.622 5 17.3333V10.3333ZM7.56936 9.39144C6.92503 9.39144 6.4027 9.91377 6.4027 10.5581V17.1086C6.4027 17.7529 6.92503 18.2752 7.56936 18.2752H19.3709C20.0152 18.2752 20.5376 17.7529 20.5376 17.1086V10.5581C20.5376 9.91377 20.0152 9.39144 19.3709 9.39144H7.56936Z" fill="black"/>
    </Svg>
  );
};
