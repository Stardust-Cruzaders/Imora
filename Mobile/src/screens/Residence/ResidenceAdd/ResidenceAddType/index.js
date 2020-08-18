/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import styles from './styles';
import textStyles from '../../../../textStyles';
import Icon from 'react-native-vector-icons/Feather';
import Div from '../../../../Component/Div';

import {RadioButton} from 'react-native-paper';

import ResidenceAddHeader from '../../../../Component/ResidenceAddHeader';
import {BorderlessButton} from 'react-native-gesture-handler';

export default function ResidenceAddType({navigation}) {
  const [checked, setChecked] = useState('first');
  const [checkedHouseType, setCheckedHouseType] = useState('house');
  const [description, setDescription] = useState('');
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
                    value="first"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('first')}
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
                    value="second"
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('second')}
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
                    value="third"
                    status={checked === 'third' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('third')}
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
                    value="home"
                    status={
                      checkedHouseType === 'home' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedHouseType('home')}
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
                    value="apartment"
                    status={
                      checkedHouseType === 'apartment' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedHouseType('apartment')}
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
                    value="kitnet"
                    status={
                      checkedHouseType === 'kitnet' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedHouseType('kitnet')}
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
                    value="rep"
                    status={
                      checkedHouseType === 'rep' ? 'checked' : 'unchecked'
                    }
                    onPress={() => setCheckedHouseType('rep')}
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
