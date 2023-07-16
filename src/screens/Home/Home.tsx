import React, { useEffect } from 'react';
import { View } from 'react-native';
import useApi from '@core/hooks/useApi';

import Text from '@core/components/Text';
import Screen from '@core/components/Screen';

const Home = () => {
  const api = useApi();
  useEffect(() => {
    api.getUserTop();
  }, []);

  return (
    <Screen>
      <Text>Witaj</Text>
    </Screen>
  );
};

export default Home;
