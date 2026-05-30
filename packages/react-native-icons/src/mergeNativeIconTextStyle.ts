import { StyleProp, StyleSheet, TextStyle } from 'react-native';

/** Strip flex alignment from Text styles (often copied from web wrappers). */
export function mergeNativeIconTextStyle(base: TextStyle, user?: StyleProp<TextStyle>): TextStyle {
  const flat = user != null ? StyleSheet.flatten(user) : undefined;
  const merged = {
    ...base,
    ...(flat && typeof flat === 'object' ? flat : {}),
  } as TextStyle & Record<string, unknown>;
  delete merged.justifyContent;
  return merged;
}
