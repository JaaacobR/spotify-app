import { useContext } from 'react';

import { ApiContext } from '@core/providers/ApiProvider';

const useApi = () => {
  const api = useContext(ApiContext);
  return api;
};

export default useApi;
