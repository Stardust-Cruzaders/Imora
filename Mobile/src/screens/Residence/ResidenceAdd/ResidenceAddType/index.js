/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {Divider} from 'react-native-elements';
import styles from './styles';
import textStyles from '../../../../textStyles';
import Icon from 'react-native-vector-icons/Feather';
import Div from '../../../../Component/Div';

import {RadioButton} from 'react-native-paper';

export default function ResidenceAddType() {
  const [checked, setChecked] = useState('first');
  const [checkedHouseType, setCheckedHouseType] = useState('house');
  const [description, setDescription] = useState('');
  const width = useWindowDimensions().width;
  return (
    <>
      <View style={[styles.header, {width: width}]}>
        <Text style={[styles.headerText, textStyles.font]}>
          Configure seu anúncio
        </Text>
        <Divider style={[styles.headerDivider, {width: width - 100}]} />
      </View>
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
                  <Text style={styles.cardText}>Espaço inteiro </Text>
                </View>
                <Text style={styles.description}>
                  O usuário terá todo o espaço toda a sua disposição
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <RadioButton
                    value="second"
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('second')}
                    color={'#7E57C2'}
                  />
                  <Text style={styles.cardText}> Quarto inteiro </Text>
                </View>
                <Text style={styles.description}>
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
                  <Text style={styles.cardText}>Quarto Compartilhado</Text>
                </View>
                <Text style={styles.description}>
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
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                  <Icon
                    name={'arrow-left-circle'}
                    color={'#7E57C2'}
                    size={40}
                  />
                </TouchableOpacity>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.activeDot}>•</Text>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.dot}>•</Text>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                  <Icon
                    name={'arrow-right-circle'}
                    color={'#7E57C2'}
                    size={40}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}