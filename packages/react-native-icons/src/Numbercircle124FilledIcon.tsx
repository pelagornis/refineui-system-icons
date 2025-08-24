import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Numbercircle124FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.85 15V10.4514L10.9651 11.3577C10.7143 11.6145 10.3027 11.6194 10.0459 11.3686C9.78904 11.1178 9.78414 10.7063 10.0349 10.4495L11.8642 8.57609C12.3575 8.07089 13.15 8.46184 13.15 9.10262V15C13.15 15.359 12.859 15.65 12.5 15.65C12.141 15.65 11.85 15.359 11.85 15Z" fill="black"/>
    </Svg>
  );
};
