import React from 'react';
import {View, Text} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';

export default function ResidenceToggle({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.residenceView}>
        <View style={styles.houseButtonView}>
          <BorderlessButton>
            <Text style={styles.name}>Casa grande uou tem at </Text>
            <Text style={styles.isAvailableText}>Disponível </Text>
          </BorderlessButton>
        </View>
        <View style={styles.buttonView}>
          <BorderlessButton
            onPress={() => {
              navigation.navigate('EditResidenceConfig');
            }}
            style={styles.configButton}>
            <Icon name={'settings'} size={40} color={'#3F3F3F'} />
          </BorderlessButton>
        </View>
      </View>
    </View>
  );
}
