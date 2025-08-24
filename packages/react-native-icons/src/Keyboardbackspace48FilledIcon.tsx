import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Keyboardbackspace48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M21.2115 14.6925C21.9582 15.5283 21.8628 16.7912 20.9984 17.5132L15.6263 22.0002H37.9317C39.074 22.0002 40 22.8955 40 24C40 25.1045 39.074 25.9998 37.9317 25.9998H15.6263L20.9984 30.4868C21.8628 31.2088 21.9582 32.4717 21.2115 33.3075C20.4647 34.1433 19.1587 34.2355 18.2943 33.5135L8.71621 25.5133C7.76126 24.7157 7.76126 23.2843 8.71621 22.4867L18.2943 14.4865C19.1587 13.7645 20.4647 13.8567 21.2115 14.6925Z" fill="black"/>
    </Svg>
  );
};
