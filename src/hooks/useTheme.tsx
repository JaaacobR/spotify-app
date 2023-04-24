import { useContext } from 'react';

import { ThemeContext } from '@core/providers/ThemeProvider';
import type { Theme } from '@core/theme/types';

const useTheme = (): Theme => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error('No theme available within the context');
  }

  return theme;
};

export default useTheme;
