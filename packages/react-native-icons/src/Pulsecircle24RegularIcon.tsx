import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Pulsecircle24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M10.2409 12.4353L10.6261 11.5543L11.7758 14.7267C12.0584 15.5065 13.1558 15.5214 13.4595 14.7496L14.1579 12.9747H15.9206C16.2796 12.9747 16.5706 12.6837 16.5706 12.3247C16.5706 11.9658 16.2796 11.6747 15.9206 11.6747H13.8854C13.5155 11.6747 13.1833 11.901 13.0479 12.2452L12.6374 13.2886L11.507 10.1696C11.23 9.4053 10.1619 9.37085 9.83621 10.1157L9.15459 11.6747H7.65C7.29101 11.6747 7 11.9658 7 12.3247C7 12.6837 7.29101 12.9747 7.65 12.9747H9.41626C9.77391 12.9747 10.0976 12.763 10.2409 12.4353Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 18.7C8.29969 18.7 5.3 15.7003 5.3 12C5.3 8.29969 8.29969 5.3 12 5.3C15.7003 5.3 18.7 8.29969 18.7 12C18.7 15.7003 15.7003 18.7 12 18.7Z" fill="black"/>
    </Svg>
  );
};
