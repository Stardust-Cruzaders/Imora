/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, useWindowDimensions, Image} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

export default function Residence() {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

  return (
    <View style={styles.container}>
      <View style={[styles.headerImgView]}>
        <Image
          style={[
            styles.mainImg,
            {resizeMode: 'cover', width: width, height: height / 4},
          ]}
          source={{
            uri: 'https://i.ytimg.com/vi/p-UOosKS8Ew/maxresdefault.jpg',
          }}
        />
      </View>
      <View style={[styles.bodyView, {width: width - 50}]}>
        <View style={styles.basicInfoView}>
          <Text style={styles.mainTitle}>Título </Text>
          <Text style={styles.location}>Localização,Localização </Text>
          <Text style={styles.price}>R$23,00/Mês </Text>
        </View>
        <View style={styles.ownerView}>
          <View style={styles.profilePicView}>
            <Image
              style={[styles.profilePic,{resizeMode: 'cover'}]}
              source={{
                uri:
                  'https://i.pinimg.com/564x/73/72/ca/7372caf9143345b46f5941218af00af2.jpg',
              }}
            />
          </View>
          <Text style={styles.name}>لا احتيال</Text>
          <Text style={styles.subTitle}> Proprietário </Text>
        </View>
        <View style={styles.descriptionView} />
        <View styles={styles.comfortView} />
        <View style={styles.conditionView} />
        <View style={styles.proximities} />
      </View>
    </View>
  );
}
