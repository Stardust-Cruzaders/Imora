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
      </View>
    </View>
  );
}
