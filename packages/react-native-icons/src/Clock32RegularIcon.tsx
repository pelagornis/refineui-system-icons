import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Clock32RegularIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5333 9.66594C16.5333 9.18737 16.1453 8.79941 15.6667 8.79941C15.188 8.79941 14.8 9.18737 14.8 9.66594V15.7478C14.8 15.9246 14.8702 16.0942 14.9953 16.2192L19.0538 20.2771C19.3923 20.6155 19.941 20.6155 20.2795 20.2771C20.6179 19.9387 20.6179 19.39 20.2795 19.0516L16.7286 15.5013C16.6036 15.3763 16.5333 15.2068 16.5333 15.03V9.66594Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.3333 15.665C26.3333 21.5551 21.5577 26.33 15.6667 26.33C9.77563 26.33 5 21.5551 5 15.665C5 9.77488 9.77563 5 15.6667 5C21.5577 5 26.3333 9.77488 26.3333 15.665ZM24.6 15.665C24.6 20.598 20.6004 24.5969 15.6667 24.5969C10.7329 24.5969 6.73333 20.598 6.73333 15.665C6.73333 10.732 10.7329 6.73306 15.6667 6.73306C20.6004 6.73306 24.6 10.732 24.6 15.665Z" fill="black"/>
    </Svg>
  );
};
