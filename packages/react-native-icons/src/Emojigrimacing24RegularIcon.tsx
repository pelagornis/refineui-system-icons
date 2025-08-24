import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Emojigrimacing24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M9 12C9.55228 12 10 11.5523 10 11C10 10.4477 9.55228 10 9 10C8.44772 10 8 10.4477 8 11C8 11.5523 8.44772 12 9 12Z" fill="black"/>
<path d="M16 11C16 11.5523 15.5523 12 15 12C14.4477 12 14 11.5523 14 11C14 10.4477 14.4477 10 15 10C15.5523 10 16 10.4477 16 11Z" fill="black"/>
<path d="M8.5 14.35C8.14102 14.35 7.85 14.641 7.85 15C7.85 15.359 8.14102 15.65 8.5 15.65H9.25606V14.35H8.5Z" fill="black"/>
<path d="M10.0773 14.35V15.65H11.5894V14.35H10.0773Z" fill="black"/>
<path d="M12.4106 14.35L12.4106 15.65H13.9227V14.35H12.4106Z" fill="black"/>
<path d="M14.7439 14.35L14.7439 15.65H15.5C15.859 15.65 16.15 15.359 16.15 15C16.15 14.641 15.859 14.35 15.5 14.35H14.7439Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18.7 12C18.7 15.7003 15.7003 18.7 12 18.7C8.29969 18.7 5.3 15.7003 5.3 12C5.3 8.29969 8.29969 5.3 12 5.3C15.7003 5.3 18.7 8.29969 18.7 12Z" fill="black"/>
    </Svg>
  );
};
