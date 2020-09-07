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

export default function ResidenceAddConditions({navigation}) {
  const {
    maxResidentNum,
    setMaxResidentNum,
    allowPets,
    setAllowPets,
    allowSmokers,
    setAllowSmokers,
    checked2,
    setChecked2,
  } = useResidenceAdd();
  const width = useWindowDimensions().width;
  return (
    <>
      <ResidenceAddHeader />
      <View style={styles.container}>
        <View style={[styles.card, {width: width - 55}]}>
          <Text style={[styles.cardTitle, textStyles.font]}> Condições </Text>
          <Div threshold={120} height={2} />
          <Text style={[styles.description, textStyles.font]}>
            Cheque todos os itens que serão proibidos na residência.
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
                  value="first"
                  status={checked2 === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked2('first')}
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
                  value="second"
                  status={checked2 === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked2('second')}
                  color={'#7E57C2'}
                />
                <Text style={[styles.cardText, textStyles.font]}>Feminino</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <RadioButton
                  value="third"
                  status={checked2 === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked2('third')}
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
                <Icon name={'arrow-left-circle'} color={'#7E57C2'} size={40} />
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
                  navigation.navigate('ResidenceAddLocationZipcode');
                }}>
                <Icon name={'arrow-right-circle'} color={'#7E57C2'} size={40} />
              </BorderlessButton>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
