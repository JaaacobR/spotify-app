import React from 'react';
import Screen from '@core/components/Screen';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';

const Artist = () => {
  return (
    <LinearGradient colors={['#333333', '#010101']} style={{ flex: 1 }}>
      <Screen>
        <View />
      </Screen>
    </LinearGradient>
  );
};

export default Artist;
