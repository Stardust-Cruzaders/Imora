import React, {useState} from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import {RectButton, BorderlessButton} from 'react-native-gesture-handler';
import styles from './styles';
import textStyles from '../../../textStyles';

import Div from '../../../Component/Div';
export default function LoginOK({navigation}) {
  const width = useWindowDimensions().width;

  const description =
    'Antes de avançar para o feed de imóveis, você poderia ' +
    'responder um rápido questionário?';
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title, textStyles.font]}>
          Cadastre-se para começar!
        </Text>
      </View>
      <View>
        <View style={[styles.card, {width: width - 55}]}>
          <Text style={[styles.description, textStyles.font]}>
            {description}
          </Text>
          <Div threshold={100} />
          <RectButton style={[styles.button, {width: width - 100}]}>
            <Text style={[styles.buttonText, textStyles.font]}>Claro :D</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}
