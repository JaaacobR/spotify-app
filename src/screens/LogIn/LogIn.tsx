import React from 'react';
import { View } from 'react-native';
import Text from '@core/components/Text';
import Button from '@core/components/Button';

const LogIn: React.FC = () => {
  return (
    <View>
      <Text>AAA</Text>
      <Button
        onPress={() => {
          console.log('Dupa');
        }}>
        example
      </Button>
    </View>
  );
};

export default LogIn;
