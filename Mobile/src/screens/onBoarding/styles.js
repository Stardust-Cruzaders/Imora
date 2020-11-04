import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDE0E3',
  },
  slide2: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#DDE0E3',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDE0E3',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  text: {
    fontSize: 18,
    fontWeight: '300',
    fontFamily: 'Roboto',
  },
  girlImage: {
    width: 210,
    height: 290,
    marginVertical: 15,
  },
  boyImage: {
    width: 325,
    height: 410,
    marginTop: 110,
    marginLeft: 120,
  },
  endImage: {
    width: 360,
    height: 420,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#26E07C',
    padding: 20,
    marginBottom: 30,
    borderRadius: 5,

    paddingHorizontal: 30,
  },
  textButton: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 23,
    fontFamily: 'Roboto',
  },
});

export default styles;
