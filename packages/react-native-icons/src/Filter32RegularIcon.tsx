import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Filter32RegularIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 9.86659C5 9.38799 5.38814 9 5.86693 9H25.4664C25.9452 9 26.3333 9.38799 26.3333 9.86659C26.3333 10.3452 25.9452 10.7332 25.4664 10.7332H5.86693C5.38814 10.7332 5 10.3452 5 9.86659Z" fill="black"/>
<path d="M7.79984 15.665C7.79984 15.1864 8.18798 14.7984 8.66677 14.7984H22.6664C23.1452 14.7984 23.5333 15.1864 23.5333 15.665C23.5333 16.1436 23.1452 16.5316 22.6664 16.5316H8.66677C8.18798 16.5316 7.79984 16.1436 7.79984 15.665Z" fill="black"/>
<path d="M11.4668 20.5968C10.988 20.5968 10.5998 20.9848 10.5998 21.4634C10.5998 21.942 10.988 22.33 11.4668 22.33H19.8665C20.3453 22.33 20.7335 21.942 20.7335 21.4634C20.7335 20.9848 20.3453 20.5968 19.8665 20.5968H11.4668Z" fill="black"/>
    </Svg>
  );
};
