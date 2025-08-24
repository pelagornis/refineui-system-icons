import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textaligncenter28RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M7.45888 8.75931C7.45888 8.33995 7.79841 8 8.21724 8H19.2826C19.7014 8 20.0409 8.33995 20.0409 8.75931C20.0409 9.17866 19.7014 9.51862 19.2826 9.51862H8.21724C7.79841 9.51862 7.45888 9.17866 7.45888 8.75931Z" fill="black"/>
<path d="M5 13.8333C5 13.414 5.33953 13.074 5.75836 13.074H21.7416C22.1605 13.074 22.5 13.414 22.5 13.8333C22.5 14.2527 22.1605 14.5926 21.7416 14.5926H5.75836C5.33953 14.5926 5 14.2527 5 13.8333Z" fill="black"/>
<path d="M10.6763 18.1481C10.2574 18.1481 9.9179 18.488 9.9179 18.9074C9.9179 19.3267 10.2574 19.6667 10.6763 19.6667H16.8237C17.2425 19.6667 17.582 19.3267 17.582 18.9074C17.582 18.488 17.2425 18.1481 16.8237 18.1481H10.6763Z" fill="black"/>
    </Svg>
  );
};
