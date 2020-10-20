import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import axios from 'axios';
import styles from './styles';

import FeedBoxComponent from '../../Component/FeedBoxComponent';
import NotFound from '../../Component/NotFound';
import api from '../../services/api';
import {ActivityIndicator} from 'react-native-paper';
import {useFeed} from '../../contexts/feed';
import {useAuth} from '../../contexts/auth';
export default function Favorites({navigation}) {
  const {
    favoriteResidences,
    setFavoriteResidences,
    isFavoriteOk,
    setFavoriteOk,
  } = useFeed();
  const {user} = useAuth();

  const [loading, setLoading] = useState(true);

  const [errorMessage, setErrorMessage] = useState(
    'Nenhuma residência foi favoritada ainda.',
  );
  const [errorIcon, setErrorIcon] = useState('heart');
  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    async function handleFeed() {
      try {
        const response = await api.get(`/residences/${user.id}/favorites`, {
          cancelToken: source.token,
        });
        if (response.data.length >= 1) {
          setFavoriteResidences(response.data);
          setFavoriteOk(true);
        } else {
          setFavoriteOk(false);
        }
        setLoading(false);
        return response.data;
      } catch (err) {
        setLoading(false);
        setFavoriteOk(false);
        setErrorIcon('wifi-off');
        setErrorMessage(
          'Oops! parece que nossos servidores não estão disponíveis no Momento',
        );
      }
    }

    handleFeed();
    return () => {
      source.cancel();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {!loading ? (
        isFavoriteOk ? (
          <FlatList
            data={favoriteResidences}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <FeedBoxComponent
                user_id={user.id}
                residence={item}
                navigation={navigation}
              />
            )}
          />
        ) : (
          <NotFound message={errorMessage} icon={errorIcon} />
        )
      ) : (
        <ActivityIndicator size={'small'} color={'purple'} />
      )}
    </SafeAreaView>
  );
}
