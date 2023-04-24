import React from 'react';
import { View, StyleSheet } from 'react-native';

import type { FlexProps } from './types';

const Flex: React.FC<FlexProps> = ({ children, ...style }) => {
  return <View style={[styles.w100, style]}>{children}</View>;
};

export default Flex;

const styles = StyleSheet.create({
  w100: {
    width: '100%',
  },
});
