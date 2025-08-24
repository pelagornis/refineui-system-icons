import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Flagoff28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M4.29452 4.2221C3.99838 3.92596 3.51824 3.92597 3.2221 4.22211C2.92596 4.51825 2.92597 4.99838 3.22211 5.29452L22.7055 24.7779C23.0016 25.074 23.4818 25.074 23.7779 24.7779C24.074 24.4817 24.074 24.0016 23.7779 23.7055L4.29452 4.2221Z" fill="black"/>
<path d="M4.16664 23.0768V7.49991L15.928 19.2613H6.26658C5.94443 19.2613 5.68327 19.5224 5.68327 19.8446V23.0768C5.68327 23.4956 5.34376 23.8351 4.92495 23.8351C4.50615 23.8351 4.16664 23.4956 4.16664 23.0768Z" fill="black"/>
<path d="M6.49991 5.16664L20.5945 19.2613H20.8368C22.3662 19.2613 23.4558 17.5524 22.4229 16.2219L19.4725 12.4215C19.3736 12.2942 19.3736 12.1338 19.4725 12.0064L22.4229 8.20597C23.4558 6.8755 22.3662 5.16664 20.8368 5.16664H6.49991Z" fill="black"/>
    </Svg>
  );
};
