import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import RootStack from '@core/navigation/RootStack';
import { ThemeProvider, ApiProvider } from '@core/providers';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ApiProvider>
        <ThemeProvider>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </ThemeProvider>
      </ApiProvider>
    </>
  );
}
