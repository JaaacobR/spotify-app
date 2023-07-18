import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Text from '@core/components/Text';
import { ArtistCardProps } from './types';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParams } from '@core/navigation/RootStack/RootStack';

const ArtistCard: React.FC<ArtistCardProps> = ({ item }) => {
  const navigation = useNavigation<StackNavigationProp<MainStackParams>>();

  const handlePress = () => {
    navigation.navigate('Artist', { id: item.id });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            style={{ flex: 1, borderRadius: 100 }}
            source={{ uri: item.images[0].url }}
          />
        </View>

        <Text ta="center" c="white" fs="lg">
          {item.name}
        </Text>
      </TouchableOpacity>
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
