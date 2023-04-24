import React from 'react';
import { Text as RNText } from 'react-native';

import { useTheme } from '@core/hooks';

import { TextProps } from './types';

const Text: React.FC<TextProps> = ({
  c = 'darkBlue',
  fs = 'md',
  fw = 'normal',
  ta = 'auto',
  style,
  children,
  ...props
}) => {
  const theme = useTheme();

  return (
    <RNText
      allowFontScaling={false}
      style={[
        {
          color: theme.colors[c],
          fontSize: theme.fontSizes[fs],
          fontWeight: theme.fontWeights[fw],
          textAlign: ta,
        },
        style,
      ]}
      {...props}>
      {children}
    </RNText>
  );
};

export default Text;