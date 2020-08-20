import React from 'react';
import { View, SafeAreaView} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';

import FeedBoxComponent from '../../Component/FeedBoxComponent';
import SearchBar from '../../Component/SearchBar';
import FilterComponent from '../../Component/FilterComponent';

export default function Feed() {
  return (
    
    <SafeAreaView style={styles.container}>
      
      <View style={styles.headerNav}>
        <SearchBar />
        <FilterComponent />
      </View>
     

      <FeedBoxComponent />

      <View style={styles.bottomTabNav}>
        <Icon name="compass" size={25} color="#FFF" />
        <Icon name="zap" size={25} color="#FFF" />
        <Icon name="message-circle" size={25} color="#FFF" />
        <Icon name="user" size={25} color="#FFF" />
      </View>
    </SafeAreaView>
  );
}
