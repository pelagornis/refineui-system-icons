import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textalignjustify16FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M3 5.7C3 5.3134 3.29848 5 3.66667 5H12.3333C12.7015 5 13 5.3134 13 5.7C13 6.0866 12.7015 6.4 12.3333 6.4H3.66667C3.29848 6.4 3 6.0866 3 5.7Z" fill="black"/>
<path d="M3 8.5C3 8.1134 3.29848 7.8 3.66667 7.8H12.3333C12.7015 7.8 13 8.1134 13 8.5C13 8.8866 12.7015 9.2 12.3333 9.2H3.66667C3.29848 9.2 3 8.8866 3 8.5Z" fill="black"/>
<path d="M3.66667 10.6C3.29848 10.6 3 10.9134 3 11.3C3 11.6866 3.29848 12 3.66667 12H12.3333C12.7015 12 13 11.6866 13 11.3C13 10.9134 12.7015 10.6 12.3333 10.6H3.66667Z" fill="black"/>
    </Svg>
  );
};
