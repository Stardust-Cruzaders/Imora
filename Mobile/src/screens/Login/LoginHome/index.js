import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {RectButton} from 'react-native-gesture-handler';
import {Root, Popup} from 'popup-ui';
import styles from './styles';
import {useAuth} from '../../../contexts/auth';

export default function LoginHome({navigation}) {
  const {Login} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri:
            'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
        }}
        style={styles.imageBackground}
        imageStyle={{opacity: 0.3}}>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
          <View style={styles.body}>
            <Text style={styles.fontTitle}>Bem vindo de volta!</Text>
            <View style={styles.whiteBox}>
              <View style={styles.form}>
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => {
                      setEmail(text);
                    }}
                    placeholder={'Email'}
                    keyboardType={'email-address'}
                    underlineColorAndroid={'#3F3F3F'}
                    left={
                      <TextInput.Icon name="email-outline" color={'#7E57C2'} />
                    }
                  />
                </View>
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={(text) => {
                      setPassword(text);
                    }}
                    placeholder={'Senha'}
                    secureTextEntry
                    underlineColorAndroid={'#3F3F3F'}
                    left={
                      <TextInput.Icon name="lock-outline" color={'#7E57C2'} />
                    }
                  />
                </View>
              </View>
              <RectButton
                onPress={async () => {
                  await Login(email, password);
                }}
                style={styles.buttonStyle}>
                <Text style={styles.textButton}>Continuar</Text>
              </RectButton>
            </View>
            <View style={styles.forgotPasswordView}>
              <Text style={styles.subTextWhite}>Esqueceu sua senha?</Text>
              <RectButton
                onPress={() => {
                  navigation.navigate('ForgotPass');
                }}>
                <Text style={styles.subTextGreen}>Recupere-a aqui</Text>
              </RectButton>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}
