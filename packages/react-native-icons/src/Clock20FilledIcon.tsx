import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Clock20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.66667 16.33C13.3486 16.33 16.3333 13.346 16.3333 9.665C16.3333 5.98403 13.3486 3 9.66667 3C5.98477 3 3 5.98403 3 9.665C3 13.346 5.98477 16.33 9.66667 16.33ZM10.2084 5.91594C10.2084 5.61686 9.96584 5.37441 9.66667 5.37441C9.36749 5.37441 9.12498 5.61686 9.12498 5.91594V9.71676C9.12498 9.82724 9.16888 9.9332 9.24702 10.0113L11.7837 12.5473C11.9952 12.7588 12.3381 12.7588 12.5497 12.5473C12.7612 12.3358 12.7612 11.9929 12.5497 11.7814L10.3304 9.5627C10.2523 9.48458 10.2084 9.37862 10.2084 9.26814V5.91594Z" fill="black"/>
    </Svg>
  );
};
