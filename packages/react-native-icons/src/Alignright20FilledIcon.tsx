import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Alignright20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M16.4584 3C16.1593 3 15.9168 3.24247 15.9168 3.54158L15.9168 15.7918C15.9168 16.0909 16.1593 16.3333 16.4584 16.3333C16.7575 16.3333 17 16.0909 17 15.7918L17 3.54158C17 3.24247 16.7575 3 16.4584 3Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.4689 4.41659C14.3893 4.41659 15.1354 5.16266 15.1354 6.08299L15.1354 7.56275C15.1354 8.48308 14.3893 9.22915 13.4689 9.22915L5.33495 9.22915C4.41462 9.22915 3.66854 8.48308 3.66854 7.56275L3.66854 6.08299C3.66854 5.16266 4.41462 4.41659 5.33495 4.41659L13.4689 4.41659Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.1354 11.7706C15.1354 10.8502 14.3893 10.1042 13.4689 10.1042L7.98113 10.1042C7.0608 10.1042 6.31473 10.8502 6.31473 11.7706L6.31473 13.2503C6.31473 14.1707 7.06081 14.9167 7.98113 14.9167L13.469 14.9167C14.3893 14.9167 15.1354 14.1707 15.1354 13.2503L15.1354 11.7706Z" fill="black"/>
    </Svg>
  );
};
