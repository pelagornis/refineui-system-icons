import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Ioschevronrtl32FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M18.8649 20.7331C18.2761 20.2912 18.157 19.4557 18.5989 18.867L20.7004 16.0667C20.8783 15.8297 20.8783 15.5037 20.7004 15.2666L18.5989 12.4664C18.157 11.8776 18.2761 11.0421 18.8649 10.6002C19.4537 10.1584 20.2892 10.2775 20.7311 10.8663L23.7332 14.8666C24.0889 15.3407 24.0889 15.9927 23.7332 16.4667L20.7311 20.4671C20.2892 21.0559 19.4537 21.175 18.8649 20.7331Z" fill="black"/>
    </Svg>
  );
};
