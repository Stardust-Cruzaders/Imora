import React, {useEffect} from 'react';
import {Text, View, SafeAreaView, FlatList} from 'react-native';

import styles from './styles';

import FeedBoxComponent from '../../Component/FeedBoxComponent';
import SearchBar from '../../Component/SearchBar';

import {RectButton} from 'react-native-gesture-handler';
import api from '../../services/api';
import {ActivityIndicator} from 'react-native-paper';
import {useFeed} from '../../contexts/feed';

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
  useEffect(() => {
    async function handleFeed() {
      if (
        (residenceName === undefined || residenceName === '') &&
        filtered === false
      ) {
        const response = await api.get('/residences');

        if (response.data === undefined) {
          return response;
        } else {
          setResidences(response.data);
          setLoading(false);

          return response.data;
        }
      } else {
        const response = await api.get('/residences/search', {
          params: {
            residence_name: residenceName,
          },
        });

        if (response.data === undefined) {
          return response;
        } else {
          setResidences(response.data);
          setLoading(false);

          return response.data;
        }
      }
    }

    handleFeed();
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
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <FeedBoxComponent
              id={item.id}
              name={item.residence_name}
              img={item.images}
              price={item.price}
              stars={5}
              sub_stars={400}
              localization={item.city + ',' + item.state}
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
