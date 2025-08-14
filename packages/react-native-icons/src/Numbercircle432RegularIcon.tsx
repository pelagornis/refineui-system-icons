import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Numbercircle432RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6667 10.8C15.3486 10.8 15.0561 10.9742 14.9046 11.2539L12.2379 16.177C12.1693 16.3037 12.1333 16.4456 12.1333 16.5897V17.2051C12.1333 17.6838 12.5214 18.0718 13 18.0718H15.8667V19.6667C15.8667 20.1453 16.2547 20.5333 16.7333 20.5333C17.212 20.5333 17.6 20.1453 17.6 19.6667V18.0718H18.3333C18.812 18.0718 19.2 17.6838 19.2 17.2051C19.2 16.7265 18.812 16.3385 18.3333 16.3385H17.6V11.6667C17.6 11.188 17.212 10.8 16.7333 10.8H15.6667ZM15.8667 13.1171V16.3385H14.1218L15.8667 13.1171Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.3333 15.6667C26.3333 21.5577 21.5577 26.3333 15.6667 26.3333C9.77563 26.3333 5 21.5577 5 15.6667C5 9.77563 9.77563 5 15.6667 5C21.5577 5 26.3333 9.77563 26.3333 15.6667ZM24.6 15.6667C24.6 20.6004 20.6004 24.6 15.6667 24.6C10.7329 24.6 6.73333 20.6004 6.73333 15.6667C6.73333 10.7329 10.7329 6.73333 15.6667 6.73333C20.6004 6.73333 24.6 10.7329 24.6 15.6667Z" fill="black"/>
    </Svg>
  );
};
