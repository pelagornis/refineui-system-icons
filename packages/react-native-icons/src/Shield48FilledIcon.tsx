import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Shield48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 40L24.1638 39.9701C26.9712 39.4578 30.4005 37.4143 33.1158 34.6044C35.8328 31.7928 38 28.0407 38 24.004V13.6671C38 13.1148 37.5726 12.6671 37.0454 12.6671C34.5121 12.6671 31.8238 11.8847 29.5194 10.9111C27.2168 9.93822 25.3771 8.80859 24.5591 8.18946C24.2254 7.93685 23.7746 7.93685 23.4409 8.18946C22.6229 8.80866 20.7838 9.93829 18.4817 10.9111C16.1777 11.8847 13.4894 12.6671 10.9546 12.6671C10.4274 12.6671 10 13.1148 10 13.6671V24.004C10 28.0407 12.1672 31.7928 14.8842 34.6044C17.5995 37.4143 21.0288 39.4578 23.8362 39.9701L24 40Z" fill="black"/>
    </Svg>
  );
};
