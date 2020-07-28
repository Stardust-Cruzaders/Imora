import React, {useState} from 'react';
import {Text, View, TouchableOpacity, useWindowDimensions} from 'react-native';
import {Divider} from 'react-native-elements';
import styles from './styles';

import Icon from 'react-native-vector-icons/Feather';
import Div from '../../../../Component/Div';

import CheckboxComponent from '../../../../Component/CheckboxComponent';
import {RadioButton} from 'react-native-paper';

export default function ResidenceAddConditions() {
  const [maxResidentNum, setMaxResidentNum] = useState('');
  const [allowPets, setAllowPets] = useState(false);
  const [allowSmokers, setAllowSmokers] = useState(false);

  const [checked, setChecked] = useState('first');
  const width = useWindowDimensions().width;
  return (
    <>
      <View style={[styles.header, {width: width}]}>
        <Text style={styles.headerText}> Configure seu anúncio </Text>
        <Divider style={[styles.headerDivider, {width: width - 100}]} />
      </View>
      <View style={styles.container}>
        <View style={[styles.card, {width: width - 55}]}>
          <Text style={styles.cardTitle}> Condições </Text>
          <Div threshold={120} height={2} />
          <Text style={styles.description}>
            Cheque todos os itens que serão proibidos na residência.
          </Text>
          <View style={styles.checklist}>
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
                style={[styles.cardText, {marginBottom: 10, marginTop: 25}]}>
                Preferência de Residentes:{' '}
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('first')}
                  color={'#7E57C2'}
                />
                <Text style={styles.cardText}> Masculino </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton
                  value="second"
                  status={checked === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('second')}
                  color={'#7E57C2'}
                />
                <Text style={styles.cardText}> Feminino </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton
                  value="third"
                  status={checked === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('third')}
                  color={'#7E57C2'}
                />
                <Text style={styles.cardText}> Indiferente </Text>
              </View>
            </View>
            <View style={styles.cardFooter}>
              <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Icon name={'arrow-left-circle'} color={'#7E57C2'} size={40} />
              </TouchableOpacity>
              <Text style={styles.dot}>•</Text>
              <Text style={styles.dot}>•</Text>
              <Text style={styles.activeDot}>•</Text>
              <Text style={styles.dot}>•</Text>
              <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Icon name={'arrow-right-circle'} color={'#7E57C2'} size={40} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
