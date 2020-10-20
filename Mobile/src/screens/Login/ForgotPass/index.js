import React from 'react';
import {View, Text, TextInput, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {RectButton} from 'react-native-gesture-handler';

import styles from './styles';

export default function ForgotPass() {
  return (
    <View style={styles.container}>
      <Icon
        name="arrow-left-circle"
        size={40}
        color="#FFF"
        style={{position: 'absolute', left: 25, top: 20}}
      />
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 80}}>
        <Text style={styles.fontTitle}>Esqueceu sua senha?</Text>

        <View style={styles.whiteBox}>
          <Text style={styles.fontBox}>
            Não se preocupe. Nós enviaremos uma senha temporária para seu email
            de resgate.
          </Text>
          <View
            style={{
              borderWidth: 2,
              borderColor: '#7E57C2',
              borderRadius: 5,
              marginHorizontal: 20,
              flexDirection: 'row',
            }}>
            <Icon
              name="mail"
              size={25}
              color="#7E57C2"
              style={{alignSelf: 'center', margin: 5}}
            />
            <TextInput
              style={{height: 45, width: 120}}
              placeholder="Email de resgate"
              placeholderTextColor="#8D8d87"
            />
          </View>
          <View style={{marginHorizontal: 20}}>
            <RectButton style={styles.buttonStyle}>
              <Text style={styles.buttonFont}>Enviar</Text>
            </RectButton>
          </View>
        </View>
      </View>
    </View>
  );
}
