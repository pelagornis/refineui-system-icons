import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Errorcircle24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M12 7.35C12.359 7.35 12.65 7.64102 12.65 8V13.5C12.65 13.859 12.359 14.15 12 14.15C11.641 14.15 11.35 13.859 11.35 13.5V8C11.35 7.64102 11.641 7.35 12 7.35Z" fill="black"/>
<path d="M12 16.3C12.359 16.3 12.65 16.009 12.65 15.65C12.65 15.291 12.359 15 12 15C11.641 15 11.35 15.291 11.35 15.65C11.35 16.009 11.641 16.3 12 16.3Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 18.7C15.7003 18.7 18.7 15.7003 18.7 12C18.7 8.29969 15.7003 5.3 12 5.3C8.29969 5.3 5.3 8.29969 5.3 12C5.3 15.7003 8.29969 18.7 12 18.7Z" fill="black"/>
    </Svg>
  );
};
