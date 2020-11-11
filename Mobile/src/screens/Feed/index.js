import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import styles from './styles';

import FeedBoxComponent from '../../Component/FeedBoxComponent';
import SearchBar from '../../Component/SearchBar';

import {RectButton} from 'react-native-gesture-handler';
import api from '../../services/api';
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
    setLoading(true);
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
        throw err;
      })
      .finally(() => setIsFetching(false));
  }
  async function ListAll() {
    try {
      const response = await api.get('/residences');
      if (response.data.length >= 1) {
        setResidences(response.data);
        setResidencesOk(true);
      } else {
        setResidencesOk(false);
        setErrorIcon('archive');
        setErrorMessage('Nenhuma Residência Foi encontrada');
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setResidencesOk(false);
    }
  }
  async function ListSearch() {
    try {
      const response = await api.get('/residences/search', {
        params: {
          residence_name: residenceName,
        },
      });
      if (response.data.length >= 1) {
        setResidences(response.data);
        setResidencesOk(true);
      } else {
        setResidencesOk(false);
        setErrorIcon('archive');
        setErrorMessage('Nenhuma Residência Foi encontrada');
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setResidencesOk(false);
    }
  }

  useEffect(() => {
    let mounted = true;
    async function handleFeed() {
      if (
        (residenceName === undefined || residenceName === '') &&
        filtered === false
      ) {
        if (mounted) {
          await ListAll();
        }
      } else {
        if (mounted) {
        }
        await ListSearch();
      }
    }

    handleFeed();
    return () => (mounted = false);
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
        residencesOk ? (
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
          <NotFound icon={errorIcon} message={errorMessage} />
        )
      ) : (
        <ActivityIndicator size={'small'} color={'purple'} />
      )}
    </SafeAreaView>
  );
}
