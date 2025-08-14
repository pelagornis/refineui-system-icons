import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Cursor24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M4.05872 5.45886C3.77027 4.59353 4.59352 3.77027 5.45886 4.05872L19.2431 8.65346C20.2253 8.98084 20.2605 10.3571 19.2964 10.7344L14.0444 12.7895C13.4694 13.0145 13.0145 13.4694 12.7895 14.0444L10.7344 19.2964C10.3571 20.2605 8.98086 20.2253 8.65348 19.2431L4.05872 5.45886Z" fill="black"/>
    </Svg>
  );
};
