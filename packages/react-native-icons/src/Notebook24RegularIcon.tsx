import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Notebook24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10H13C14.1046 10 15 9.10457 15 8C15 6.89543 14.1046 6 13 6H9ZM13 7.3H9C8.6134 7.3 8.3 7.6134 8.3 8C8.3 8.3866 8.6134 8.7 9 8.7H13C13.3866 8.7 13.7 8.3866 13.7 8C13.7 7.6134 13.3866 7.3 13 7.3Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 4C5.44772 4 5 4.44772 5 5V19C5 19.5523 5.44772 20 6 20H16C16.5523 20 17 19.5523 17 19V5C17 4.44772 16.5523 4 16 4H6ZM6.8 5.3C6.52386 5.3 6.3 5.52386 6.3 5.8V18.2C6.3 18.4761 6.52386 18.7 6.8 18.7H15.2C15.4761 18.7 15.7 18.4761 15.7 18.2V5.8C15.7 5.52386 15.4761 5.3 15.2 5.3H6.8Z" fill="black"/>
<path d="M19 7.25C19 6.89102 18.709 6.6 18.35 6.6C17.991 6.6 17.7 6.89101 17.7 7.25V8.75C17.7 9.10898 17.991 9.4 18.35 9.4C18.709 9.4 19 9.10898 19 8.75V7.25Z" fill="black"/>
<path d="M18.35 10.6C18.709 10.6 19 10.891 19 11.25V12.75C19 13.109 18.709 13.4 18.35 13.4C17.991 13.4 17.7 13.109 17.7 12.75V11.25C17.7 10.891 17.991 10.6 18.35 10.6Z" fill="black"/>
<path d="M19 15.25C19 14.891 18.709 14.6 18.35 14.6C17.991 14.6 17.7 14.891 17.7 15.25V16.75C17.7 17.109 17.991 17.4 18.35 17.4C18.709 17.4 19 17.109 19 16.75V15.25Z" fill="black"/>
    </Svg>
  );
};
