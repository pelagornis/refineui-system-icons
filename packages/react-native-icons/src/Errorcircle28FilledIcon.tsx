import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Errorcircle28FilledIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3333 23.6667C19.488 23.6667 23.6667 19.488 23.6667 14.3333C23.6667 9.17868 19.488 5 14.3333 5C9.17868 5 5 9.17868 5 14.3333C5 19.488 9.17868 23.6667 14.3333 23.6667ZM15.0917 9.66667C15.0917 9.24785 14.7521 8.90833 14.3333 8.90833C13.9145 8.90833 13.575 9.24785 13.575 9.66667V16.0833C13.575 16.5021 13.9145 16.8417 14.3333 16.8417C14.7521 16.8417 15.0917 16.5021 15.0917 16.0833V9.66667ZM14.3333 19.35C14.7521 19.35 15.0916 19.0105 15.0916 18.5917C15.0916 18.1728 14.7521 17.8333 14.3333 17.8333C13.9145 17.8333 13.575 18.1728 13.575 18.5917C13.575 19.0105 13.9145 19.35 14.3333 19.35Z" fill="black"/>
    </Svg>
  );
};
