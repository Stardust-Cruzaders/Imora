import React from 'react';
import {Text, View, useWindowDimensions, Image} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

export default function Residence() {
  return (
    <View style={styles.container}>
      <View style={styles.headerimgview} />
      <View style={styles.basicInfoView} />
      <View style={styles.ownerView} />
      <View style={styles.descriptionView} />
      <View styles={styles.comfortView} />
      <View style={styles.conditionView} />
      <View style={styles.proximities} />
    </View>
  );
}
