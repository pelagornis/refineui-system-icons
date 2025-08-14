import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Ioschevronltr28FilledIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4932 9.23353C12.0084 9.62016 12.1126 10.3512 11.726 10.8664L9.88717 13.3166C9.73153 13.524 9.73153 13.8093 9.88717 14.0167L11.726 16.4669C12.1126 16.9821 12.0084 17.7132 11.4932 18.0998C10.978 18.4864 10.2469 18.3822 9.8603 17.867L7.23346 14.3667C6.92218 13.9519 6.92218 13.3814 7.23347 12.9666L9.8603 9.46631C10.2469 8.95112 10.978 8.84691 11.4932 9.23353Z" fill="black"/>
    </Svg>
  );
};
