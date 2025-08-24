import React from 'react';
import { IconProps } from './types';

export const Textalignright28RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M9.91791 8.75836C9.91791 8.33953 10.2574 8 10.6763 8H21.7416C22.1604 8 22.5 8.33953 22.5 8.75836C22.5 9.17719 22.1604 9.51672 21.7416 9.51672H10.6763C10.2574 9.51672 9.91791 9.17719 9.91791 8.75836Z" fill="black"/>
<path d="M5 13.8349C5 13.4161 5.33953 13.0765 5.75836 13.0765H21.7416C22.1605 13.0765 22.5 13.4161 22.5 13.8349C22.5 14.2537 22.1605 14.5932 21.7416 14.5932H5.75836C5.33953 14.5932 5 14.2537 5 13.8349Z" fill="black"/>
<path d="M15.5942 18.153C15.1753 18.153 14.8358 18.4925 14.8358 18.9113C14.8358 19.3302 15.1753 19.6697 15.5942 19.6697H21.7416C22.1604 19.6697 22.4999 19.3302 22.4999 18.9113C22.4999 18.4925 22.1604 18.153 21.7416 18.153H15.5942Z" fill="black"/>
    </svg>
  );
};
