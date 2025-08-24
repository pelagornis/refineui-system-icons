import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Chevronleft20RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M13.3194 15.4831C13.4631 15.6899 13.447 15.9764 13.2665 16.1658C13.0601 16.3821 12.7172 16.3899 12.5007 16.1837L6.23233 10.2094C5.94201 9.93237 5.92372 9.48044 6.1778 9.18164L6.23233 9.12386L12.5007 3.14953L12.5869 3.08199C12.8004 2.94831 13.0859 2.97883 13.2665 3.16824C13.4467 3.35762 13.4629 3.64346 13.3194 3.85014L13.2478 3.93395L7.23338 9.66661L13.2478 15.4001L13.3194 15.4831Z" fill="black"/>
    </Svg>
  );
};
