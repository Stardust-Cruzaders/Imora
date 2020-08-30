/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {RadioButton, Divider} from 'react-native-paper';
import CheckboxComponent from '../../Component/CheckboxComponent';

import styles from './styles';

export default function FilterScreen() {
  // InputText
  const [value, onChangeText] = useState();
  // RadioButtons
  const [locationChecked, setLocationChecked] = useState('first');
  const [imovelChecked, setImovelchecked] = useState('first');
  const [imovelTypeChecked, setImovelTypeChecked] = useState('first');
  // CheckBoxes
  const [allowPets, setAllowPets] = useState(false);
  const [allowSmokers, setAllowSmokers] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textTitleStyle}>Filtros</Text>
      </View>
      <View style={styles.filterBox}>
        <View style={styles.marginBox}>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            clearTextOnFocus={true}
            placeholder=" $ Preço/Mês"
          />
          <View style={styles.radioButtonView}>
            <RadioButton
              value="first"
              status={locationChecked === 'first' ? 'checked' : 'unchecked'}
              color={'#7E57C2'}
              onPress={() => setLocationChecked('first')}
            />
            <Text style={styles.textStyle}>Morar com outros Residentes</Text>
          </View>
          <View style={styles.radioButtonView}>
            <RadioButton
              value="second"
              status={locationChecked === 'second' ? 'checked' : 'unchecked'}
              color={'#7E57C2'}
              onPress={() => setLocationChecked('second')}
            />
            <Text style={styles.textStyle}>Morar sozinho</Text>
          </View>

          <Divider style={styles.divider} />

          <Text style={styles.subTitleStyle}>Tipo de Locação</Text>
          <View style={styles.radioButtonView}>
            <RadioButton
              value="first "
              status={imovelChecked === 'first' ? 'checked' : 'unchecked'}
              color={'#7E57C2'}
              onPress={() => setImovelchecked('first')}
            />
            <Text style={styles.textStyle}>Casa Inteira</Text>
          </View>
          <View style={styles.radioButtonView}>
            <RadioButton
              value="second "
              status={imovelChecked === 'second' ? 'checked' : 'unchecked'}
              color={'#7E57C2'}
              onPress={() => setImovelchecked('second')}
            />
            <Text style={styles.textStyle}>Casa Compartilhada</Text>
          </View>
          <Divider style={styles.divider} />

          <Text style={styles.subTitleStyle}>Tipo de imóvel</Text>
          <View style={styles.radioButtonView}>
            <RadioButton
              value="first"
              status={imovelTypeChecked === 'first' ? 'checked' : 'unchecked'}
              color={'#7E57C2'}
              onPress={() => setImovelTypeChecked('first')}
            />
            <Text style={styles.textStyle}>Apartamento</Text>
          </View>

          <View style={styles.radioButtonView}>
            <RadioButton
              value="second"
              status={imovelTypeChecked === 'second' ? 'checked' : 'unchecked'}
              color={'#7E57C2'}
              onPress={() => setImovelTypeChecked('second')}
            />
            <Text style={styles.textStyle}>Casa</Text>
          </View>
          <View style={styles.radioButtonView}>
            <RadioButton
              value="third"
              status={imovelTypeChecked === 'third' ? 'checked' : 'unchecked'}
              color={'#7E57C2'}
              onPress={() => setImovelTypeChecked('third')}
            />
            <Text style={styles.textStyle}>Chalé</Text>
          </View>

          <Divider style={styles.divider} />

          <Text style={styles.subTitleStyle}>Condições</Text>
          <CheckboxComponent
            value={allowPets}
            setValue={setAllowPets}
            text={'Aceita pets'}
          />
          <CheckboxComponent
            value={allowSmokers}
            setValue={setAllowSmokers}
            text={'Aceita fumantes'}
          />
        </View>
      </View>
    </View>
  );
}
