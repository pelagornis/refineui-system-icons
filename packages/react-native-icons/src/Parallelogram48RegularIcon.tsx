import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Parallelogram48RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.4307 13.8323C16.9336 12.7227 18.1128 12 19.4202 12H36.7581C39.069 12 40.6364 14.1614 39.7475 16.1226L31.5693 34.1677C31.0664 35.2773 29.8872 36 28.5798 36H11.2419C8.93097 36 7.36365 33.8386 8.25249 31.8774L16.4307 13.8323ZM19.4202 14.3459C19.1429 14.3459 18.8927 14.4992 18.7861 14.7345L10.6078 32.7796C10.4193 33.1957 10.7517 33.6541 11.2419 33.6541H28.5798C28.8571 33.6541 29.1073 33.5008 29.2139 33.2655L37.3922 15.2204C37.5807 14.8043 37.2483 14.3459 36.7581 14.3459H19.4202Z" fill="black"/>
    </Svg>
  );
};
