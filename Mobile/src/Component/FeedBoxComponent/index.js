import React from 'react';
import {Text, View, Image} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';

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
  return (
    <View style={styles.feedBox}>
      <View style={styles.imageContainer}>
        <Icon name="heart" size={25} style={styles.heartIcon} />
      </View>
      <Image source={{uri: img}} style={styles.image} />

      <View style={styles.starsItem}>
        <Text style={styles.priceText}>R${price}/mês </Text>
        <Text style={styles.starText}>
          {stars} <Icon name="star" size={20} color="#26E07C" />
          <Text style={styles.subStarsStyle}> ({sub_stars})</Text>
        </Text>
      </View>

      <View style={styles.div} />

      <View style={styles.bottomTextPos}>
        <Text style={styles.titleText}>{name}</Text>
        <Text style={styles.localizationText}>{localization}</Text>
      </View>
    </View>
  );
}
