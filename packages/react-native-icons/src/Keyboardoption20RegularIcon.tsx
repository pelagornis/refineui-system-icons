import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Keyboardoption20RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M3.5416 6C3.24248 6 3 6.24255 3 6.54176C3 6.84096 3.24248 7.08351 3.5416 7.08351H7.35657C7.51809 7.08351 7.66505 7.1769 7.73369 7.32314L10.7991 13.8541C10.9364 14.1466 11.2303 14.3333 11.5533 14.3333H15.7917C16.0909 14.3333 16.3333 14.0908 16.3333 13.7916C16.3333 13.4924 16.0909 13.2498 15.7917 13.2498H11.9768C11.8152 13.2498 11.6683 13.1564 11.5996 13.0102L8.53425 6.47925C8.39696 6.18676 8.10304 6 7.78001 6H3.5416Z" fill="black"/>
<path d="M10.8917 6C10.5926 6 10.3501 6.24255 10.3501 6.54176C10.3501 6.84096 10.5926 7.08351 10.8917 7.08351H15.7917C16.0908 7.08351 16.3333 6.84096 16.3333 6.54176C16.3333 6.24255 16.0908 6 15.7917 6H10.8917Z" fill="black"/>
    </Svg>
  );
};
