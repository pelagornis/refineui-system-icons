#!/usr/bin/env python3
"""React Native 패키지를 정확하게 수정하는 스크립트"""

import re

# 파일 읽기
with open('packages/react-native-icons/src/index.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. import와 interface 수정
header = '''import React from 'react';
import { Text } from 'react-native';
import { ViewStyle, TextStyle } from 'react-native';

export interface IconProps {
  size?: number;
  color?: string;
  style?: ViewStyle | TextStyle;
}

// Icon Components'''

# 기존 헤더 부분을 새 헤더로 교체
content = re.sub(
    r'import React from \'react\';.*?// Icon Components',
    header,
    content,
    flags=re.DOTALL
)

# 2. 각 컴포넌트를 수정
def replace_component(match):
    component_name = match.group(1)
    unicode_char = match.group(2)
    
    return f'''export const {component_name}: React.FC<IconProps> = ({{
  size = 24,
  color = 'black',
  style,
  ...props
}}) => {{
  return (
    <Text
      style={{[
        {{
          fontSize: size,
          color: color,
          fontFamily: 'refineui-system-icons-regular',
        }},
        style
      ]}}
      {{...props}}
    >
      {unicode_char}
    </Text>
  );
}};'''

# 컴포넌트 패턴 매치 및 교체
pattern = r'export const ([^:]+): React\.FC<IconProps> = \(\{[^}]+\}\) => \{[^}]+<span[^>]*>[^<]*([^<]+)</span>[^}]+\};'
content = re.sub(pattern, replace_component, content, flags=re.DOTALL)

# 파일 쓰기
with open('packages/react-native-icons/src/index.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("React Native 패키지가 성공적으로 수정되었습니다!")
