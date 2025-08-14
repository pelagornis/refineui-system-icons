import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textboxalignmiddleright20RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M5.58269 8.20703C5.58269 7.90795 5.82514 7.6655 6.12422 7.6655H13.2058C13.5049 7.6655 13.7473 7.90795 13.7473 8.20703C13.7473 8.50611 13.5049 8.74856 13.2058 8.74856H6.12422C5.82514 8.74856 5.58269 8.50611 5.58269 8.20703Z" fill="black"/>
<path d="M8.20703 10.5814C7.90795 10.5814 7.6655 10.8239 7.6655 11.123C7.6655 11.422 7.90795 11.6645 8.20703 11.6645H13.2058C13.5049 11.6645 13.7473 11.422 13.7473 11.123C13.7473 10.8239 13.5049 10.5814 13.2058 10.5814H8.20703Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.66625 3C3.74601 3 3 3.74601 3 4.66625V14.6637C3 15.584 3.74601 16.33 4.66625 16.33H14.6637C15.584 16.33 16.33 15.584 16.33 14.6637V4.66625C16.33 3.74601 15.584 3 14.6637 3H4.66625ZM14.6637 4.08306H4.66625C4.34416 4.08306 4.08306 4.34416 4.08306 4.66625V14.6637C4.08306 14.9858 4.34416 15.2469 4.66625 15.2469H14.6637C14.9858 15.2469 15.2469 14.9858 15.2469 14.6637V4.66625C15.2469 4.34416 14.9858 4.08306 14.6637 4.08306Z" fill="black"/>
    </Svg>
  );
};
