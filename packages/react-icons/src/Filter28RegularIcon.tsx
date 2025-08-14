import React from 'react';
import { IconProps } from './types';

export const Filter28RegularIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 8.75868C5 8.33967 5.33962 8 5.75856 8H22.9081C23.327 8 23.6667 8.33967 23.6667 8.75868C23.6667 9.17768 23.327 9.51735 22.9081 9.51735H5.75856C5.33962 9.51735 5 9.17768 5 8.75868Z" fill="black"/>
<path d="M7.44986 13.835C7.44986 13.416 7.78948 13.0763 8.20842 13.0763H20.4581C20.877 13.0763 21.2167 13.416 21.2167 13.835C21.2167 14.254 20.877 14.5937 20.4581 14.5937H8.20842C7.78948 14.5937 7.44986 14.254 7.44986 13.835Z" fill="black"/>
<path d="M10.6584 18.1526C10.2395 18.1526 9.89986 18.4923 9.89986 18.9113C9.89986 19.3303 10.2395 19.67 10.6584 19.67H18.0082C18.4272 19.67 18.7668 19.3303 18.7668 18.9113C18.7668 18.4923 18.4272 18.1526 18.0082 18.1526H10.6584Z" fill="black"/>
    </svg>
  );
};
