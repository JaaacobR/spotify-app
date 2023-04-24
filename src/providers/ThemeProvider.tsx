import React, { createContext } from 'react';

import theme from '@core/theme';
import type { Theme } from '@core/theme/types';
import { ProviderProps } from './types';

export const ThemeContext = createContext<Theme | undefined>(undefined);

const ThemeProvider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
