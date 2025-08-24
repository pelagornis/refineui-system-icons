import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Homecheckmark32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.1774 5.46914L25.1774 10.9681C25.901 11.4655 26.3333 12.2872 26.3333 13.1652V22.4274C26.3333 24.6361 24.5425 26.4267 22.3333 26.4267H9C6.79086 26.4267 5 24.6361 5 22.4274V13.1652C5 12.2872 5.43231 11.4655 6.15592 10.9681L14.1559 5.46914C15.0659 4.84362 16.2674 4.84362 17.1774 5.46914ZM11.8047 17.8996C11.7163 17.8112 11.6667 17.6914 11.6667 17.5664C11.6667 17.3061 11.8777 17.095 12.1381 17.095C12.2631 17.095 12.383 17.1447 12.4714 17.2331L14.3333 19.0947L19.5333 15.1954C19.5752 15.164 19.6214 15.1396 19.6702 15.1228C19.7223 15.1048 19.7774 15.0954 19.8333 15.0954C20.1095 15.0954 20.3333 15.3192 20.3333 15.5953V15.631C20.3333 15.7136 20.2952 15.7916 20.2299 15.8424L14.7979 20.0665C14.5325 20.2729 14.1549 20.2494 13.9172 20.0117L11.8047 17.8996Z" fill="black"/>
    </Svg>
  );
};
