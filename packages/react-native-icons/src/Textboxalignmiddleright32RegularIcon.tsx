import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textboxalignmiddleright32RegularIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.13333 13.3333C9.13333 12.8547 9.52135 12.4667 10 12.4667H21.3333C21.812 12.4667 22.2 12.8547 22.2 13.3333C22.2 13.812 21.812 14.2 21.3333 14.2H10C9.52135 14.2 9.13333 13.812 9.13333 13.3333Z" fill="black"/>
<path d="M13.3333 17.1333C12.8547 17.1333 12.4667 17.5214 12.4667 18C12.4667 18.4786 12.8547 18.8667 13.3333 18.8667H21.3333C21.812 18.8667 22.2 18.4786 22.2 18C22.2 17.5214 21.812 17.1333 21.3333 17.1333H13.3333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.66667 5C6.19391 5 5 6.19391 5 7.66667V23.6667C5 25.1394 6.19391 26.3333 7.66667 26.3333H23.6667C25.1394 26.3333 26.3333 25.1394 26.3333 23.6667V7.66667C26.3333 6.19391 25.1394 5 23.6667 5H7.66667ZM23.6667 6.73333H7.66667C7.1512 6.73333 6.73333 7.1512 6.73333 7.66667V23.6667C6.73333 24.1821 7.1512 24.6 7.66667 24.6H23.6667C24.1821 24.6 24.6 24.1821 24.6 23.6667V7.66667C24.6 7.1512 24.1821 6.73333 23.6667 6.73333Z" fill="black"/>
    </Svg>
  );
};
