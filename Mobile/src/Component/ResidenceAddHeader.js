import React from 'react';

import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import {Divider} from 'react-native-elements';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#7E57C2',

    justifyContent: 'center',
    alignItems: 'center',

    padding: 20,
  },
  headerTitle: {
    fontSize: 25,
    color: '#F9F8FD',

    marginBottom: 15,

    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  headerText: {
    fontSize: 18,
    color: '#F9F8FD',

    marginBottom: 15,

    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  headerDivider: {
    backgroundColor: '#F9F8FD',
    height: 3,

    alignSelf: 'center',
  },
});
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
