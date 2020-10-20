import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';
export default function NotFound({message, icon}) {
  return (
    <View style={styles.container}>
      <View style={styles.messageView}>
        <Text style={styles.messageText}>{message}</Text>
        <Icon name={icon} size={38} color={'#8D8D97'} />
      </View>
    </View>
  );
}
