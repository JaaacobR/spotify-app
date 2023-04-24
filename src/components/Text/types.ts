import { TextProps as RNTextProps, TextStyle } from 'react-native';

import {
  ThemeColors,
  ThemeFontSizes,
  ThemeFontWeights,
} from '@core/theme/types';

export interface TextProps extends RNTextProps {
  c?: ThemeColors;
  fw?: ThemeFontWeights;
  fs?: ThemeFontSizes;
  ta?: TextStyle['textAlign'];
}
