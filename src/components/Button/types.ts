import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';

import { ThemeColors, Theme } from '@core/theme/types';

export interface ButtonProps {
  children?: React.ReactNode;
  onPress: () => void;
  textStyle?: TextStyle;
  style?: ViewStyle;
  bgColor?: ThemeColors;
}

export interface ButtonStyles {
  container: ViewStyle;
  content: ViewStyle;
  text: TextStyle;
}

export type ButtonVariantStyles = (theme: Theme) => ButtonStyles;
