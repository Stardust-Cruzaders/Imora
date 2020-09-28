import React, {useState} from 'react';
import {View} from 'react-native';

import {RectButton} from 'react-native-gesture-handler';
import Ionicon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);
  function toggleFavorite() {
    setIsFavorite(!isFavorite);
  }
  return (
    <View style={styles.favoriteButtonView}>
      <RectButton
        style={styles.favoriteButton}
        onPress={() => {
          toggleFavorite();
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
