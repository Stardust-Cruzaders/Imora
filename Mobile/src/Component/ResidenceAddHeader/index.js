import React from 'react';

import {View, Text, useWindowDimensions} from 'react-native';
import {Divider} from 'react-native-elements';

import styles from './styles';
export default function ResidenceAddHeader({title, subtitle}) {
  const width = useWindowDimensions().width;

  return (
    <View style={[styles.header, {width: width}]}>
      <Text style={styles.headerTitle}>
        {' '}
        {title === undefined ? 'Configure seu anúncio' : title}{' '}
      </Text>
      {subtitle === undefined ? null : (
        <Text style={styles.headerText}> {subtitle} </Text>
      )}

      <Divider style={[styles.headerDivider, {width: width - 100}]} />
    </View>
  );
}
