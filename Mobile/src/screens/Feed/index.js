import React, {useState} from 'react';
import { View, SafeAreaView} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import FeedBoxComponent from '../../Component/FeedBoxComponent';


export default function Feed() {
  return (
    <SafeAreaView style={styles.container}>
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
