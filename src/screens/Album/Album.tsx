import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import useApi from '@core/hooks/useApi';

import Screen from '@core/components/Screen';

import { AlbumRouteProp } from './types';
import { AlbumObject, TrackObject } from '@core/services/Api/types';
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

import Text from '@core/components/Text';
import SongItem from '@core/components/SongItem';

const Album: React.FC = () => {
  const api = useApi();
  const route = useRoute<AlbumRouteProp>();
  const { id } = route.params;

  const [album, setAlbum] = useState<AlbumObject>();

  const getAlbum = async () => {
    const album = await api.getAlbum(id);
    setAlbum(album);
    console.log(album?.artists[0]);
  };

  useEffect(() => {
    getAlbum();
  }, []);

  const renderItem = (item: TrackObject) => {
    return <SongItem song={item} uri={album!.uri} />;
  };

  return (
    <LinearGradient colors={['#333333', '#010101']} style={{ flex: 1 }}>
      <Screen>
        {!album ? (
          <ActivityIndicator />
        ) : (
          <ScrollView>
            <View
              style={{
                width: '100%',
                height: 250,
                alignItems: 'center',
                marginBottom: 15,
              }}>
              <Image
                style={{ flex: 1, aspectRatio: 1 }}
                source={{ uri: album.images[0].url }}
              />
            </View>
            <Text c="white" fs="xl" fw="bold" numberOfLines={1}>
              {album.name}
            </Text>

            <Text c="white" fs="md" fw="bold" numberOfLines={1}>
              {album.artists.map((artist) => artist.name).join(', ')}
            </Text>
            <FlatList
              data={album.tracks.items}
              renderItem={(track) => renderItem(track.item)}
              scrollEnabled={false}
              keyExtractor={(track) => track.id}
            />
          </ScrollView>
        )}
      </Screen>
    </LinearGradient>
  );
};

export default Album;
