import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Addsquare32RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M11 16.3316C10.6318 16.3316 10.3333 16.0331 10.3333 15.665C10.3333 15.2969 10.6318 14.9984 11 14.9984H15V10.9991C15 10.6309 15.2985 10.3325 15.6667 10.3325C16.0349 10.3325 16.3333 10.6309 16.3333 10.9991V14.9984H20.3333C20.7015 14.9984 21 15.2969 21 15.665C21 16.0331 20.7015 16.3316 20.3333 16.3316H16.3333V20.3309C16.3333 20.6991 16.0349 20.9975 15.6667 20.9975C15.2985 20.9975 15 20.6991 15 20.3309V16.3316H11Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 8.99937C5 6.79058 6.79086 5 9 5H22.3333C24.5425 5 26.3333 6.79058 26.3333 8.99937V22.3306C26.3333 24.5394 24.5425 26.33 22.3333 26.33H9C6.79086 26.33 5 24.5394 5 22.3306V8.99937ZM9 6.73306H22.3333C23.5852 6.73306 24.6 7.74773 24.6 8.99937V22.3306C24.6 23.5823 23.5852 24.5969 22.3333 24.5969H9C7.74815 24.5969 6.73333 23.5823 6.73333 22.3306V8.99937C6.73333 7.74773 7.74815 6.73306 9 6.73306Z" fill="black"/>
    </Svg>
  );
};
