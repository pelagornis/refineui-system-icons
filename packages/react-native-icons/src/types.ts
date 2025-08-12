import React from 'react';
import { ViewStyle } from 'react-native';

export interface IconProps {
  /** 아이콘 크기 */
  size?: number;
  /** 아이콘 색상 */
  color?: string;
  /** 추가 스타일 */
  style?: ViewStyle;
  /** 테스트 ID */
  testID?: string;
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
