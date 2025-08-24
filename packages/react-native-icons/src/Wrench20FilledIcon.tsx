import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Wrench20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.87622 6.66241C8.87622 4.62933 10.5553 3 12.6031 3C13.0333 3 13.4478 3.07185 13.8338 3.20455L14.6631 3.48957L12.4824 5.62614C12.1852 5.91734 12.1852 6.3848 12.4824 6.676C12.7858 6.97326 13.2822 6.97326 13.5856 6.676L15.7558 4.54976L16.061 5.29399C16.2346 5.7173 16.33 6.1795 16.33 6.66241C16.33 8.69549 14.6509 10.3248 12.6031 10.3248C12.2889 10.3248 11.9832 10.2865 11.6907 10.2142L5.95952 15.8294C5.28252 16.4927 4.18938 16.4927 3.51238 15.8294C2.82921 15.16 2.82921 14.0701 3.51238 13.4008L9.1031 7.92323C8.95633 7.52983 8.87622 7.10496 8.87622 6.66241Z" fill="black"/>
    </Svg>
  );
};
