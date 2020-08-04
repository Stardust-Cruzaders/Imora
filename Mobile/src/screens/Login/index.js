import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from './styles';
import textStyles from '../../textStyles';
import Icon from 'react-native-vector-icons/Feather';
Icon.loadFont();

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.headerAlign}>
        <Icon name="home" size={50} color="#FFF" />
        <Text style={[styles.imoraText, textStyles.font]}>Imora</Text>
      </View>

      <View style={styles.whiteBox}>
        <TouchableOpacity style={styles.feedButton}>
          <Text style={[styles.buttonText, textStyles.font]}>
            Explorar o App
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.facebookButton}>
          <Text style={[styles.buttonText, textStyles.font]}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton}>
          <Text style={[styles.buttonText, textStyles.font]}>Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
