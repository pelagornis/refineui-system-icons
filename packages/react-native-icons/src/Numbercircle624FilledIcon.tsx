import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Numbercircle624FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M11.15 14V12.65H12.5C12.6933 12.65 12.85 12.8067 12.85 13V14C12.85 14.1933 12.6933 14.35 12.5 14.35H11.5C11.3067 14.35 11.15 14.1933 11.15 14Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.5 8.35C10.5887 8.35 9.85 9.08873 9.85 10V14C9.85 14.9113 10.5887 15.65 11.5 15.65H12.5C13.4113 15.65 14.15 14.9113 14.15 14V13C14.15 12.0887 13.4113 11.35 12.5 11.35H11.15V10C11.15 9.8067 11.3067 9.65 11.5 9.65H13.5C13.859 9.65 14.15 9.35898 14.15 9C14.15 8.64102 13.859 8.35 13.5 8.35H11.5Z" fill="black"/>
    </Svg>
  );
};
