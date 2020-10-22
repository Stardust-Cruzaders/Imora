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
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';

export default function LoginHome() {
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
            <Text style={styles.fontTitle}>Cadastre-se para começar!</Text>
            <View style={styles.whiteBox}>
            <Icon name="user" size={28} color="#7E57C2" style={{position: 'absolute', top: -20, right: 115, borderRadius: 1000, backgroundColor: "#DDE0E3", borderWidth: 15, borderColor:"#FFF", border}} />
              <View style={styles.form}>
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => {
                      setEmail(text);
                    }}
                    placeholder={'Nome Completo'}
                    keyboardType={'email-address'}
                    underlineColorAndroid={'#3F3F3F'}
                    left={
                      <TextInput.Icon name="account" color={'#7E57C2'} />
                    }
                  />
                </View>
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => {
                      setPassword(text);
                    }}
                    placeholder={'Estado'}
                    secureTextEntry
                    underlineColorAndroid={'#3F3F3F'}
                    left={
                      <TextInput.Icon name="map-outline" color={'#7E57C2'} />
                    }
                  />
                </View>
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => {
                      setPassword(text);
                    }}
                    placeholder={'Cidade'}
                    secureTextEntry
                    underlineColorAndroid={'#3F3F3F'}
                    left={
                      <TextInput.Icon name="map-marker" color={'#7E57C2'} />
                    }
                  />
                </View>
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => {
                      setPassword(text);
                    }}
                    placeholder={'Telefone'}
                    secureTextEntry
                    underlineColorAndroid={'#3F3F3F'}
                    left={
                      <TextInput.Icon name="phone" color={'#7E57C2'} />
                    }
                  />
                </View>
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => {
                      setPassword(text);
                    }}
                    placeholder={'Bio (Opcional)'}
                    secureTextEntry
                    underlineColorAndroid={'#3F3F3F'}
                    left={
                      <TextInput.Icon name="book" color={'#7E57C2'} />
                    }
                  />
                </View>
              </View>
              <RectButton style={styles.buttonStyle}>
                <Text style={styles.textButton}>Avançar</Text>
              </RectButton>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}