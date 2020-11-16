import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import styles from './styles';
import textStyles from '../../textStyles';

import {useAuth} from '../../contexts/auth';

// user.picture.data.url
export default function Login({navigation}) {
  const {isRegistered} = useAuth();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri:
            'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
        }}
        style={styles.imageBackground}
        imageStyle={{opacity: 0.3}}>
        <View style={styles.headerAlign}>
          <Image
            source={require('../../img/icon.png')}
            style={styles.logoImage}
          />
          <Text style={[styles.imoraText, textStyles.font]}>Imora</Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}>
          <RectButton
            onPress={() => {
              navigation.navigate('LoginHome');
            }}
            style={styles.loginButton}>
            <Text style={[styles.buttonText, textStyles.font]}>Login</Text>
          </RectButton>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RegisterUser');
            }}
            style={styles.registerButton}>
            <Text style={[styles.buttonText2, textStyles.font]}>
              Registrar-se
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
