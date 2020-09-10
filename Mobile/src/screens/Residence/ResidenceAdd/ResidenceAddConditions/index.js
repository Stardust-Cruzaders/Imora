/* eslint-disable react-native/no-inline-styles */
import React from 'react';
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
  } = useResidenceAdd();
  const width = useWindowDimensions().width;

  function VerifyFields() {
    if (maxResidentNum != '' || maxResidentNum != '0') {
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
          <View style={[styles.card, {width: width - 55}]}>
            <Text style={[styles.cardTitle, textStyles.font]}> Condições </Text>
            <Div threshold={120} height={2} />
            <Text style={[styles.description, textStyles.font]}>
              Aqui você pode definir diferentes tipos de restrições para sua
              residência
            </Text>
            <View style={styles.checklist}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',

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
                  placeholder={'1'}
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
              <View style={styles.preferenceView}>
                <Text
                  style={[
                    styles.cardText,
                    textStyles.font,
                    {marginBottom: 10, marginTop: 25},
                  ]}>
                  Preferência de Residentes:{' '}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <RadioButton
                    value="Masculino"
                    status={
                      genderPreference === 'Masculino' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setGenderPreference('Masculino')}
                    color={'#7E57C2'}
                  />
                  <Text style={[styles.cardText, textStyles.font]}>
                    Masculino
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <RadioButton
                    value="Feminino"
                    status={
                      genderPreference === 'Feminino' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setGenderPreference('Feminino')}
                    color={'#7E57C2'}
                  />
                  <Text style={[styles.cardText, textStyles.font]}>
                    Feminino
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <RadioButton
                    value="Indiferente"
                    status={
                      genderPreference === 'Indiferente'
                        ? 'checked'
                        : 'unchecked'
                    }
                    onPress={() => setGenderPreference('Indiferente')}
                    color={'#7E57C2'}
                  />
                  <Text style={[styles.cardText, textStyles.font]}>
                    Indiferente
                  </Text>
                </View>
              </View>
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
                        title: 'Campos não preenchidos',
                        button: true,
                        textBody: 'Campos obrigatórios não foram preenchidos',
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
        </View>
      </Root>
    </>
  );
}
