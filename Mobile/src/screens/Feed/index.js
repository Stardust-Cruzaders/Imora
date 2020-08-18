import React from 'react';
import {SafeAreaView} from 'react-native';

import styles from './styles';
import FeedBoxComponent from '../../Component/FeedBoxComponent';

export default function Feed() {
  return (
    <SafeAreaView style={styles.container}>
      <FeedBoxComponent />
    </SafeAreaView>
  );
}
