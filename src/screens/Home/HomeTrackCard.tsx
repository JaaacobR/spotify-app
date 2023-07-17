import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from '@core/components/Text';
import { HomeTrackCardProps } from './types';

export const HomeTrackCard: React.FC<HomeTrackCardProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={{ uri: item.album.images[0].url }}
        />
        <View style={styles.albumName}>
          <Text c="black" numberOfLines={1}>
            {item.album.name}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '50%',
    padding: 4,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 5,
    overflow: 'hidden',
  },
  albumName: {
    flex: 1,
    padding: 3,
  },
  image: {
    borderRadius: 5,
    width: 40,
    height: 40,
  },
});
