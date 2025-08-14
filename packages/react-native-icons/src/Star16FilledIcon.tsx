import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Star16FilledIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 16 16"
      fill="none"
      {{...props}}
    >
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.64594 3.42137C7.92916 2.85954 8.7375 2.85954 9.02072 3.42137L10.101 5.56428C10.1988 5.75826 10.3752 5.90173 10.5862 5.9588L13.0999 6.63879C13.6914 6.79877 13.8651 7.54747 13.4038 7.94786L11.7299 9.40063C11.5294 9.57458 11.4341 9.83905 11.4779 10.0996L11.9278 12.7775C12.0311 13.392 11.3879 13.8632 10.8261 13.5846L8.67703 12.5188C8.46067 12.4115 8.206 12.4115 7.98964 12.5188L5.84058 13.5846C5.27879 13.8632 4.63556 13.392 4.73882 12.7775L5.1888 10.0996C5.23258 9.83905 5.13724 9.57458 4.93681 9.40063L3.26287 7.94786C2.80152 7.54747 2.97531 6.79877 3.56673 6.63879L6.08051 5.9588C6.29146 5.90173 6.46791 5.75826 6.56569 5.56428L7.64594 3.42137Z" fill="black"/>
    </Svg>
  );
};
