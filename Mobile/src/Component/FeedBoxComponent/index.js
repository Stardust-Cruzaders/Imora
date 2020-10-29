import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

import ImageSwipe from '../ImageSwipe';
import {RectButton} from 'react-native-gesture-handler';

export default function FeedBoxComponent({residence, user_id, navigation}) {
  return (
    <View style={styles.feedBox}>
      <RectButton
        style={styles.goToResidenceButton}
        onPress={() => {
          navigation.navigate('ResidenceDetailed', {
            residence,
          });
        }}>
        <View style={[styles.imageContainer]}>
          <ImageSwipe
            img={residence.images}
            widthDiff={50}
            residence_id={residence.id}
            user_id={user_id}
          />
        </View>

        {/* <Image source={{uri: img}} style={styles.image} /> */}

        <View style={styles.starsItem}>
          <Text style={styles.priceText}>R${residence.price}/mês </Text>
        </View>

        <View style={styles.div} />

        <View style={styles.bottomTextPos}>
          <Text style={styles.titleText}>{residence.residence_name}</Text>
          <Text style={styles.localizationText}>
            {residence.city},{residence.state}
          </Text>
        </View>
      </RectButton>
    </View>
  );
}
