import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

import textStyles from './../../textStyles';

const styles = StyleSheet.create({
  feedBox: {
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    width: width - 50,
    alignSelf: 'center',
    marginBottom: 10,
    flex:1
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  bottomItems: {
    alignItems: 'center',
  },
  starsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 8,
  },
  div: {
    backgroundColor: '#3F3F3F',
    padding: 0.8,
    marginHorizontal: 15,
    borderRadius: 5,
    marginTop: 4,
    marginBottom: 4,
  },
  titleText: {
    fontFamily: 'Roboto',
    color: '#3F3F3F',
    fontSize: 22,
    letterSpacing: 0.6
  },
  bottomTextPos: {
    paddingHorizontal: 15,
  },
  localizationText: {
    fontSize: 13  ,
    color: '#8D8D97',
    fontFamily: 'Roboto',
    letterSpacing: 1,
    paddingVertical: 7

  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    marginLeft: 5
  },
  starText: {
    fontWeight: 'bold',
    fontSize: 16,

  },
  subStarsStyle: {
    fontSize: 12,
    color: '#8D8D97',
  },
  heartIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
    color: 'black',
    zIndex: 1,
    borderRadius: 100,

    borderColor: '#FFF',
    backgroundColor: '#FFF',
    overflow: 'hidden',
    padding: 4,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
