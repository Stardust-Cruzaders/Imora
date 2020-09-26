import React, {useState} from 'react';
import {Text, View, Image, useWindowDimensions} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';

import ImageSwipe from '../ImageSwipe';
import {SliderBox} from 'react-native-image-slider-box';
import {RectButton} from 'react-native-gesture-handler';

export default function FeedBoxComponent({
  id,
  name,
  img,
  price,
  stars,
  sub_stars,
  localization,
}) {
  const width = useWindowDimensions().width;

  return (
    <View style={styles.feedBox}>
      <RectButton onPress={() => {}}>
        <View style={styles.imageContainer}>
          <ImageSwipe img={img} />
        </View>

        {/* <Image source={{uri: img}} style={styles.image} /> */}

        <View style={styles.starsItem}>
          <Text style={styles.priceText}>R${price}/mês </Text>
        </View>

        <View style={styles.div} />

        <View style={styles.bottomTextPos}>
          <Text style={styles.titleText}>{name}</Text>
          <Text style={styles.localizationText}>{localization}</Text>
        </View>
      </RectButton>
    </View>
  );
}
