import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Text from '@core/components/Text';
import { ArtistCardProps } from './types';

const ArtistCard: React.FC<ArtistCardProps> = ({ item }) => {
  console.log(item);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            style={{ flex: 1, borderRadius: 100 }}
            source={{ uri: item.images[0].url }}
          />
        </View>

        <Text ta="center" c="white" fs="lg">
          {item.name}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 7,
  },
  content: {
    width: 150,
    aspectRatio: 0.9,
  },
  imageContainer: {
    aspectRatio: 1,
  },
});

export default ArtistCard;
