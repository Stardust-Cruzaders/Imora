import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {RectButton} from 'react-native-gesture-handler';
import Ionicon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import api from '../../services/api';

export default function FavoriteButton({user_id, residence_id}) {
  const [isFavorite, setIsFavorite] = useState(false);
  async function toggleFavorite() {
    const response = await api.patch(`/users/${user_id}/favorite`, {
      residence_id,
    });
    setIsFavorite(!isFavorite);
    console.log(response.data);
  }

  return (
    <View style={styles.favoriteButtonView}>
      <RectButton
        style={styles.favoriteButton}
        onPress={async () => {
          await toggleFavorite();
        }}>
        {isFavorite ? (
          <Ionicon
            name={'md-heart-dislike-circle-outline'}
            size={65}
            color={'black'}
          />
        ) : (
          <Ionicon name={'md-heart-circle-outline'} size={65} color={'black'} />
        )}
      </RectButton>
    </View>
  );
}
