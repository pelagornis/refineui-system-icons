import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Chevronright32FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M10.3903 7.27531C9.86989 6.75474 9.86989 5.91094 10.3903 5.39037C10.9108 4.86991 11.7544 4.86984 12.2748 5.39037L21.3809 14.4987C22.0246 15.1431 22.0245 16.1871 21.3809 16.8315L12.2748 25.9398L12.1733 26.0309C11.6499 26.4579 10.8782 26.4278 10.3903 25.9398C9.90242 25.4518 9.87231 24.68 10.2992 24.1564L10.3903 24.0549L18.7781 15.6651L10.3903 7.27531Z" fill="black"/>
    </Svg>
  );
};
