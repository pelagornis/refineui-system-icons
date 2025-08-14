import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Shield24FilledIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 24 24"
      fill="none"
      {{...props}}
    >
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 20L12.0819 19.9851C13.4856 19.7289 15.2002 18.7072 16.5579 17.3022C17.9164 15.8964 19 14.0203 19 12.002V6.83357C19 6.5574 18.7863 6.33353 18.5227 6.33353C17.2561 6.33353 15.9119 5.94236 14.7597 5.45553C13.6084 4.96911 12.6885 4.40429 12.2795 4.09473C12.1127 3.96842 11.8873 3.96842 11.7205 4.09473C11.3114 4.40433 10.3919 4.96914 9.24087 5.45554C8.08887 5.94235 6.7447 6.33353 5.47732 6.33353C5.21371 6.33353 5 6.5574 5 6.83357V12.002C5 14.0203 6.08361 15.8964 7.44209 17.3022C8.79977 18.7072 10.5144 19.7289 11.9181 19.9851L12 20Z" fill="black"/>
    </Svg>
  );
};
