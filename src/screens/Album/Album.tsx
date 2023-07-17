import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { AlbumRouteProp } from './types';

const Album: React.FC = () => {
  const route = useRoute<AlbumRouteProp>();
  const { id } = route.params;

  const [album, setAlbum] = useState([]);
  return (
    <View>
      <View></View>
    </View>
  );
};

export default Album;
