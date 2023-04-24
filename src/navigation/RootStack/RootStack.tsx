import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LogIn from '@core/screens/LogIn';

export type MainStackParams = {
  LogIn: undefined;
};

const MainStack = createStackNavigator<MainStackParams>();

const RootStack = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="LogIn"
      options={{ headerShown: false }}
      component={LogIn}
    />
  </MainStack.Navigator>
);

export default RootStack;
