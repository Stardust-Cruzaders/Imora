/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, useWindowDimensions} from 'react-native';

import textStyles from '../../../../textStyles';
import styles from './styles';

import {BorderlessButton} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Feather';
import Div from '../../../../Component/Div';

import CheckboxComponent from '../../../../Component/CheckboxComponent';
import {RadioButton, TextInput} from 'react-native-paper';
import ResidenceAddHeader from '../../../../Component/ResidenceAddHeader';

import {useResidenceAdd} from '../../../../contexts/residenceAdd';
import {Root, Popup} from 'popup-ui';

export default function ResidenceAddConditions({navigation}) {
  const {
    maxResidentNum,
    setMaxResidentNum,
    allowPets,
    setAllowPets,
    allowSmokers,
    setAllowSmokers,
    genderPreference,
    setGenderPreference,
    setConditions,
    currentResidents,
    setCurrentResidents,
  } = useResidenceAdd();
  const width = useWindowDimensions().width;

  function VerifyFields() {
    if (maxResidentNum === '' || maxResidentNum === '0') {
      return false;
    } else {
      return true;
    }
  }
  return (
    <>
      <Root>
        <ResidenceAddHeader />
        <View style={styles.container}>
          <View style={[styles.card, {width: width - 55}]}>
            <Text style={[styles.cardTitle, textStyles.font]}> Condições </Text>
            <Div threshold={120} height={2} />
            <Text style={[styles.description, textStyles.font]}>
              Aqui você pode definir diferentes tipos de restrições para sua
              residência
            </Text>
            <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  marginHorizontal: 10,
                  marginBottom: 20,
                }}>
                <Text style={[styles.cardText, textStyles.font]}>
                  Número máximo de ocupantes:
                </Text>
                <TextInput
                  style={[styles.input]}
                  value={maxResidentNum}
                  onChangeText={(text) => setMaxResidentNum(text)}
                  keyboardType={'number-pad'}
                  placeholder={'0'}
                  maxLength={3}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  marginHorizontal: 10,
                  marginBottom: 20,
                }}>
                <Text style={[styles.cardText, textStyles.font]}>
                  Número atual de ocupantes:{' '}
                </Text>
                <TextInput
                  style={[styles.input]}
                  value={currentResidents}
                  onChangeText={(text) => setCurrentResidents(text)}
                  keyboardType={'number-pad'}
                  placeholder={'0'}
                  maxLength={3}
                />
              </View>
              
              <CheckboxComponent
                value={allowPets}
                setValue={setAllowPets}
                text={'Animais de estimação dentro de casa são proibidos.'}
              />
              <CheckboxComponent
                value={allowSmokers}
                setValue={setAllowSmokers}
                text={'Fumar dentro de casa é proibido.'}
              />

              <View style={styles.cardFooter}>
                <BorderlessButton
                  style={styles.button}
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Icon
                    name={'arrow-left-circle'}
                    color={'#7E57C2'}
                    size={40}
                  />
                </BorderlessButton>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.activeDot}>•</Text>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.dot}>•</Text>
                <BorderlessButton
                  style={styles.button}
                  onPress={() => {
                    setConditions(
                      [
                        {
                          id: 'Animais de estimação',
                          value: allowPets,
                          icon: 'pets',
                        },
                        {
                          id: 'Fumar dentro da residência',
                          value: allowSmokers,
                          icon: 'smoking-rooms',
                        },
                      ].filter((condition) => condition.value === true),
                    );
                    if (VerifyFields()) {
                      navigation.navigate('ResidenceAddLocationZipcode');
                    } else {
                      Popup.show({
                        type: 'Danger',
                        title: 'Número máximo de ocupantes',
                        button: true,
                        textBody:
                          'Número máximo de ocupantes não pode ser vazio ou igual a 0',
                        buttontext: 'OK',
                        callback: () => Popup.hide(),
                      });
                    }
                  }}>
                  <Icon
                    name={'arrow-right-circle'}
                    color={'#7E57C2'}
                    size={40}
                  />
                </BorderlessButton>
              </View>
            </View>
          </View>
      </Root>
    </>
  );
}
