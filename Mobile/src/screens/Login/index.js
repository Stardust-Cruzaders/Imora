import React from 'react';
import {Text, useWindowDimensions, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import styles from './styles';
import textStyles from '../../textStyles';
import Icon from 'react-native-vector-icons/Feather';

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
            source={require('../../img/icon.png')}
            style={styles.logoImage}
          />
        <Text style={[styles.imoraText, textStyles.font]}>Imora</Text>
      </View>
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
        </RectButton>
      </ImageBackground>
    </View>
  );
}
