import React, { useEffect } from 'react';
import { View } from 'react-native';
import Text from '@core/components/Text';
import Button from '@core/components/Button';

import useSpotifyOAuth2 from '@core/hooks/useSpotifyOAuth';

import Screen from '@core/components/Screen';

const LogIn: React.FC = () => {
  const promptAsync = useSpotifyOAuth2();

  return (
    <Screen>
      <View>
        <Text>AAA</Text>
        <Button onPress={promptAsync}>example</Button>
      </View>
    </Screen>
  );
};

export default LogIn;
