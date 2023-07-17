import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import useApi from '@core/hooks/useApi';

import Screen from '@core/components/Screen';

import { AlbumRouteProp } from './types';
import { AlbumObject } from '@core/services/Api/types';
import { LinearGradient } from 'expo-linear-gradient';

const Album: React.FC = () => {
  const api = useApi();
  const route = useRoute<AlbumRouteProp>();
  const { id } = route.params;

  const [album, setAlbum] = useState<AlbumObject>();

  const getAlbum = async () => {
    const album = await api.getAlbum(id);
    setAlbum(album);
  };

  useEffect(() => {
    getAlbum();
  }, []);

  return (
    <LinearGradient colors={['#333333', '#010101']} style={{ flex: 1 }}>
      <Screen>{!album ? <ActivityIndicator /> : <View></View>}</Screen>
    </LinearGradient>
  );
};

export default Album;
