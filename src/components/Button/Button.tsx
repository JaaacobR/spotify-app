import React from 'react';
import { StyleSheet, View } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

import Flex from '@core/components/Flex';
import Text from '@core/components/Text';
import { useTheme } from '@core/hooks';

import { ButtonProps } from './types';
import Styles from './styles';

const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  textStyle,
  style,
  bgColor = 'green',
}) => {
  const theme = useTheme();
  const styles = Styles(theme);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        styles.content,
        style,
        { backgroundColor: theme.colors[bgColor] },
      ]}
      containerStyle={[styles.container, style]}>
      <Flex alignItems="center">
        <Text style={textStyle}>{children}</Text>
      </Flex>
    </TouchableOpacity>
  );
};

const baseStyles = StyleSheet.create({});

export default Button;
