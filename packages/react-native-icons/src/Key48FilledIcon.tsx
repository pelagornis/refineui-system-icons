import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Key48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M18.1108 19.1566C18.1108 19.5867 18.1506 20.2391 18.2745 20.8936L18.1108 19.1566Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.1108 19.1566C18.1108 13.0212 22.985 8 29.0554 8C35.1259 8 40 13.0212 40 19.1566C40 25.0494 35.5063 29.9116 29.7713 30.2897L29.7334 30.2922L27.3615 30.3072V31.9432C27.3615 32.8 26.6746 33.5421 25.7694 33.5421H23.5699V34.5263C23.5699 35.3831 22.8831 36.1253 21.9779 36.1253H19.7783V37.4324C19.7783 38.8242 18.6671 40 17.2384 40H10.5399C9.11121 40 8 38.8242 8 37.4324V32.9054C8 32.2332 8.26103 31.5831 8.7342 31.0996L18.3582 21.2646C18.3256 21.1373 18.2968 21.0111 18.2745 20.8936L18.1108 19.1566ZM34 16C34 17.1046 33.1046 18 32 18C30.8954 18 30 17.1046 30 16C30 14.8954 30.8954 14 32 14C33.1046 14 34 14.8954 34 16Z" fill="black"/>
    </Svg>
  );
};
