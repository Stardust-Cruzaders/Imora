import React, {useState, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Text, View, SafeAreaView, FlatList} from 'react-native';
import axios from 'axios';
import styles from './styles';

import FeedBoxComponent from '../../Component/FeedBoxComponent';
import SearchBar from '../../Component/SearchBar';

import {RectButton} from 'react-native-gesture-handler';
import api from '../../services/api';
import {ActivityIndicator} from 'react-native-paper';
import {useFeed} from '../../contexts/feed';
import {useAuth} from '../../contexts/auth';
import NotFound from '../../Component/NotFound';
export default function Feed({navigation}) {
  const {
    residenceName,
    setResidenceName,
    residences,
    setResidences,
    loading,
    setLoading,
    filtered,
  } = useFeed();
  const {user} = useAuth();
  const [residencesOk, setResidencesOk] = useState(true);
  const [errorMessage, setErrorMessage] = useState(
    'Nenhuma Residência Foi encontrada',
  );
  const [errorIcon, setErrorIcon] = useState('archive');
  const [isFetching, setIsFetching] = useState(false);
  function onRefresh() {
    setIsFetching(true);
    api
      .get('/residences')
      .then((response) => {
        if (response.data.length >= 1) {
          setResidences(response.data);
          setResidencesOk(true);
        } else {
          setResidencesOk(false);
        }
      })
      .catch((err) => {
        setResidencesOk(false);
      })
      .finally(() => setIsFetching(false));
  }
  async function ListAll(source) {
    try {
      const response = await api.get('/residences', {
        cancelToken: source.token,
      });
      if (response.data.length >= 1) {
        setResidences(response.data);
        setResidencesOk(true);
      } else {
        setResidencesOk(false);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setResidencesOk(false);
      setErrorIcon('wifi-off');
      setErrorMessage(
        'Oops! parece que nossos servidores não estão disponíveis no Momento',
      );
    }
  }
  async function ListSearch(source) {
    try {
      const response = await api.get('/residences/search', {
        cancelToken: source.token,
        params: {
          residence_name: residenceName,
        },
      });

      setResidences(response.data);
      setResidencesOk(true);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setResidencesOk(false);
      setErrorIcon('wifi-off');
      setErrorMessage(
        'Oops! parece que nossos servidores não estão disponíveis no Momento',
      );
    }
  }

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    async function handleFeed() {
      if (
        (residenceName === undefined || residenceName === '') &&
        filtered === false
      ) {
        await ListAll(source);
      } else {
        await ListSearch(source);
      }
    }

    handleFeed();
    return () => {
      source.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [residenceName, residences]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerNav}>
        <SearchBar
          residenceName={residenceName}
          setResidenceName={setResidenceName}
        />
        <RectButton
          style={styles.filterButtonStyle}
          onPress={() => {
            navigation.navigate('Filter');
          }}>
          <Text style={styles.textFormatation}>Filtrar</Text>
        </RectButton>
      </View>
      {!loading ? (
        <FlatList
          data={residences}
          onRefresh={() => onRefresh()}
          refreshing={isFetching}
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
        <ActivityIndicator size={'small'} color={'purple'} />
      )}
    </SafeAreaView>
  );
}
