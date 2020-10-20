import React from 'react';
<<<<<<< HEAD
import {Text, View, ImageBackground, Image } from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import styles from './styles';
import textStyles from '../../textStyles';
=======
import {Text, useWindowDimensions, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import styles from './styles';
import textStyles from '../../textStyles';
import Icon from 'react-native-vector-icons/Feather';
>>>>>>> 798cffa35afa7398dafa8439684b08ce37a697d7

import {useAuth} from '../../contexts/auth';

// user.picture.data.url
export default function Login({navigation}) {
  const {FacebookSignIn, isRegistered} = useAuth();

  const width = useWindowDimensions().width;
  return (
    <View style={styles.container}>
    <ImageBackground 
    source={{uri:'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'}}
    style={styles.imageBackground}
    imageStyle={{opacity: 0.3}}
    > 

      <View style={styles.headerAlign}>
          <Image 
            source={require('./icon.png')}
            style={styles.logoImage}
          />
        <Text style={[styles.imoraText, textStyles.font]}>Imora</Text>
      </View>

<<<<<<< HEAD
      <View style={{flex:1 , flexDirection: 'column', justifyContent: 'flex-end'}}>
        <RectButton onPress={() => {}} style={styles.loginButton}>
          <Text style={[styles.buttonText, textStyles.font]}>Login</Text>
        </RectButton>
        <RectButton onPress={() => {}} style={styles.registerButton}>
          <Text style={[styles.buttonText2, textStyles.font]}>Registrar-se</Text>
=======
      <View style={styles.whiteBox}>
        <RectButton onPress={() => {}} style={styles.feedButton}>
          <Text style={[styles.buttonText, textStyles.font]}>
            Explorar o App
          </Text>
        </RectButton>

        <RectButton
          onPress={async () => {
            await FacebookSignIn();
            if (isRegistered == false) {
              navigation.navigate('LoginEditInfo');
            }
          }}
          style={styles.facebookButton}>
          <View style={[styles.iconContainer]}>
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
>>>>>>> 798cffa35afa7398dafa8439684b08ce37a697d7
        </RectButton>
      </View>
      </ImageBackground>
    </View>
  );
}
