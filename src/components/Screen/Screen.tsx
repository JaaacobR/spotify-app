import React from 'react';
import { StyleSheet } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '@core/hooks';

import type { ScreenProps } from './types';

const Screen: React.FC<ScreenProps> = ({
  children,
  edges = ['top', 'right', 'bottom', 'left'],
  style,
}) => {
  const theme = useTheme();

  return (
    <SafeAreaView edges={edges} style={[styles.constainer, style]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    padding: 10,
  },
});

export default Screen;
