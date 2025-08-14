import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Luggage24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 4.34375C8.14102 4.34375 7.85 4.63476 7.85 4.99375C7.85 5.35274 8.14102 5.64375 8.5 5.64375H8.85V7.46961H8C6.89543 7.46961 6 8.36504 6 9.46961V17.3537C6 18.4582 6.89543 19.3537 8 19.3537H8.70001V19.6947C8.70001 20.0537 8.99103 20.3447 9.35001 20.3447C9.709 20.3447 10 20.0537 10 19.6947V19.3537H14V19.6947C14 20.0537 14.291 20.3447 14.65 20.3447C15.009 20.3447 15.3 20.0537 15.3 19.6947V19.3537H16C17.1046 19.3537 18 18.4582 18 17.3537V9.46961C18 8.36504 17.1046 7.46961 16 7.46961H15.15V5.64375H15.5C15.859 5.64375 16.15 5.35274 16.15 4.99375C16.15 4.63476 15.859 4.34375 15.5 4.34375H8.5ZM13.85 7.46961V5.64375H10.15V7.46961H13.85Z" fill="black"/>
    </Svg>
  );
};
