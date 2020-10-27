import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import {useAuth} from '../../contexts/auth';

import styles from './styles';
export default function UserRowEditAvatar({user}) {
  const {setAvatar} = useAuth();
  const [temporaryAvatar, setTemporaryAvatar] = useState(null);
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
      <RectButton
        onPress={() => {
          selectFile();
        }}
        style={styles.button}>
        <View style={styles.avatarView}>
          <Image
            style={styles.avatar}
            source={
              temporaryAvatar
                ? {uri: 'data:image/jpeg;base64,' + temporaryAvatar}
                : {
                    uri: user.avatar,
                  }
            }
          />
        </View>
        <View style={styles.infoView}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.description}>
            Clique aqui para alterar sua foto.
          </Text>
        </View>
      </RectButton>
    </View>
  );
}
