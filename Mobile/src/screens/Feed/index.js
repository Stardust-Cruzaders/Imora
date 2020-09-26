import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';

import FeedBoxComponent from '../../Component/FeedBoxComponent';
import SearchBar from '../../Component/SearchBar';
import FilterComponent from '../../Component/FilterComponent';

import api from '../../services/api';
import {ActivityIndicator} from 'react-native-paper';
export default function Feed() {
  const [residences, setResidences] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function handleFeed() {
      const response = await api.get('/residences');

      if (response.data === undefined) {
        return response;
      } else {
        setResidences(response.data);
        setLoading(false);

        return response.data;
      }
    }
    handleFeed();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerNav}>
        <SearchBar />
        <FilterComponent />
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
            />
          )}
        />
      ) : (
        <ActivityIndicator size={'small'} color={'purple'} />
      )}
    </SafeAreaView>
  );
}
