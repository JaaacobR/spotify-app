import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import useApi from '@core/hooks/useApi';
import { LinearGradient } from 'expo-linear-gradient';

import Text from '@core/components/Text';
import Screen from '@core/components/Screen';
import { ArtistObject, TrackObject } from '@core/services/Api/types';

import { HomeTrackCard } from './HomeTrackCard';

const Home = () => {
  const api = useApi();

  const [isLoading, setIsLoading] = useState(true);
  const [topTracks, setTopTracks] = useState<TrackObject[]>([]);
  const [topArtist, setTopArtist] = useState<ArtistObject[]>([]);

  const getTopTracks = async () => {
    const [topTracks, topArtist] = await Promise.all([
      api.getUserTop(),
      api.getUserTopArtist(),
    ]);
    if (topTracks && topArtist) {
      setIsLoading(false);
      setTopTracks([...topTracks]);
      setTopArtist([...topArtist]);
    }
  };

  console.log(topArtist);

  useEffect(() => {
    getTopTracks();
  }, []);

  const renderListElement = (item: { item: TrackObject }) => {
    return <HomeTrackCard item={item.item} />;
  };

  return (
    <LinearGradient colors={['#131313', '#010101']} style={{ flex: 1 }}>
      <Screen>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <ScrollView contentContainerStyle={{ flex: 1 }}>
            <Text c="white" fs="xl">
              Witaj!!
            </Text>
            <FlatList
              scrollEnabled={false}
              data={topTracks}
              renderItem={renderListElement}
              keyExtractor={(item) => item.id}
              numColumns={2}
              contentContainerStyle={{ flex: 1 }}
            />
            {/* <FlatList data={topArtist} horizontal renderItem={render} /> */}
          </ScrollView>
        )}
      </Screen>
    </LinearGradient>
  );
};

export default Home;
