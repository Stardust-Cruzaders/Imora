import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {TextInput} from 'react-native-paper';
import {RectButton} from 'react-native-gesture-handler';
import {Root, Popup} from 'popup-ui';
import styles from './styles';
import {useAuth} from '../../../contexts/auth';

export default function RegisterUser({navigation}) {
  const {
    name,
    setName,
    user_state,
    setUserState,
    user_city,
    setUserCity,
    phone,
    setPhone,
    bio,
    setBio,
    avatar,
    setAvatar,
  } = useAuth();
  const [temporaryAvatar, setTemporaryAvatar] = useState('');
  const selectFile = () => {
    var options = {
      title: 'Selecionar Imagem',
      takePhotoButtonTitle: 'Tirar uma foto',
      chooseFromLibraryButtonTitle: 'Escolher da galeria',
      storageOptions: {
        skipBackup: true,
        path: 'imora_profile_pic',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      const image = {
        uri: response.uri,
        name: response.fileName,
        type: response.type,
      };
      setAvatar(image);
      setTemporaryAvatar(response.data);
    });
  };
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
            <View
              style={{
                alignSelf: 'center',
                marginTop: 10,
                flex: 1,
              }}>
              <RectButton
                onPress={() => {
                  selectFile();
                }}
                style={{
                  borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 100,
                  height: 100,
                  backgroundColor: '#DDE0E3',
                  borderRadius: 50,
                }}>
                <Image
                  source={
                    temporaryAvatar
                      ? {uri: 'data:image/jpeg;base64,' + temporaryAvatar}
                      : {
                          uri:
                            'https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg',
                        }
                  }
                  style={styles.avatar}
                />
              </RectButton>
            </View>

            <View style={styles.whiteBox}>
              <View style={styles.form}>
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={(text) => {
                      setName(text);
                    }}
                    placeholder={'Nome Completo'}
                    keyboardType={'email-address'}
                    underlineColorAndroid={'#3F3F3F'}
                    selectTextOnFocus={false}
                    left={<TextInput.Icon name="account" color={'#7E57C2'} />}
                  />
                </View>
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.input}
                    value={user_state}
                    onChangeText={(text) => {
                      setUserState(text);
                    }}
                    placeholder={'Estado'}
                    selectTextOnFocus={false}
                    underlineColorAndroid={'#3F3F3F'}
                    maxLength={2}
                    left={
                      <TextInput.Icon name="map-outline" color={'#7E57C2'} />
                    }
                  />
                </View>
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.input}
                    value={user_city}
                    onChangeText={(text) => {
                      setUserCity(text);
                    }}
                    placeholder={'Cidade'}
                    selectTextOnFocus={false}
                    maxLength={85}
                    underlineColorAndroid={'#3F3F3F'}
                    left={
                      <TextInput.Icon name="map-marker" color={'#7E57C2'} />
                    }
                  />
                </View>
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.input}
                    value={phone}
                    onChangeText={(text) => {
                      setPhone(text);
                    }}
                    placeholder={'Telefone (opcional)'}
                    maxLength={15}
                    keyboardType={'phone-pad'}
                    selectTextOnFocus={false}
                    underlineColorAndroid={'#3F3F3F'}
                    left={<TextInput.Icon name="phone" color={'#7E57C2'} />}
                  />
                </View>
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.bioInput}
                    value={bio}
                    onChangeText={(text) => {
                      setBio(text);
                    }}
                    placeholder={'Bio (Opcional)'}
                    underlineColorAndroid={'#3F3F3F'}
                    multiline={true}
                    numberOfLines={4}
                    selectTextOnFocus={false}
                    maxLength={500}
                    textAlignVertical={true}
                    left={<TextInput.Icon name="book" color={'#7E57C2'} />}
                  />
                </View>
              </View>
              <RectButton
                onPress={() => {
                  if (!name || !user_city || !user_state) {
                    Popup.show({
                      type: 'Danger',
                      title: 'Erro!',
                      button: true,
                      textBody:
                        'Nome, estado e cidade são informações obrigatórias que precisam ser preenchidas',
                      buttonText: 'Ok',
                      callback: () => Popup.hide(),
                    });
                  } else if (!avatar) {
                    Popup.show({
                      type: 'Warning',
                      title: 'Selecione uma foto',
                      button: true,
                      textBody: 'Escolha uma foto para avançar',
                      buttonText: 'Ok',
                      callback: () => Popup.hide(),
                    });
                  } else {
                    navigation.navigate('RegisterUser2');
                  }
                }}
                style={styles.buttonStyle}>
                <Text style={styles.textButton}>Avançar</Text>
              </RectButton>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </Root>
  );
}
