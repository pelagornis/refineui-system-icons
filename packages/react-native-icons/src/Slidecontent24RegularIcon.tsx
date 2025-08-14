import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Slidecontent24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M6.25 10C6.25 9.44772 6.69772 9 7.25 9H11.25C11.8023 9 12.25 9.44772 12.25 10V14C12.25 14.5523 11.8023 15 11.25 15H7.25C6.69772 15 6.25 14.5523 6.25 14V10Z" fill="black"/>
<path d="M14 9.1C13.641 9.1 13.35 9.39102 13.35 9.75C13.35 10.109 13.641 10.4 14 10.4H17C17.359 10.4 17.65 10.109 17.65 9.75C17.65 9.39102 17.359 9.1 17 9.1H14Z" fill="black"/>
<path d="M13.35 12C13.35 11.641 13.641 11.35 14 11.35H17C17.359 11.35 17.65 11.641 17.65 12C17.65 12.359 17.359 12.65 17 12.65H14C13.641 12.65 13.35 12.359 13.35 12Z" fill="black"/>
<path d="M14 13.6C13.641 13.6 13.35 13.891 13.35 14.25C13.35 14.609 13.641 14.9 14 14.9H17C17.359 14.9 17.65 14.609 17.65 14.25C17.65 13.891 17.359 13.6 17 13.6H14Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 6C4.89543 6 4 6.89543 4 8V16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V8C20 6.89543 19.1046 6 18 6H6ZM18 7.3H6C5.6134 7.3 5.3 7.6134 5.3 8V16C5.3 16.3866 5.6134 16.7 6 16.7H18C18.3866 16.7 18.7 16.3866 18.7 16V8C18.7 7.6134 18.3866 7.3 18 7.3Z" fill="black"/>
    </Svg>
  );
};
