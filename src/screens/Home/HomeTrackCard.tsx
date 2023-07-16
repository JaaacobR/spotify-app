import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from '@core/components/Text';
import { HomeTrackCardProps } from './types';

export const HomeTrackCard: React.FC<HomeTrackCardProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: item.album.images[0].url }}
      />
      <Text c="black" numberOfLines={1}>
        {item.album.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 5,
    margin: 3,
    overflow: 'hidden',
  },
});
