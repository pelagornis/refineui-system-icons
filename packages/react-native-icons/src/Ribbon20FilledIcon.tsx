import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Ribbon20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M10 13.049C12.7614 13.049 15 10.7995 15 8.02452C15 5.24956 12.7614 3 10 3C7.23857 3 5 5.24956 5 8.02452C5 10.7995 7.23857 13.049 10 13.049Z" fill="black"/>
<path d="M7.26049 13.0553C7.11983 12.9923 6.95831 13.0935 6.95831 13.2476V15.5784C6.95831 16.1803 7.62594 16.5394 8.12434 16.2055L10 14.9489L11.8756 16.2055C12.3741 16.5394 13.0416 16.1803 13.0416 15.5784V13.2743C13.0416 13.114 12.8665 13.011 12.7212 13.0788C12.0791 13.3783 11.0512 13.6999 10 13.6999C8.92133 13.6999 7.94321 13.3612 7.26049 13.0553Z" fill="black"/>
    </Svg>
  );
};
