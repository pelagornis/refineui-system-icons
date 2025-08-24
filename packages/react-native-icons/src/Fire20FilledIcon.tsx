import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Fire20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.96413 9.88899C6.61844 9.29939 6.23307 8.843 5.83333 9.44077C5.50918 10.1013 5 11.5637 5 12.3486C5 15.1016 7.23858 17.3333 10 17.3333C12.7614 17.3333 15 15.1016 15 12.3486C15 10.9709 14.252 9.87957 13.5291 8.82481L13.5134 8.80185C12.5 7.32319 12.0833 6.11758 11.6667 4.04059C11.0939 3.81274 8.96534 4.54938 7.91667 6.11759C7.3124 7.02122 7.627 8.18283 7.89748 9.18153C7.92486 9.28263 7.95179 9.38206 7.97727 9.47939C8.03523 9.7008 8.08568 9.91131 8.11686 10.1058C8.18553 10.5341 8.16069 10.8846 7.91667 11.1024C7.72167 11.2764 7.47833 10.827 7.2021 10.3169C7.1989 10.311 7.19569 10.3051 7.19247 10.2991C7.11859 10.1627 7.04238 10.0224 6.96413 9.88899Z" fill="black"/>
    </Svg>
  );
};
