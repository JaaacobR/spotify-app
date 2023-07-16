import React, { createContext } from 'react';

import { ProviderProps } from './types';
import ApiService from '@core/services/Api';

export const ApiContext = createContext<ApiService>(new ApiService());

const ApiProvider: React.FC<ProviderProps> = ({ children }) => {
  const api = new ApiService();
  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
};

export default ApiProvider;
