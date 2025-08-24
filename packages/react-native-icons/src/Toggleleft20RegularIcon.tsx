import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Toggleleft20RegularIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.665 10.1656C9.665 11.546 8.54599 12.665 7.16563 12.665C5.78526 12.665 4.66625 11.546 4.66625 10.1656C4.66625 8.78526 5.78526 7.66625 7.16563 7.66625C8.54599 7.66625 9.665 8.78526 9.665 10.1656ZM8.58194 10.1656C8.58194 10.9478 7.94783 11.5819 7.16563 11.5819C6.38342 11.5819 5.74931 10.9478 5.74931 10.1656C5.74931 9.38342 6.38342 8.74931 7.16563 8.74931C7.94783 8.74931 8.58194 9.38342 8.58194 10.1656Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 10.1656C3 7.86501 4.86501 6 7.16563 6H12.1644C14.465 6 16.33 7.86501 16.33 10.1656C16.33 12.4662 14.465 14.3313 12.1644 14.3313H7.16563C4.86501 14.3313 3 12.4662 3 10.1656ZM7.16563 7.08306H12.1644C13.8668 7.08306 15.2469 8.46317 15.2469 10.1656C15.2469 11.8681 13.8668 13.2482 12.1644 13.2482H7.16563C5.46317 13.2482 4.08306 11.8681 4.08306 10.1656C4.08306 8.46317 5.46317 7.08306 7.16563 7.08306Z" fill="black"/>
    </Svg>
  );
};
