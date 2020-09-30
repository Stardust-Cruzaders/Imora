import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';

import ImageSwipe from '../ImageSwipe';
import {RectButton} from 'react-native-gesture-handler';

import api from '../../services/api';

export default function FeedBoxComponent({
  id,
  name,
  img,
  price,
  localization,
  navigation,
}) {
  return (
    <View style={styles.feedBox}>
      <RectButton
        style={styles.goToResidenceButton}
        onPress={() => {
          navigation.navigate('ResidenceDetailed', {
            id: id,
          });
        }}>
        <View style={[styles.imageContainer]}>
          <ImageSwipe img={img} widthDiff={50} />
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
