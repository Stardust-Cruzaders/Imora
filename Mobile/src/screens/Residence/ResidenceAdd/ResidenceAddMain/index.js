import React from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  useWindowDimensions,
} from 'react-native';

import styles from './styles';
import textStyles from '../../../../textStyles';

import Icon from 'react-native-vector-icons/Feather';
import Div from '../../../../Component/Div';

import ResidenceAddHeader from '../../../../Component/ResidenceAddHeader';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';

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
  } = useResidenceAdd();
  const width = useWindowDimensions().width;

  function VerifyFields() {
    if (title != '' && price != '' && numRooms != '' && numBathrooms != '') {
      return true;
    } else {
      return false;
    }
  }
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
              />

              <TextInput
                style={[styles.input, {width: width - 80}]}
                value={price.toString()}
                onChangeText={(text) => setPrice(text)}
                placeholder={'Preço/Mês '}
                keyboardType={'decimal-pad'}
              />
              <TextInput
                style={[styles.input, {width: width - 80}]}
                value={numRooms.toString()}
                onChangeText={(text) => setNumRooms(text)}
                placeholder={'Quantidade de quartos disponíveis '}
                keyboardType={'number-pad'}
              />
              <TextInput
                style={[styles.input, {width: width - 80}]}
                value={numBathrooms.toString()}
                onChangeText={(text) => setNumBathrooms(text)}
                placeholder={'Quantidade de banheiros disponíveis'}
                keyboardType={'number-pad'}
              />
            </View>

            <BorderlessButton
              style={[styles.button, {width: width - 80}]}
              onPress={() => {}}>
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
            </BorderlessButton>

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
                    navigation.navigate('ResidenceAddType');
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
