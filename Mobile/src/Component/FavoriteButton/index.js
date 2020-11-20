import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {RectButton} from 'react-native-gesture-handler';
import Ionicon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import api from '../../services/api';
import {useFeed} from '../../contexts/feed';
import {useAuth} from '../../contexts/auth';

export default function FavoriteButton({user_id, residence_id}) {
  const {setFavoriteResidences, setFavoriteOk} = useFeed();
  const {user} = useAuth();
  const [isFavorite, setIsFavorite] = useState(false);

  async function toggleFavorite() {
    setIsFavorite(isFavorite ? false : true);
    try {
      const newUser = await api.patch(`/users/${user_id}/favorite`, {
        residence_id,
      });
      const response = await api.get(`/residences/${user.id}/favorites`);
      console.log(response.data);
      setFavoriteResidences(response.data);
      if (response.data.length >= 1) {
        setFavoriteOk(true);
      } else {
        setFavoriteOk(false);
      }
    } catch (err) {
      console.log('Erro ao favoritar: ' + err);
    }
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
            name={'ios-heart-dislike-circle-outline'}
            size={65}
            color={'black'}
          />
        ) : (
          <Ionicon
            name={'ios-heart-circle-outline'}
            size={65}
            color={'black'}
          />
        )}
      </RectButton>
    </View>
  );
}
