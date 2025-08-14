import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Ticket20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.33 6.83312C16.33 6.373 15.957 6 15.4969 6H3.83312C3.373 6 3 6.373 3 6.83313V8.49937C3.92024 8.49937 4.66625 9.24538 4.66625 10.1656C4.66625 11.0859 3.92024 11.8319 3 11.8319V13.4981C3 13.9582 3.373 14.3313 3.83312 14.3313H15.4969C15.957 14.3313 16.33 13.9582 16.33 13.4981V11.8319C15.4098 11.8319 14.6637 11.0859 14.6637 10.1656C14.6637 9.24538 15.4098 8.49937 16.33 8.49937V6.83312Z" fill="black"/>
    </Svg>
  );
};
