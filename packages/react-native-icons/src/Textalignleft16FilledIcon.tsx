import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textalignleft16FilledIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 16 16"
      fill="none"
      {{...props}}
    >
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.650024 3.7C0.650024 3.3134 0.948501 3 1.31669 3H7.31669C7.68488 3 7.98336 3.3134 7.98336 3.7C7.98336 4.0866 7.68488 4.4 7.31669 4.4H1.31669C0.948501 4.4 0.650024 4.0866 0.650024 3.7Z" fill="black"/>
<path d="M0.650024 6.5C0.650024 6.1134 0.948501 5.8 1.31669 5.8H9.98336C10.3515 5.8 10.65 6.1134 10.65 6.5C10.65 6.8866 10.3515 7.2 9.98336 7.2H1.31669C0.948501 7.2 0.650024 6.8866 0.650024 6.5Z" fill="black"/>
<path d="M1.31669 8.6C0.948501 8.6 0.650024 8.9134 0.650024 9.3C0.650024 9.6866 0.948501 10 1.31669 10H4.65002C5.01821 10 5.31669 9.6866 5.31669 9.3C5.31669 8.9134 5.01821 8.6 4.65002 8.6H1.31669Z" fill="black"/>
    </Svg>
  );
};
