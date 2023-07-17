import React, { useEffect } from 'react';
import { View } from 'react-native';
import Text from '@core/components/Text';
import Button from '@core/components/Button';

import useSpotifyOAuth2 from '@core/hooks/useSpotifyOAuth';
import { useNavigation } from '@react-navigation/native';

import Screen from '@core/components/Screen';
import useApi from '@core/hooks/useApi';
import { LinearGradient } from 'expo-linear-gradient';

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
    <LinearGradient colors={['#131313', '#010101']} style={{ flex: 1 }}>
      <Screen>
        <View>
          <Button onPress={promptAsync}>LogIn</Button>
        </View>
      </Screen>
    </LinearGradient>
  );
};

export default LogIn;
