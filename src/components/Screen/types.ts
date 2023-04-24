import type { StyleProp, ViewStyle } from 'react-native';

import type { Edge } from 'react-native-safe-area-context';

export interface ScreenProps {
  edges?: Edge[];
  style?: StyleProp<ViewStyle>;
  paddingHorizontal?: number;
  children: React.ReactNode;
}
