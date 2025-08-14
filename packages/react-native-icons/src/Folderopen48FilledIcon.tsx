import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Folderopen48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 14.9774C8 13.333 9.23363 12 10.7554 12H17.5784C18.3091 12 19.01 12.3137 19.5267 12.8721L22.7233 16.3263C22.8329 16.4447 22.9816 16.5113 23.1366 16.5113H34.1344C35.6561 16.5113 36.8898 17.8443 36.8898 19.4887V20H38.0035C39.2833 20 40.2323 21.1902 39.95 22.4412L37.2416 34.4412C37.0358 35.3528 36.2276 36 35.2951 36H34.1398L34.1344 36H10.7554L10.7499 36H10.4975C9.88306 36 9.34488 35.7257 8.9826 35.302C8.3818 34.7558 8 33.9374 8 33.0226V14.9774ZM10.1709 26.3815L11.2594 21.5588C11.4651 20.6472 12.2734 20 13.2059 20H34.7189V19.4887C34.7189 19.1399 34.4572 18.8571 34.1344 18.8571H23.1366C22.4058 18.8571 21.705 18.5434 21.1882 17.9851L17.9916 14.5308C17.882 14.4124 17.7334 14.3459 17.5784 14.3459H10.7554C10.4326 14.3459 10.1709 14.6286 10.1709 14.9774V26.3815Z" fill="black"/>
    </Svg>
  );
};
