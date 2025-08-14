import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Flash20RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.41753 3.45422C6.53578 3.17865 6.80684 3 7.10675 3H12.1722C12.6842 3 13.0457 3.50163 12.8836 3.98725L11.9457 6.79758H14.9152C15.5835 6.79758 15.9181 7.60571 15.4452 8.07799L7.40591 16.1078C6.88433 16.6287 6.00278 16.1634 6.13879 15.4389L7.16157 9.99051H4.75078C4.21224 9.99051 3.84923 9.43982 4.06156 8.94497L6.41753 3.45422ZM7.32644 4.08316L5.25649 8.90734H7.56328C8.03292 8.90734 8.38702 9.33403 8.30038 9.79557L7.40213 14.5805L14.1099 7.88074H11.4831C10.9711 7.88074 10.6096 7.37911 10.7717 6.8935L11.7096 4.08316H7.32644Z" fill="black"/>
    </Svg>
  );
};
