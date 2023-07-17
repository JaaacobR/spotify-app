import React from 'react';
import { SongItemProps } from './types';
import { View, TouchableOpacity } from 'react-native';
import useApi from '@core/hooks/useApi';

import Text from '@core/components/Text';

const SongItem: React.FC<SongItemProps> = ({ song, uri }) => {
  const api = useApi();

  const handlePress = async () => {
    console.log(song);
    await api.startPlayback(uri, song.track_number);
  };
  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'space-between',
        height: 60,
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        onPress={handlePress}
        style={{ flexDirection: 'column' }}>
        <Text numberOfLines={1} fs="md" c="white" fw="bold">
          {song.name}
        </Text>
        <Text numberOfLines={1} fs="md" c="white">
          {song.artists.map((artist) => artist.name).join(', ')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SongItem;
