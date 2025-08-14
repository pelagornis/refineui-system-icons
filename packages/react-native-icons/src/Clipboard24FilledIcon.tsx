import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Clipboard24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.1733 4.95239H16.5113C17.3335 4.95239 18 5.65594 18 6.52381V18.4286C18 19.2964 17.3335 20 16.5113 20H7.48872C6.66652 20 6 19.2964 6 18.4286V6.52381C6 5.65594 6.66652 4.95239 7.48872 4.95239H8.82676C9.0544 4.3923 9.58155 4 10.1955 4H13.8045C14.4185 4 14.9456 4.3923 15.1733 4.95239ZM9.87972 5.57143C9.87972 5.38733 10.0211 5.23809 10.1955 5.23809H13.8045C13.9789 5.23809 14.1203 5.38733 14.1203 5.57143C14.1203 5.75552 13.9789 5.90476 13.8045 5.90476H10.1955C10.0211 5.90476 9.87972 5.75552 9.87972 5.57143Z" fill="black"/>
    </Svg>
  );
};
