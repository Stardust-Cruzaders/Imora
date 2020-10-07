import React from 'react';
import {View, Text} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';

export default function ResidenceToggle() {
  return (
    <View style={styles.container}>
      <View style={styles.residenceView}>
        <View style={styles.houseButtonView}>
          <BorderlessButton>
            <Text style={styles.name}>Casa</Text>
          </BorderlessButton>
        </View>
        <View style={styles.buttonView}>
          <BorderlessButton style={styles.toggleButton}>
            <Icon name={'toggle-left'} size={30} color={'#3F3F3F'} />
          </BorderlessButton>
          <BorderlessButton style={styles.deleteButton}>
            <Icon name={'trash-2'} size={30} color={'#3F3F3F'} />
          </BorderlessButton>
        </View>
      </View>
    </View>
  );
}
