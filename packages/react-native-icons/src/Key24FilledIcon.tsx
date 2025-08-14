import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Key24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M9.05542 9.5783C9.05542 9.79337 9.07528 10.1196 9.13726 10.4468L9.05542 9.5783Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.05542 9.5783C9.05542 6.51061 11.4925 4 14.5277 4C17.5629 4 20 6.51061 20 9.5783C20 12.5247 17.7532 14.9558 14.8856 15.1448L14.8667 15.1461L13.6807 15.1536V15.9716C13.6807 16.4 13.3373 16.7711 12.8847 16.7711H11.785V17.2632C11.785 17.6916 11.4415 18.0626 10.9889 18.0626H9.88917V18.7162C9.88917 19.4121 9.33357 20 8.61921 20H5.26996C4.5556 20 4 19.4121 4 18.7162V16.4527C4 16.1166 4.13051 15.7916 4.3671 15.5498L9.17908 10.6323C9.16278 10.5687 9.14839 10.5056 9.13726 10.4468L9.05542 9.5783ZM17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8C15 7.44772 15.4477 7 16 7C16.5523 7 17 7.44772 17 8Z" fill="black"/>
    </Svg>
  );
};
