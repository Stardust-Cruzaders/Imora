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
import Icon from 'react-native-vector-icons/Feather';

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
          <View style={styles.body}>
            <Text style={styles.fontTitle}>Cadastre-se para começar!</Text>
            <View style={styles.whiteBox}>
              <View
                style={{
                  borderWidth: 10,
                  borderColor: '#FFF',
                  borderRadius: 100,
                  position: 'absolute',
                  top: -50,
                  right: 100,
                }}>
                <RectButton
                  onPress={() => {
                    selectFile();
                  }}
                  style={{
                    borderWidth: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 60,
                    height: 60,
                    backgroundColor: '#DDE0E3',
                    borderRadius: 50,
                  }}>
                  <Image
                    source={
                      temporaryAvatar
                        ? {uri: 'data:image/jpeg;base64,' + temporaryAvatar}
                        : {
                            uri:
                              'https://i.pinimg.com/originals/1e/bd/e5/1ebde5ea08d965cfa4a7e0a8616087a5.jpg',
                          }
                    }
                    style={styles.avatar}
                  />
                </RectButton>
              </View>

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
                    maxLength={500}
                    textAlignVertical={true}
                    left={<TextInput.Icon name="book" color={'#7E57C2'} />}
                  />
                </View>
              </View>
              <RectButton
                onPress={() => {
                  navigation.navigate('RegisterUser2');
                }}
                style={styles.buttonStyle}>
                <Text style={styles.textButton}>Avançar</Text>
              </RectButton>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}
