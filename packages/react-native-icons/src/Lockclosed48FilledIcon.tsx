import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Lockclosed48FilledIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.7 16.9369V15.015C16.7 11.1407 19.9683 8 24 8C28.0317 8 31.3 11.1407 31.3 15.015V16.9369H32C34.2091 16.9369 36 18.6579 36 20.7808V36.1562C36 38.2791 34.2091 40 32 40H16C13.7909 40 12 38.2791 12 36.1562V20.7808C12 18.6579 13.7909 16.9369 16 16.9369H16.7ZM19.3 15.015C19.3 12.5206 21.4043 10.4985 24 10.4985C26.5957 10.4985 28.7 12.5206 28.7 15.015V16.9369H19.3V15.015ZM26 28.4685C26 29.5299 25.1046 30.3904 24 30.3904C22.8954 30.3904 22 29.5299 22 28.4685C22 27.407 22.8954 26.5465 24 26.5465C25.1046 26.5465 26 27.407 26 28.4685Z" fill="black"/>
    </Svg>
  );
};
