import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textboxalignmiddleleft16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.33375C3 3.59714 3.59714 3 4.33375 3H12.3363C13.0729 3 13.67 3.59714 13.67 4.33375V12.3363C13.67 13.0729 13.0729 13.67 12.3363 13.67H4.33375C3.59714 13.67 3 13.0729 3 12.3363V4.33375ZM5.06731 7.16797C5.06731 6.92857 5.26138 6.7345 5.50078 6.7345H11.1692C11.4086 6.7345 11.6027 6.92857 11.6027 7.16797C11.6027 7.40737 11.4086 7.60144 11.1692 7.60144H5.50078C5.26138 7.60144 5.06731 7.40737 5.06731 7.16797ZM5.50078 9.06856C5.26138 9.06856 5.06731 9.26263 5.06731 9.50203C5.06731 9.74143 5.26138 9.9355 5.50078 9.9355H9.50203C9.74143 9.9355 9.9355 9.74143 9.9355 9.50203C9.9355 9.26263 9.74143 9.06856 9.50203 9.06856H5.50078Z" fill="black"/>
    </Svg>
  );
};
