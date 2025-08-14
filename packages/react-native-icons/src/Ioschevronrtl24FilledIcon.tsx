import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Ioschevronrtl24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M14.1475 15.7998C13.7058 15.4683 13.6164 14.8414 13.9479 14.3997L15.5245 12.2989C15.6579 12.121 15.6579 11.8764 15.5245 11.6986L13.9479 9.59776C13.6164 9.15603 13.7058 8.5292 14.1475 8.1977C14.5892 7.8662 15.216 7.95556 15.5475 8.39729L17.7998 11.3985C18.0667 11.7541 18.0667 12.2433 17.7998 12.599L15.5475 15.6002C15.216 16.0419 14.5892 16.1313 14.1475 15.7998Z" fill="black"/>
    </Svg>
  );
};
