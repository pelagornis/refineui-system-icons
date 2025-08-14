import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Pulse28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M12.0547 12.2708L11.1952 14.1624C10.9113 14.7872 10.2884 15.1883 9.60209 15.1883H6.16657C5.52229 15.1883 5 14.666 5 14.0218C5 13.3775 5.52229 12.8552 6.16657 12.8552H9.22645L10.512 10.026C11.1565 8.60772 13.1935 8.67524 13.7427 10.1331L16.0113 16.156L16.9165 13.9427C17.1855 13.2849 17.8255 12.8552 18.5361 12.8552H22.5001C23.1444 12.8552 23.6667 13.3775 23.6667 14.0218C23.6667 14.666 23.1444 15.1883 22.5001 15.1883H18.9278L17.6087 18.4139C17.0067 19.8859 14.912 19.8566 14.3515 18.3684L12.0547 12.2708Z" fill="black"/>
    </Svg>
  );
};
