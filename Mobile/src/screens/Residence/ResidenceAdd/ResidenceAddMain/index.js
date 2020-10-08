import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  KeyboardAvoidingView,
  useWindowDimensions,
  Alert,
} from 'react-native';

import styles from './styles';
import textStyles from '../../../../textStyles';

import Icon from 'react-native-vector-icons/Feather';
import Div from '../../../../Component/Div';

import ImagePicker from 'react-native-image-picker';
import 'react-native-get-random-values';
import {nanoid} from 'nanoid';

import ResidenceAddHeader from '../../../../Component/ResidenceAddHeader';
import {
  BorderlessButton,
  FlatList,
  RectButton,
  ScrollView,
} from 'react-native-gesture-handler';

import {TextInput} from 'react-native-paper';
import {Root, Popup} from 'popup-ui';

import {useResidenceAdd} from '../../../../contexts/residenceAdd';
export default function ResidenceAddMain({navigation}) {
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
  } = useResidenceAdd();

  const width = useWindowDimensions().width;

  const selectFile = () => {
    var options = {
      title: 'Selecionar imagem',
      takePhotoButtonTitle: 'Tirar uma foto',
      chooseFromLibraryButtonTitle: 'Escolher da galeria',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (res) => {
      if (res.didCancel) {
      } else if (res.error) {
      } else if (res.customButton) {
        alert(res.customButton);
      } else {
        let source = res;

        //const newArr = resourcePath.split();

        setResourcePath([...resourcePath, source]);
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
      <Root>
        <ResidenceAddHeader />
        <View style={styles.container}>
          <KeyboardAvoidingView
            enabled={false}
            style={[styles.card, {width: width - 55}]}>
            <Text style={[styles.cardTitle, textStyles.font]}>
              {' '}
              Introdução{' '}
            </Text>
            <Div threshold={120} height={2} />
            <Text style={[styles.description, textStyles.font]}>
              Escolhe um nome, preço, e tire algumas fotos do seu imóvel. :D
            </Text>
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
            <View style={styles.cardFooter}>
              <BorderlessButton
                style={styles.navButton}
                onPress={() => {
                  //navigation.goBack();
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
                    if (VerifyPhotos()) {
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

                  //
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
