import React, {useState, useEffect} from 'react';
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
  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    async function handleFeed() {
      if (
        (residenceName === undefined || residenceName === '') &&
        filtered === false
      ) {
        try {
          const response = await api.get('/residences', {
            cancelToken: source.token,
          });
          if (response.data.length >= 1) {
            setResidences(response.data);
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
      } else {
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
    }

    handleFeed();
    return () => {
      source.cancel();
    };
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
        residencesOk ? (
          <FlatList
            data={residences}
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
