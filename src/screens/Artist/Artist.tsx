import React, { useEffect, useState } from 'react';
import Screen from '@core/components/Screen';
import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Image, ImageBackground } from 'react-native';
import useApi from '@core/hooks/useApi';
import { ArtistObject, TrackObject } from '@core/services/Api/types';

import { ArtistRouteProp } from './types';
import { ActivityIndicator } from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import Text from '@core/components/Text';
import SongItem from '@core/components/SongItem';

const Artist = () => {
  const api = useApi();
  const route = useRoute<ArtistRouteProp>();

  const [artist, setArtist] = useState<ArtistObject>();
  const [topTracks, setTopTracks] = useState<TrackObject[]>([]);

  const getArtist = async () => {
    const [artist, tracks] = await Promise.all([
      api.getArtist(route.params.id),
      api.getArtistTopTracks(route.params.id),
    ]);

    if (artist) {
      setArtist(artist);
      tracks && setTopTracks([...tracks]);
    }
  };

  useEffect(() => {
    getArtist();
  }, []);

  const renderItem = (item: TrackObject) => {
    return <SongItem song={item} uri={item.album.uri} />;
  };
  return (
    <LinearGradient colors={['#333333', '#010101']} style={{ flex: 1 }}>
      {!artist ? (
        <ActivityIndicator />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ height: 400, width: '100%' }}>
            <ImageBackground
              source={{ uri: artist?.images[0].url }}
              style={{ flex: 1, justifyContent: 'flex-end' }}>
              <Text fs="xxxl" c="white" fw="bold">
                {artist.name}
              </Text>
            </ImageBackground>
          </View>
          <View style={{ padding: 10 }}>
            <Text fs="md" fw="bold" c="white">
              Followers: {artist.followers.total}
            </Text>
            <View style={{ marginVertical: 15 }}>
              <Text style={{ padding: 15 }} fs="sxl" fw="bold" c="white">
                Most popular
              </Text>
              <FlatList
                contentContainerStyle={{ padding: 15 }}
                data={topTracks}
                renderItem={(track) => renderItem(track.item)}
                scrollEnabled={false}
                keyExtractor={(track) => track.id}
              />
            </View>
          </View>
        </ScrollView>
      )}
    </LinearGradient>
  );
};

export default Artist;
