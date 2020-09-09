/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, useWindowDimensions, ScrollView} from 'react-native';
import styles from './styles';
import textStyles from '../../../../textStyles';
import Icon from 'react-native-vector-icons/Feather';
import Div from '../../../../Component/Div';

import {RadioButton, TextInput} from 'react-native-paper';

import ResidenceAddHeader from '../../../../Component/ResidenceAddHeader';
import {BorderlessButton} from 'react-native-gesture-handler';

import {useResidenceAdd} from '../../../../contexts/residenceAdd';
export default function ResidenceAddType({navigation}) {
  const {
    locationType,
    setLocationType,
    checkedHouseType,
    setCheckedHouseType,
    description,
    setDescription,
  } = useResidenceAdd();
  const width = useWindowDimensions().width;
  return (
    <>
      <ResidenceAddHeader />
      <View style={styles.container}>
        <ScrollView>
          <View style={[styles.card, {width: width - 55}]}>
            <Text style={[styles.cardTitle, textStyles.font]}>
              Tipo de locação
            </Text>
            <Div threshold={120} height={2} />
            <Text style={[styles.description, textStyles.font]}>
              Descreva um pouco mais o seu imóvel
            </Text>
            <View style={styles.main}>
              <View style={styles.spaceType}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <RadioButton
                    value="Espaço inteiro"
                    status={
                      locationType === 'Espaço inteiro'
                        ? 'checked'
                        : 'unchecked'
                    }
                    onPress={() => setLocationType('Espaço inteiro')}
                    color={'#7E57C2'}
                  />
                  <Text style={[styles.cardText, textStyles.font]}>
                    Espaço inteiro
                  </Text>
                </View>
                <Text style={[styles.description, textStyles.font]}>
                  O usuário terá todo o espaço toda a sua disposição
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <RadioButton
                    value="Quarto inteiro"
                    status={
                      locationType === 'Quarto inteiro'
                        ? 'checked'
                        : 'unchecked'
                    }
                    onPress={() => setLocationType('Quarto inteiro')}
                    color={'#7E57C2'}
                  />
                  <Text style={[styles.cardText, textStyles.font]}>
                    Quarto inteiro
                  </Text>
                </View>
                <Text style={[styles.description, textStyles.font]}>
                  O usuário terá um quarto só seu, porém terá que dividir a
                  moradia com outros residentes
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <RadioButton
                    value="Quarto Compartilhadod"
                    status={
                      locationType === 'Quarto Compartilhado'
                        ? 'checked'
                        : 'unchecked'
                    }
                    onPress={() => setLocationType('Quarto Compartilhado')}
                    color={'#7E57C2'}
                  />
                  <Text style={[styles.cardText, textStyles.font]}>
                    Quarto Compartilhado
                  </Text>
                </View>
                <Text style={[styles.description, textStyles.font]}>
                  O usuário terá que compartilhar um quarto com outros
                  residentes.
                </Text>
              </View>
              <TextInput
                value={description}
                onChangeText={(text) => setDescription(text)}
                style={[styles.input, {width: width - 95}]}
                placeholder={
                  'Descrição: Por exemplo, "Casa de 60 m², perto da faculdade."'
                }
                placeholderTextColor={'gray'}
                multiline={true}
                maxLength={600}
              />
              <View style={styles.residenceType}>
                <Text
                  style={[
                    textStyles.font,
                    styles.cardText,
                    {fontWeight: 'bold', fontSize: 22, marginBottom: 10},
                  ]}>
                  Tipo de imóvel:
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <RadioButton
                    value="Casa"
                    status={
                      checkedHouseType === 'Casa' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedHouseType('Casa')}
                    color={'#7E57C2'}
                  />
                  <Text style={styles.cardText}>Casa</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 5,
                  }}>
                  <RadioButton
                    value="Apartamento"
                    status={
                      checkedHouseType === 'Apartamento'
                        ? 'checked'
                        : 'unchecked'
                    }
                    onPress={() => setCheckedHouseType('Apartamento')}
                    color={'#7E57C2'}
                  />
                  <Text style={styles.cardText}>Apartamento</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 5,
                  }}>
                  <RadioButton
                    value="KitNet"
                    status={
                      checkedHouseType === 'KitNet' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedHouseType('KitNet')}
                    color={'#7E57C2'}
                  />
                  <Text style={styles.cardText}>Kitnet</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  <RadioButton
                    value="República"
                    status={
                      checkedHouseType === 'República' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedHouseType('República')}
                    color={'#7E57C2'}
                  />
                  <Text style={styles.cardText}>República</Text>
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
                <Text style={styles.activeDot}>•</Text>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.dot}>•</Text>
                <BorderlessButton
                  style={styles.button}
                  onPress={() => {
                    navigation.navigate('ResidenceAddComfort');
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
        </ScrollView>
      </View>
    </>
  );
}
