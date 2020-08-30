import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDE0E3',
    flex: 1,
  },
  headerNav: {
    flexDirection: 'row',
    margin: 20,
  },
  bottomTabNav: {
    backgroundColor: '#7E57C2',
    height: 50,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#7E57C2',
  },
});

export default styles;
