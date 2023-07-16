import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import useApi from '@core/hooks/useApi';

import Text from '@core/components/Text';
import Screen from '@core/components/Screen';
import { TrackObject } from '@core/services/Api/types';

import { HomeTrackCard } from './HomeTrackCard';

const Home = () => {
  const api = useApi();

  const [isLoading, setIsLoading] = useState(true);
  const [topTracks, setTopTracks] = useState<TrackObject[]>([]);

  const getTopTracks = async () => {
    const topTracks = await api.getUserTop();
    if (topTracks) {
      setIsLoading(false);
      setTopTracks([...topTracks]);
    }
  };

  useEffect(() => {
    getTopTracks();
  }, []);

  const renderListElement = (item: { item: TrackObject }) => {
    return <HomeTrackCard item={item.item} />;
  };

  return (
    <Screen>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={topTracks}
          renderItem={renderListElement}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={{ flex: 1 }}
        />
      )}
    </Screen>
  );
};

export default Home;
