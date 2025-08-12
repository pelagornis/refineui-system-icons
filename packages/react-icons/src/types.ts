import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** 아이콘 크기 (픽셀) */
  size?: number;
  /** 아이콘 색상 */
  color?: string;
  /** 추가 CSS 클래스 */
  className?: string;
}

export interface IconSet {
  [key: string]: React.FC<IconProps>;
}

export interface IconMetadata {
  name: string;
  slug: string;
  size: number;
  node_id: string;
  platform: string;
  file_path: string;
}
