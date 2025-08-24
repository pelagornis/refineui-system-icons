import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Dualscreen24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M14.35 15.5C14.35 15.141 14.641 14.85 15 14.85H16C16.359 14.85 16.65 15.141 16.65 15.5C16.65 15.859 16.359 16.15 16 16.15H15C14.641 16.15 14.35 15.859 14.35 15.5Z" fill="black"/>
<path d="M8 14.85C7.64102 14.85 7.35 15.141 7.35 15.5C7.35 15.859 7.64102 16.15 8 16.15H9C9.35898 16.15 9.65 15.859 9.65 15.5C9.65 15.141 9.35898 14.85 9 14.85H8Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 6C4.89543 6 4 6.89543 4 8V16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V8C20 6.89543 19.1046 6 18 6H6ZM13.15 7.3C12.8739 7.3 12.65 7.52386 12.65 7.8V16.2C12.65 16.4761 12.8739 16.7 13.15 16.7H18C18.3866 16.7 18.7 16.3866 18.7 16V8C18.7 7.6134 18.3866 7.3 18 7.3H13.15ZM10.85 7.3C11.1261 7.3 11.35 7.52386 11.35 7.8V16.2C11.35 16.4761 11.1261 16.7 10.85 16.7H6C5.6134 16.7 5.3 16.3866 5.3 16V8C5.3 7.6134 5.6134 7.3 6 7.3H10.85Z" fill="black"/>
    </Svg>
  );
};
