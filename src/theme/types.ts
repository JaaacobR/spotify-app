import theme from './index';

export type Theme = typeof theme;

export type ThemeColors = keyof Theme['colors'];

export type ThemeFontSizes = keyof Theme['fontSizes'];

export type ThemeFontWeights = keyof Theme['fontWeights'];
