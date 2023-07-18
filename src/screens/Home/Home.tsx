import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import useApi from '@core/hooks/useApi';
import { LinearGradient } from 'expo-linear-gradient';

import Text from '@core/components/Text';
import Screen from '@core/components/Screen';
import { SimplifiedArtistObject, TrackObject } from '@core/services/Api/types';

import { HomeTrackCard } from './HomeTrackCard';
import ArtistCard from '@core/components/ArtistCard/ArtistCard';

const Home = () => {
  const api = useApi();

  const [isLoading, setIsLoading] = useState(true);
  const [topTracks, setTopTracks] = useState<TrackObject[]>([]);
  const [topArtist, setTopArtist] = useState<SimplifiedArtistObject[]>([]);

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

  const renderArtistsItem = (item: { item: SimplifiedArtistObject }) => {
    return <ArtistCard item={item.item} />;
  };

  return (
    <LinearGradient colors={['#333333', '#010101']} style={{ flex: 1 }}>
      <Screen>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <ScrollView contentContainerStyle={{ flex: 1 }}>
            <Text c="white" fs="xl" fw="bold">
              Welcome!
            </Text>
            <FlatList
              scrollEnabled={false}
              data={topTracks}
              renderItem={renderListElement}
              keyExtractor={(item) => item.id}
              numColumns={2}
              contentContainerStyle={{ flex: 1 }}
            />
            <Text c="white" fs="xl" fw="bold">
              Favourite artists
            </Text>
            <FlatList
              data={topArtist}
              horizontal
              renderItem={renderArtistsItem}
              showsHorizontalScrollIndicator={false}
            />
          </ScrollView>
        )}
      </Screen>
    </LinearGradient>
  );
};

export default Home;
