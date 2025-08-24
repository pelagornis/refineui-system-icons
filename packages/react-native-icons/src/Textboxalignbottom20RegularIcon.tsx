import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textboxalignbottom20RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M5.37441 9.665C5.37441 9.36592 5.61686 9.12347 5.91594 9.12347H13.4141C13.7131 9.12347 13.9556 9.36592 13.9556 9.665C13.9556 9.96408 13.7131 10.2065 13.4141 10.2065H5.91594C5.61686 10.2065 5.37441 9.96408 5.37441 9.665Z" fill="black"/>
<path d="M5.91594 12.0394C5.61686 12.0394 5.37441 12.2819 5.37441 12.5809C5.37441 12.88 5.61686 13.1225 5.91594 13.1225H13.4141C13.7131 13.1225 13.9556 12.88 13.9556 12.5809C13.9556 12.2819 13.7131 12.0394 13.4141 12.0394H5.91594Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.66625 3C3.74601 3 3 3.74601 3 4.66625V14.6637C3 15.584 3.74601 16.33 4.66625 16.33H14.6637C15.584 16.33 16.33 15.584 16.33 14.6637V4.66625C16.33 3.74601 15.584 3 14.6637 3H4.66625ZM14.6637 4.08306H4.66625C4.34416 4.08306 4.08306 4.34416 4.08306 4.66625V14.6637C4.08306 14.9858 4.34416 15.2469 4.66625 15.2469H14.6637C14.9858 15.2469 15.2469 14.9858 15.2469 14.6637V4.66625C15.2469 4.34416 14.9858 4.08306 14.6637 4.08306Z" fill="black"/>
    </Svg>
  );
};
