import React, { useEffect } from 'react';
import { View } from 'react-native';
import Text from '@core/components/Text';
import Button from '@core/components/Button';

import useSpotifyOAuth2 from '@core/hooks/useSpotifyOAuth';

import Screen from '@core/components/Screen';
import useApi from '@core/hooks/useApi';

const LogIn: React.FC = () => {
  const promptAsync = useSpotifyOAuth2();
  const api = useApi();

  useEffect(() => {
    if (api.accessToken) {
    }
  }, [api.accessToken]);

  return (
    <Screen>
      <View>
        <Text ta="center">AAA</Text>
        <Button onPress={promptAsync}>LogIn</Button>
        <Button onPress={() => api.getAlbum('4aawyAB9vmqN3uQ7FjRGTy')}>
          get
        </Button>
      </View>
    </Screen>
  );
};

export default LogIn;
