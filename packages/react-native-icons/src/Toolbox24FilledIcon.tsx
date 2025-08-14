import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Toolbox24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M20 14.3H15.65V14.65C15.65 15.009 15.359 15.3 15 15.3C14.641 15.3 14.35 15.009 14.35 14.65V14.3H9.65V14.65C9.65 15.009 9.35899 15.3 9 15.3C8.64102 15.3 8.35 15.009 8.35 14.65V14.3H4V18.15C4 18.7023 4.44772 19.15 5 19.15H19C19.5523 19.15 20 18.7023 20 18.15V14.3Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.85 8.65H6.91421C6.649 8.65 6.39464 8.75536 6.20711 8.94289L4.29289 10.8571C4.10536 11.0446 4 11.299 4 11.5642V13H8.35V12.65C8.35 12.291 8.64102 12 9 12C9.35899 12 9.65 12.291 9.65 12.65V13H14.35V12.65C14.35 12.291 14.641 12 15 12C15.359 12 15.65 12.291 15.65 12.65V13H20V11.5642C20 11.299 19.8946 11.0446 19.7071 10.8571L17.7929 8.94289C17.6054 8.75536 17.351 8.65 17.0858 8.65H15.15V7C15.15 6.44772 14.7023 6 14.15 6H9.85C9.29772 6 8.85 6.44771 8.85 7V8.65ZM13.85 7.8V8.65H10.15V7.8C10.15 7.52386 10.3739 7.3 10.65 7.3H13.35C13.6261 7.3 13.85 7.52386 13.85 7.8Z" fill="black"/>
    </Svg>
  );
};
