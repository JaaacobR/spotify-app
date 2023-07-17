import React, { useEffect } from 'react';
import { View } from 'react-native';
import Text from '@core/components/Text';
import Button from '@core/components/Button';

import useSpotifyOAuth2 from '@core/hooks/useSpotifyOAuth';
import { useNavigation } from '@react-navigation/native';

import Screen from '@core/components/Screen';
import useApi from '@core/hooks/useApi';

const LogIn: React.FC = () => {
  const navigation = useNavigation();
  const promptAsync = useSpotifyOAuth2();
  const api = useApi();

  useEffect(() => {
    if (api.accessToken) {
      navigation.navigate('Home' as never);
    }
  }, [api.accessToken]);

  return (
    <Screen>
      <View>
        <Button onPress={() => api.getAlbum('4aawyAB9vmqN3uQ7FjRGTy')}>
          get
        </Button>
        <Text ta="center">AAA</Text>
        <Button onPress={promptAsync}>LogIn</Button>
      </View>
    </Screen>
  );
};

export default LogIn;
