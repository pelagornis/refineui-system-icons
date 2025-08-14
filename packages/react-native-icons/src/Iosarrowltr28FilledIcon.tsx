import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Iosarrowltr28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M13.8871 5.26272C14.405 5.67001 14.4822 6.40485 14.0597 6.90403L8.08391 13.9646C7.90225 14.1792 7.90225 14.4874 8.08391 14.7021L14.0597 21.7626C14.4822 22.2618 14.405 22.9967 13.8871 23.4039C13.3693 23.8112 12.607 23.7367 12.1846 23.2376L5.27249 15.0708C4.90917 14.6415 4.90917 14.0251 5.27249 13.5959L12.1846 5.42911C12.607 4.92992 13.3693 4.85543 13.8871 5.26272Z" fill="black"/>
    </Svg>
  );
};
