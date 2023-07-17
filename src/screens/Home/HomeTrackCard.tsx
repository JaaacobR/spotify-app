import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Text from '@core/components/Text';
import { HomeTrackCardProps } from './types';
import { MainStackParams } from '@core/navigation/RootStack/RootStack';

export const HomeTrackCard: React.FC<HomeTrackCardProps> = ({ item }) => {
  const navigation = useNavigation<StackNavigationProp<MainStackParams>>();
  const handlePress = () => {
    navigation.navigate('Album', { id: item.album.id });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.content}>
        <Image
          style={styles.image}
          source={{ uri: item.album.images[0].url }}
        />
        <View style={styles.albumName}>
          <Text c="white" numberOfLines={1}>
            {item.album.name}
          </Text>
        </View>
      </TouchableOpacity>
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
    backgroundColor: 'rgba(80,80,80,0.5)',
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
