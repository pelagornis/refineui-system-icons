#!/usr/bin/env python3
"""React Native 패키지를 수정하는 스크립트"""

import re

# 파일 읽기
with open('packages/react-native-icons/src/index.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. import 수정
content = re.sub(
    r'import React from \'react\';.*?onClick\?\: \(\) => void;\s*\}',
    '''import React from 'react';
import { Text } from 'react-native';
import { ViewStyle, TextStyle } from 'react-native';

export interface IconProps {
  size?: number;
  color?: string;
  style?: ViewStyle | TextStyle;
}''',
    content,
    flags=re.DOTALL
)

# 2. span을 Text로 변경
content = content.replace('<span', '<Text')
content = content.replace('</span>', '</Text>')

# 3. color 기본값 변경
content = content.replace("color = 'currentColor'", "color = 'black'")

# 4. props 구조 변경
content = re.sub(
    r'  ...props\s*\}\) => \{',
    '  style,\n  ...props\n}) => {',
    content
)

# 5. style 속성 변경
content = re.sub(
    r'      style=\{\s*fontSize: size,\s*color: color,\s*fontFamily: \'([^\']+)\',\s*...props.style\s*\}',
    r'''      style={[
        {
          fontSize: size,
          color: color,
          fontFamily: '\1',
        },
        style
      ]}''',
    content,
    flags=re.MULTILINE
)

# 파일 쓰기
with open('packages/react-native-icons/src/index.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("React Native 패키지가 성공적으로 수정되었습니다!")
