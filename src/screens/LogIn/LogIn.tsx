import React from 'react';
import { View } from 'react-native';
import Text from '@core/components/Text';
import Button from '@core/components/Button';
import Screen from '@core/components/Screen';

const LogIn: React.FC = () => {
  return (
    <Screen>
      <View>
        <Text>AAA</Text>
        <Button
          onPress={() => {
            console.log('Dupa');
          }}>
          example
        </Button>
      </View>
    </Screen>
  );
};

export default LogIn;
