import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LogIn from '@core/screens/LogIn';
import Home from '@core/screens/Home';
import Album from '@core/screens/Album';

export type MainStackParams = {
  LogIn: undefined;
  Home: undefined;
  Album: { id: string };
};

const MainStack = createStackNavigator<MainStackParams>();

const RootStack = () => (
  <NavigationContainer independent={true}>
    <MainStack.Navigator>
      <MainStack.Screen
        name="LogIn"
        options={{ headerShown: false }}
        component={LogIn}
      />
      <MainStack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
      <MainStack.Screen
        name="Album"
        options={{ headerShown: false }}
        component={Album}
      />
    </MainStack.Navigator>
  </NavigationContainer>
);

export default RootStack;
