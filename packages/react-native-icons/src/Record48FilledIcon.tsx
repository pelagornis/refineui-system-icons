import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Record48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 40C32.8365 40 40 32.8365 40 24C40 15.1635 32.8365 8 24 8C15.1635 8 8 15.1635 8 24C8 32.8365 15.1635 40 24 40ZM24 34C29.5228 34 34 29.5229 34 24C34 18.4771 29.5228 14 24 14C18.4772 14 14 18.4771 14 24C14 29.5229 18.4772 34 24 34Z" fill="black"/>
    </Svg>
  );
};
