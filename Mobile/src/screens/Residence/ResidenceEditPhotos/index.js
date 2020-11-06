import {nanoid} from 'nanoid';
import React, {useState, useEffect} from 'react';
import {Alert, Text, View, FlatList, Image} from 'react-native';
import {
  BorderlessButton,
  RectButton,
  ScrollView,
} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Feather';

import ResidenceAddHeader from '../../../Component/ResidenceAddHeader';
import styles from './styles';
export default function ResidenceEditPhotos({navigation, route}) {
  const [newImagesArray, setNewImagesArray] = useState([]);
  const [newImagesObject, setNewImagesObject] = useState([]);
  const [oldImagesArray, setOldImagesArray] = useState([]);

  const [imagesToDelete, setImagesToDelete] = useState([]);
  const [imagesToAdd, setImagesToAdd] = useState([]);
  const {residence} = route.params;
  useEffect(() => {
    setOldImagesArray(residence.images);
  }, [residence.images]);
  const selectFile = () => {
    var options = {
      title: 'Selecionar imagem',
      takePhotoButtonTitle: 'Tirar uma foto',
      chooseFromLibraryButtonTitle: 'Escolher da galeria',
      storageOptions: {
        skipBackup: true,
        path: 'imora',
      },
    };

    ImagePicker.showImagePicker(options, (res) => {
      if (res.didCancel) {
      } else if (res.error) {
      } else if (res.customButton) {
        alert(res.customButton);
      } else {
        const image = {
          uri: res.uri,
          name: res.fileName,
          type: res.type,
        };
        setNewImagesObject([...newImagesObject, image]);
        setNewImagesArray([...newImagesArray, res]);
      }
    });
  };

  function DeleteOldImg(item) {
    setOldImagesArray(
      oldImagesArray.filter((img) => {
        return img !== item;
      }),
    );

    setImagesToDelete([
      ...imagesToDelete,
      oldImagesArray.filter((img) => {
        return img === item;
      }),
    ]);
  }
  function DeleteNewImg(item) {
    setNewImagesArray(
      newImagesArray.filter((img) => {
        return img.fileName !== item.fileName;
      }),
    );
  }

  const DeleteImageConfirmation = (item, imageType) => {
    Alert.alert(
      'Confirmação de exclusão',
      'Você deseja excluir essa imagem?',
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => {
            if (imageType === 'old') {
              DeleteOldImg(item);
            } else if (imageType === 'new') {
              DeleteNewImg(item);
            }
          },
          style: 'destructive',
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <>
      <ResidenceAddHeader
        title={'Edite suas fotos'}
        subtitle={'Clique em uma foto pra excluí-la.'}
      />
      <ScrollView>
        <View styles={styles.container}>
          <View style={styles.oldPhotosView}>
            <Text style={styles.oldImagesTitle}>Fotos atuais: </Text>
            <FlatList
              data={oldImagesArray}
              keyExtractor={() => nanoid(9)}
              numColumns={3}
              renderItem={({item}) => {
                return (
                  <View style={styles.imageComponent}>
                    <BorderlessButton
                      style={styles.deleteImageButton}
                      onPress={() => {
                        DeleteImageConfirmation(item);
                      }}>
                      <Image
                        source={{
                          uri: item,
                        }}
                        style={styles.oldImg}
                      />
                    </BorderlessButton>
                  </View>
                );
              }}
            />
          </View>
          <View style={styles.oldPhotosView}>
            <Text style={styles.oldImagesTitle}>
              Fotos que serão adicionadas:
            </Text>

            <FlatList
              data={newImagesArray}
              keyExtractor={() => nanoid(9)}
              numColumns={3}
              renderItem={({item}) => {
                return (
                  <View style={styles.imageComponent}>
                    <BorderlessButton
                      style={styles.deleteImageButton}
                      onPress={() => {
                        DeleteImageConfirmation(item, 'new');
                      }}>
                      <Image
                        source={{
                          uri: 'data:image/jpeg;base64,' + item.data,
                        }}
                        style={styles.oldImg}
                      />
                    </BorderlessButton>
                  </View>
                );
              }}
              onEndReachedThreshold={0.3}
            />
          </View>
          <RectButton
            style={styles.addImageButton}
            onPress={() => {
              selectFile();
            }}>
            <View style={styles.iconView}>
              <Icon name={'paperclip'} color={'#3F3F3F'} size={24} />
              <Text style={styles.addImageButtonText}>Adicionar Foto </Text>
              <Icon name={'chevron-right'} color={'#3F3F3F'} size={24} />
            </View>
          </RectButton>
        </View>
      </ScrollView>
      <RectButton style={styles.saveButton} onPress={() => {}}>
        <Icon name={'edit'} color={'#FFF'} size={24} />
      </RectButton>
    </>
  );
}
