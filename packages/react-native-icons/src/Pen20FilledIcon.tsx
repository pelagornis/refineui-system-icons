import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Pen20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.615 3.63797C13.4656 2.78735 14.8447 2.78735 15.6954 3.63797C16.546 4.48859 16.546 5.86773 15.6954 6.71835L14.8587 7.55498L15.6998 8.41483C15.9175 8.63737 15.9155 8.99365 15.6954 9.21378L13.4751 11.4341C13.2532 11.6559 12.8935 11.6559 12.6717 11.4341C12.4498 11.2122 12.4498 10.8525 12.6717 10.6306L14.3419 8.96046C14.4265 8.8758 14.4273 8.73877 14.3436 8.65317L14.2098 8.51638C14.1247 8.42944 13.9851 8.42867 13.8991 8.51466L6.79348 15.6202C6.57285 15.8409 6.2866 15.984 5.97771 16.0281L3.89805 16.3252C3.37893 16.3994 2.93396 15.9544 3.00812 15.4353L3.30522 13.3556C3.34934 13.0467 3.49247 12.7605 3.7131 12.5399L12.615 3.63797Z" fill="black"/>
    </Svg>
  );
};
