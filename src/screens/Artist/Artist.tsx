import React, { useEffect, useState } from 'react';
import Screen from '@core/components/Screen';
import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Image, ImageBackground } from 'react-native';
import useApi from '@core/hooks/useApi';
import { ArtistObject } from '@core/services/Api/types';

import { ArtistRouteProp } from './types';
import { ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Text from '@core/components/Text';

const Artist = () => {
  const api = useApi();
  const route = useRoute<ArtistRouteProp>();

  const [artist, setArtist] = useState<ArtistObject>();

  const getArtist = async () => {
    const artist = await api.getArtist(route.params.id);
    if (artist) {
      setArtist(artist);
    }
  };

  useEffect(() => {
    getArtist();
  }, []);
  return (
    <LinearGradient colors={['#333333', '#010101']} style={{ flex: 1 }}>
      {!artist ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
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
              <Text fs="sxl" fw="bold" c="white">
                Most popular
              </Text>
            </View>
          </View>
        </ScrollView>
      )}
    </LinearGradient>
  );
};

export default Artist;
