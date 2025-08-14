import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Star24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.9689 4.63206C11.3937 3.78932 12.6063 3.78931 13.0311 4.63206L14.6515 7.84643C14.7981 8.13738 15.0628 8.3526 15.3792 8.43819L19.1499 9.45818C20.037 9.69816 20.2977 10.8212 19.6057 11.4218L17.0948 13.6009C16.7941 13.8619 16.6511 14.2586 16.7168 14.6494L17.3918 18.6663C17.5467 19.588 16.5818 20.2948 15.7391 19.8769L12.5155 18.2783C12.191 18.1173 11.809 18.1173 11.4845 18.2783L8.26087 19.8769C7.41818 20.2948 6.45334 19.588 6.60823 18.6663L7.2832 14.6494C7.34887 14.2586 7.20586 13.8619 6.90521 13.6009L4.3943 11.4218C3.70228 10.8212 3.96297 9.69816 4.8501 9.45818L8.62077 8.43819C8.93718 8.3526 9.20186 8.13738 9.34853 7.84643L10.9689 4.63206Z" fill="black"/>
    </Svg>
  );
};
