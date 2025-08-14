import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Chevrondown48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M36.5865 15.5922C37.3675 14.8026 38.6334 14.8026 39.4144 15.5922C40.1952 16.3819 40.1953 17.6618 39.4144 18.4514L25.7497 32.2676C24.783 33.2442 23.2168 33.2441 22.2501 32.2676L8.5854 18.4514L8.4487 18.2974C7.80807 17.5032 7.85326 16.3325 8.5854 15.5922C9.31756 14.8519 10.4754 14.8063 11.2609 15.454L11.4132 15.5922L23.9999 28.3185L36.5865 15.5922Z" fill="black"/>
    </Svg>
  );
};
