import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Numbercircle120FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.66667 16.3333C13.3486 16.3333 16.3333 13.3486 16.3333 9.66667C16.3333 5.98477 13.3486 3 9.66667 3C5.98477 3 3 5.98477 3 9.66667C3 13.3486 5.98477 16.3333 9.66667 16.3333ZM9.54167 12.1667V8.37619L8.80422 9.13141C8.59522 9.34545 8.25228 9.34954 8.03824 9.14054C7.8242 8.93154 7.82012 8.5886 8.02912 8.37456L9.55352 6.81341C9.96461 6.39241 10.625 6.7182 10.625 7.25218V12.1667C10.625 12.4658 10.3825 12.7083 10.0833 12.7083C9.78418 12.7083 9.54167 12.4658 9.54167 12.1667Z" fill="black"/>
    </Svg>
  );
};
