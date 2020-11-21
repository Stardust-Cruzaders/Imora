import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
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
  const {user, token} = useAuth();
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
        setResidences(response.data);
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => {
        setIsFetching(false);
        setLoading(false);
      });
  }
  async function ListAll() {
    try {
      const response = await api.get('/residences');

      setResidences(response.data);

      setLoading(false);
    } catch (err) {
      console.log(`Error when trying to list all residences: ${err}`);
    }
  }
  async function ListSearch() {
    try {
      const response = await api.get('/residences/search', {
        params: {
          residence_name: residenceName,
        },
      });
      setResidences(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    let mounted = true;
    async function handleFeed() {
      console.log('Executed');
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
  }, [residenceName]);

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
