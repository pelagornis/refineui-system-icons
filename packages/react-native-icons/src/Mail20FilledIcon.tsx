import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Mail20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M15.6797 14.167C15.6795 14.2682 15.5979 14.3495 15.4971 14.3496H3.83301C3.73219 14.3495 3.65057 14.2682 3.65039 14.167V6.97754L8.4502 10.5781C9.1701 11.1182 10.16 11.1182 10.8799 10.5781L15.6797 6.97656V14.167ZM13.4766 5.65039L9.66504 8.50977L5.85352 5.65039H13.4766Z" fill="black" stroke="black" stroke-width="1.3"/>
    </Svg>
  );
};
