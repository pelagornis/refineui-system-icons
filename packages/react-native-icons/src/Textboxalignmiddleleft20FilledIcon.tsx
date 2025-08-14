import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textboxalignmiddleleft20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.66625C3 3.74601 3.74601 3 4.66625 3H14.6637C15.584 3 16.33 3.74601 16.33 4.66625V14.6637C16.33 15.584 15.584 16.33 14.6637 16.33H4.66625C3.74601 16.33 3 15.584 3 14.6637V4.66625ZM5.58269 8.20703C5.58269 7.90795 5.82514 7.6655 6.12422 7.6655H13.2058C13.5049 7.6655 13.7473 7.90795 13.7473 8.20703C13.7473 8.50611 13.5049 8.74856 13.2058 8.74856H6.12422C5.82514 8.74856 5.58269 8.50611 5.58269 8.20703ZM6.12422 10.5814C5.82514 10.5814 5.58269 10.8239 5.58269 11.123C5.58269 11.422 5.82514 11.6645 6.12422 11.6645H11.123C11.422 11.6645 11.6645 11.422 11.6645 11.123C11.6645 10.8239 11.422 10.5814 11.123 10.5814H6.12422Z" fill="black"/>
    </Svg>
  );
};
