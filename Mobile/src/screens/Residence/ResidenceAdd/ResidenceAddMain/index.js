/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eqeqeq */
import React, {useEffect} from 'react';
import {
  Image,
  Text,
  View,
  KeyboardAvoidingView,
  useWindowDimensions,
  Alert,
} from 'react-native';

import styles from './styles';

import Icon from 'react-native-vector-icons/Feather';

import ImagePicker from 'react-native-image-picker';
import 'react-native-get-random-values';
import {nanoid} from 'nanoid';

import ResidenceAddHeader from '../../../../Component/ResidenceAddHeader';
import {
  BorderlessButton,
  FlatList,
  RectButton,
} from 'react-native-gesture-handler';

import {TextInput} from 'react-native-paper';
import {Root, Popup} from 'popup-ui';

import {useResidenceAdd} from '../../../../contexts/residenceAdd';

export default function ResidenceAddMain({navigation, route}) {
  const {
    title,
    setTitle,
    price,
    setPrice,
    numRooms,
    setNumRooms,
    numBathrooms,
    setNumBathrooms,
    resourcePath,
    setResourcePath,
    setDefaultValues,
    isUpdatingValues,
    setIsUpdatingValues,
    images,
    setImages,
  } = useResidenceAdd();
  const width = useWindowDimensions().width;

  useEffect(() => {
    if (route.params) {
      if (route.params.residence) {
        setIsUpdatingValues(true);
        setDefaultValues(route.params.residence);
        console.log(images);
      } else {
        setIsUpdatingValues(false);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        setImages([...images, image]);
        setResourcePath([...resourcePath, res]);
      }
    });
  };
  function VerifyFields() {
    if (title != '' && price != '' && numRooms != '' && numBathrooms != '') {
      return true;
    } else {
      return false;
    }
  }
  function VerifyPhotos() {
    if (resourcePath.length >= 1) {
      return true;
    } else {
      return false;
    }
  }
  function DeleteImg(item) {
    setResourcePath(
      resourcePath.filter((img) => {
        return img.fileName !== item.fileName;
      }),
    );
    setImages(
      images.filter((img) => {
        return img.name !== item.fileName;
      }),
    );
  }
  const DeleteImageConfirmation = (item) => {
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
          onPress: () => DeleteImg(item),
          style: 'destructive',
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <>
      <Root style={{flex:1}}>

        <View style={styles.container}>
       
          <KeyboardAvoidingView
            enabled={true}
            style={[styles.card, {width: width - 55}]}>
            <View style={styles.main}>
           
              <TextInput
                style={[styles.input, {width: width - 80}]}
                value={title}
                onChangeText={(text) => setTitle(text)}
                placeholder={'Título: Ex: Casa com 4 quartos'}
                maxLength={75}
              />

              <TextInput
                style={[styles.input, {width: width - 80}]}
                value={price.toString()}
                onChangeText={(text) => setPrice(text)}
                placeholder={'Preço/Mês '}
                keyboardType={'decimal-pad'}
                maxLength={10}
              />
              <TextInput
                style={[styles.input, {width: width - 80}]}
                value={numRooms.toString()}
                onChangeText={(text) => setNumRooms(text)}
                placeholder={'Quantidade de quartos disponíveis '}
                keyboardType={'number-pad'}
                maxLength={3}
              />
              <TextInput
                style={[styles.input, {width: width - 80}]}
                value={numBathrooms.toString()}
                onChangeText={(text) => setNumBathrooms(text)}
                placeholder={'Quantidade de banheiros disponíveis'}
                keyboardType={'number-pad'}
                maxLength={3}
              />
            
            </View>
            {isUpdatingValues === false && (
              <View>
                <RectButton
                  style={[styles.button, {width: width - 80}]}
                  onPress={() => {
                    selectFile();
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Icon name={'paperclip'} color={'#3F3F3F'} size={24} />
                    <Text style={styles.buttonText}>Anexar Foto </Text>
                    <Icon
                      name={'chevron-right'}
                      color={'#3F3F3F'}
                      size={24}
                      style={{position: 'absolute', left: 290}}
                    />
                  </View>
                </RectButton>
                

                <View style={styles.imageView}>
                  {resourcePath != undefined && (
                    <FlatList
                      horizontal
                      data={resourcePath}
                      keyExtractor={() => nanoid(9)}
                      renderItem={({item}) => {
                        return (
                          <View style={styles.imageComponent}>
                            <BorderlessButton
                              style={{width: 100, height: 100}}
                              onPress={() => {
                                DeleteImageConfirmation(item);
                              }}>
                              <Image
                                source={{
                                  uri: 'data:image/jpeg;base64,' + item.data,
                                }}
                                style={{width: 100, height: 100}}
                              />
                            </BorderlessButton>
                          </View>
                        );
                      }}
                      
                    />
                    
                  )}
                  
                </View>
                
              </View>
              
            )}
            <View style={styles.cardFooter}>
              <BorderlessButton
                style={styles.navButton}
                onPress={() => {
                  navigation.goBack();
                }}>
                <Icon name={'log-out'} color={'#E03826'} size={40} />
              </BorderlessButton>
              <Text style={styles.activeDot}>•</Text>
              <Text style={styles.dot}>•</Text>
              <Text style={styles.dot}>•</Text>
              <Text style={styles.dot}>•</Text>
              <Text style={styles.dot}>•</Text>
              <Text style={styles.dot}>•</Text>
              <BorderlessButton
                style={styles.navButton}
                onPress={() => {
                  if (VerifyFields()) {
                    if (VerifyPhotos() || isUpdatingValues) {
                      navigation.navigate('ResidenceAddType');
                    } else {
                      Popup.show({
                        type: 'Warning',
                        title: 'Nenhuma foto encontrada',
                        button: true,
                        textBody:
                          'Você precisa fornecer no mínimo uma foto da sua residência',
                        buttontext: 'OK',
                        callback: () => Popup.hide(),
                      });
                    }
                  } else {
                    Popup.show({
                      type: 'Danger',
                      title: 'Campos não preenchidos',
                      button: true,
                      textBody: 'Campos obrigatórios não foram preenchidos',
                      buttontext: 'OK',
                      callback: () => Popup.hide(),
                    });
                  }
                }}>
                <Icon name={'arrow-right-circle'} color={'#7E57C2'} size={40} />
              </BorderlessButton>
            
            </View>
          </KeyboardAvoidingView>
         
        </View>
      </Root>
    </>
  );
}
