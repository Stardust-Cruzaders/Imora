import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {RectButton} from 'react-native-gesture-handler';
import {Root, Popup} from 'popup-ui';
import styles from './styles';
import {useAuth} from '../../../contexts/auth';

export default function RegisterUser2({navigation}) {
  const {email, avatar, setEmail, password, setPassword, Register} = useAuth();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  function uploadUserPhoto(formData) {
    setLoading(true);
    const url = 'https://imora-rest-api.herokuapp.com/users/upload';
    const config = {
      method: 'POST',
      'Content-Type': 'multipart/form-data',
      body: formData,
    };
    console.log('Fpr, data:  ' + formData);
    fetch(url, config)
      .then((response) => response.json())
      .then(async (result) => {
        try {
          await Register(result.imageUrl);
          Popup.show({
            type: 'Success',
            title: 'Você foi cadastrado com sucesso!!',
            button: true,
            textBody:
              'Você será redirecionado para a tela de apresentação agora.',
            buttontext: 'OK',
            callback: () => {
              Popup.hide();
              navigation.navigate('OnBoarding');
            },
          });
        } catch {
          Popup.show({
            type: 'Danger',
            title: 'Tente Novamente',
            button: true,
            textBody: 'Oops!! Parece que algo deu errado com o cadastro',
            buttontext: 'OK',
            callback: () => {
              Popup.hide();
            },
          });
        }
      })
      .catch((err) => {
        console.log('erro no fetch: ' + err);
        Popup.show({
          type: 'Danger',
          title: 'Tente Novamente',
          button: true,
          textBody: 'Oops!! Parece que algo deu errado com o cadastro' + err,
          buttontext: 'OK',
          callback: () => {
            Popup.hide();
          },
        });
      })
      .finally(() => setLoading(false));
  }

  return (
    <Root>
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri:
              'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
          }}
          style={styles.imageBackground}
          imageStyle={{opacity: 0.3}}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
                      selectTextOnFocus={false}
                      left={
                        <TextInput.Icon
                          name="email-outline"
                          color={'#7E57C2'}
                        />
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
                      selectTextOnFocus={false}
                      left={
                        <TextInput.Icon name="lock-outline" color={'#7E57C2'} />
                      }
                    />
                  </View>
                  <View style={styles.inputView}>
                    <TextInput
                      style={styles.input}
                      value={confirmPassword}
                      onChangeText={(text) => {
                        setConfirmPassword(text);
                      }}
                      placeholder={'Confirmar senha'}
                      secureTextEntry
                      underlineColorAndroid={'#3F3F3F'}
                      selectTextOnFocus={false}
                      left={
                        <TextInput.Icon name="lock-outline" color={'#7E57C2'} />
                      }
                    />
                  </View>
                </View>
                {loading ? (
                  <ActivityIndicator color={'purple'} />
                ) : (
                  <RectButton
                    onPress={async () => {
                      if (password === confirmPassword) {
                        const formData = new FormData();

                        formData.append('image', avatar);
                        uploadUserPhoto(formData);
                      } else {
                        Popup.show({
                          type: 'Danger',
                          title: 'Oops!! Parece que algo deu errado.',
                          button: true,
                          textBody:
                            'As senhas não batem. certifique-se de que a senha é igual em todos os campos',
                          buttontext: 'OK',
                          callback: () => {
                            Popup.hide();
                          },
                        });
                      }
                    }}
                    style={styles.buttonStyle}>
                    <Text style={styles.textButton}>Tudo Pronto!</Text>
                  </RectButton>
                )}
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </Root>
  );
}
