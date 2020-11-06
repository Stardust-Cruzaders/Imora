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
import {Root, Popup} from 'popup-ui';
import ResidenceAddHeader from '../../../Component/ResidenceAddHeader';
import {useAuth} from '../../../contexts/auth';
import styles from './styles';
export default function ResidenceEditPhotos({navigation, route}) {
  const [newImagesArray, setNewImagesArray] = useState([]);
  const [newImagesObject, setNewImagesObject] = useState([]);
  const [oldImagesArray, setOldImagesArray] = useState([]);

  const [imagesToDelete, setImagesToDelete] = useState([]);
  const {residence} = route.params;
  const {token} = useAuth();
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
  function handleUpdateResidencePhotos() {}
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
  function AddNewImages() {
    let formData = new FormData();
    newImagesObject.map((image) => {
      formData.append('image', image);
    });
    const url = 'https://imora-rest-api.herokuapp.com/residences/upload';
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    };
    fetch(url, config)
      .then((response) => response.json())
      .then((result) => {
        handleUpdateResidencePhotos(residence.id, result.files);

        Popup.show({
          type: 'Success',
          title: 'Residência Alterada com sucesso',
          button: true,
          textBody:
            'Sua residência foi alterada com sucesso! 🥳🥳 Você pode ver e modificar seu anúncio na aba de minhas residências, em seu perfil ^^',
          buttontext: 'OK',
          callback: () => {
            Popup.hide();
            navigation.navigate('Feed');
          },
        });
      })
      .catch((err) => {
        console.log('Erro ao tentar fazer o upload: ' + err);
        Popup.show({
          type: 'Danger',
          title: 'Erro',
          button: true,
          textBody: 'Erro ao tentar fazer o upload: ' + err,
          buttontext: 'OK',
          callback: () => {
            Popup.hide();
            navigation.navigate('Feed');
          },
        });
      });
  }
  function DeleteSelectedImages() {}
  async function SaveModifications() {
    DeleteImageConfirmation();
    AddNewImages();
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
  const SaveModificationsAlert = () => {
    Alert.alert(
      'Deseja salvar suas modificações?',
      'Ao clicar em sim, as imagens dessa residência serão permanentemente alteradas',
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => SaveModifications(),

          style: 'destructive',
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <>
      <Root>
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
        <RectButton
          style={styles.saveButton}
          onPress={() => {
            SaveModificationsAlert();
          }}>
          <Icon name={'edit'} color={'#FFF'} size={24} />
        </RectButton>
      </Root>
    </>
  );
}
