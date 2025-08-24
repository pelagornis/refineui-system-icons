import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Server48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M14 15.7C13.282 15.7 12.7 16.282 12.7 17C12.7 17.718 13.282 18.3 14 18.3H22C22.718 18.3 23.3 17.718 23.3 17C23.3 16.282 22.718 15.7 22 15.7H14Z" fill="black"/>
<path d="M34 17C34 17.718 33.418 18.3 32.7 18.3C31.9821 18.3 31.4 17.718 31.4 17C31.4 16.282 31.9821 15.7 32.7 15.7C33.418 15.7 34 16.282 34 17Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 15C8 12.7909 9.79086 11 12 11H36C38.2091 11 40 12.7909 40 15V19C40 21.2091 38.2091 23 36 23H12C9.79086 23 8 21.2091 8 19V15ZM12 13.6H36C36.7732 13.6 37.4 14.2268 37.4 15V19C37.4 19.7732 36.7732 20.4 36 20.4H12C11.2268 20.4 10.6 19.7732 10.6 19V15C10.6 14.2268 11.2268 13.6 12 13.6Z" fill="black"/>
<path d="M12.7 31C12.7 30.282 13.282 29.7 14 29.7H22C22.718 29.7 23.3 30.282 23.3 31C23.3 31.718 22.718 32.3 22 32.3H14C13.282 32.3 12.7 31.718 12.7 31Z" fill="black"/>
<path d="M32.7 32.3C33.418 32.3 34 31.718 34 31C34 30.282 33.418 29.7 32.7 29.7C31.9821 29.7 31.4 30.282 31.4 31C31.4 31.718 31.9821 32.3 32.7 32.3Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 29C8 26.7909 9.79086 25 12 25H36C38.2091 25 40 26.7909 40 29V33C40 35.2091 38.2091 37 36 37H12C9.79086 37 8 35.2091 8 33V29ZM12 27.6H36C36.7732 27.6 37.4 28.2268 37.4 29V33C37.4 33.7732 36.7732 34.4 36 34.4H12C11.2268 34.4 10.6 33.7732 10.6 33V29C10.6 28.2268 11.2268 27.6 12 27.6Z" fill="black"/>
    </Svg>
  );
};
