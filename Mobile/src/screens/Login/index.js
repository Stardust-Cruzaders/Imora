import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
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
        <RectButton onPress={() => {}} style={styles.feedButton}>
          <Text style={[styles.buttonText, textStyles.font]}>
            Explorar o App
          </Text>
        </RectButton>
        <RectButton onPress={() => {}} style={styles.facebookButton}>
          <Text style={[styles.buttonText, textStyles.font]}>Facebook</Text>
        </RectButton>
        <RectButton onPress={() => {}} style={styles.googleButton}>
          <Text style={[styles.buttonText, textStyles.font]}>Google</Text>
        </RectButton>
      </View>
    </View>
  );
}
