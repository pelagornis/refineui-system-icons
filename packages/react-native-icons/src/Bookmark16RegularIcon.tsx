import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Bookmark16RegularIcon: React.FC<IconProps> = ({ 
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
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.38228C12 3.61887 11.403 3 10.6667 3H5.33333C4.59695 3 4 3.61887 4 4.38228V13.3204C4 13.6134 4.32962 13.7735 4.54673 13.5859L7.78661 10.7869C7.91022 10.6801 8.08978 10.6801 8.21339 10.7869L11.4533 13.5859C11.6704 13.7735 12 13.6134 12 13.3204V4.38228ZM10.6667 3.89848H5.33333C5.0756 3.89848 4.86667 4.11509 4.86667 4.38228V11.771C4.86667 11.9175 5.03148 11.9976 5.14003 11.9038L7.23178 10.0967C7.67679 9.71221 8.3232 9.7122 8.76822 10.0967L10.86 11.9038C10.9685 11.9976 11.1333 11.9175 11.1333 11.771V4.38228C11.1333 4.11509 10.9244 3.89848 10.6667 3.89848Z" fill="black"/>
    </Svg>
  );
};
