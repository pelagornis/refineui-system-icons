import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textboxaligntop16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.33375C3 3.59714 3.59714 3 4.33375 3H12.3363C13.0729 3 13.67 3.59714 13.67 4.33375V12.3363C13.67 13.0729 13.0729 13.67 12.3363 13.67H4.33375C3.59714 13.67 3 13.0729 3 12.3363V4.33375ZM5.06731 5.83422C5.06731 5.59482 5.26138 5.40075 5.50078 5.40075H11.1692C11.4086 5.40075 11.6027 5.59482 11.6027 5.83422C11.6027 6.07362 11.4086 6.26769 11.1692 6.26769H5.50078C5.26138 6.26769 5.06731 6.07362 5.06731 5.83422ZM5.50078 7.73481C5.26138 7.73481 5.06731 7.92888 5.06731 8.16828C5.06731 8.40768 5.26138 8.60175 5.50078 8.60175H11.1692C11.4086 8.60175 11.6027 8.40768 11.6027 8.16828C11.6027 7.92888 11.4086 7.73481 11.1692 7.73481H5.50078Z" fill="black"/>
    </Svg>
  );
};
