import React from 'react';
import {View, Text} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';

export default function ResidenceToggle({residence, navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.residenceView}>
        <View style={styles.houseButtonView}>
          <Text style={styles.name}>{residence.item.residence_name} </Text>
          <Text
            style={[
              styles.isAvailableText,
              {color: residence.item.available ? '#26E07C' : '#ff0033'},
            ]}>
            {residence.item.available ? 'Disponível' : 'Indisponível'}{' '}
          </Text>
        </View>
        <View style={styles.buttonView}>
          <BorderlessButton
            onPress={() => {
              navigation.navigate('EditResidenceConfig', {
                residence: residence.item,
              });
            }}
            style={styles.configButton}>
            <Icon name={'settings'} size={40} color={'#3F3F3F'} />
          </BorderlessButton>
        </View>
      </View>
    </View>
  );
}
