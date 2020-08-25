import React from 'react';
import {Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import styles from './styles';
import textStyles from '../../textStyles';
import Icon from 'react-native-vector-icons/Feather';

import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

export default function Login() {
  function handleFacebookAuth() {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login Cancelled');
        } else {
          console.log(
            'Login success with permissions ' +
              result.grantedPermissions.toString(),
          );
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
      },
    );
  }
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

        <RectButton
          onPress={() => {
            handleFacebookAuth();
          }}
          style={styles.facebookButton}>
          <View style={styles.iconContainer}>
            <Icon
              name="facebook"
              size={25}
              color="#fff"
              style={styles.facebookIcon}
            />
            <Text style={[styles.buttonText, textStyles.font]}>Facebook</Text>
          </View>
        </RectButton>

        <RectButton onPress={() => {}} style={styles.googleButton}>
          <Text style={[styles.buttonText, textStyles.font]}>Google</Text>
        </RectButton>
      </View>
    </View>
  );
}
