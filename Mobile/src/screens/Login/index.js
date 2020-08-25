import React, {useState} from 'react';
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
import {ActivityIndicator} from 'react-native-paper';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  function getUserCallback(error, result) {
    if (error) {
      console.log('getUserError', error);
    } else {
      setLoading(false);
      setUser(result);
    }
  }
  function getUserInfo(token) {
    const infoRequest = new GraphRequest(
      '/me',
      {
        accessToken: token,
        parameters: {
          fields: {string: 'email, name,  picture.type(large)'},
        },
      },
      getUserCallback,
    );
    new GraphRequestManager().addRequest(infoRequest).start();
  }
  function handleFacebookAuth() {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      async function (result) {
        if (result.isCancelled) {
          console.log('Login Cancelled');
        } else {
          console.log(
            'Login success with permissions ' +
              result.grantedPermissions.toString(),
          );
          const accessData = await AccessToken.getCurrentAccessToken();
          setLoading(true);
          getUserInfo(accessData.accessToken);
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
        <View>
          {loading && <ActivityIndicator />}
          {user && (
            // eslint-disable-next-line react-native/no-inline-styles
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text>{user.name} </Text>
              <Text>{user.email} </Text>
              <Text>{user.picture.data.url} </Text>
            </View>
          )}
        </View>
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
