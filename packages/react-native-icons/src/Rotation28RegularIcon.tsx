import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Rotation28RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.75838 4C5.17722 4 5.51675 4.33954 5.51675 4.75838V12.5649C7.0071 12.61 8.9096 13.033 10.5542 14.1864C12.4246 15.4982 13.8866 17.704 14.0732 21.1532H21.9116C22.3305 21.1532 22.67 21.4928 22.67 21.9116C22.67 22.3305 22.3305 22.67 21.9116 22.67H5.92511C4.8619 22.67 4 21.8081 4 20.7449V4.75838C4 4.33954 4.33954 4 4.75838 4ZM12.5541 21.1532C12.3736 18.1885 11.1333 16.4452 9.68331 15.4282C8.34185 14.4874 6.75954 14.1271 5.51675 14.0823V20.7449C5.51675 20.9704 5.69958 21.1532 5.92511 21.1532H12.5541Z" fill="black"/>
    </Svg>
  );
};
