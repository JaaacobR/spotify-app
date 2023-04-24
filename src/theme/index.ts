import colors from './colors';
import fonts from './fonts';

const theme = {
  ...colors,
  ...fonts,
} as const;

export default theme;
