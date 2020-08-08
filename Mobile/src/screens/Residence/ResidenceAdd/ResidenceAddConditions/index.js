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

export default function ResidenceAddConditions() {
  const [maxResidentNum, setMaxResidentNum] = useState('1');
  const [allowPets, setAllowPets] = useState(false);
  const [allowSmokers, setAllowSmokers] = useState(false);

  const [checked, setChecked] = useState('first');
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
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('first')}
                  color={'#7E57C2'}
                />
                <Text style={[styles.cardText, textStyles.font]}>
                  Masculino
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton
                  value="second"
                  status={checked === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('second')}
                  color={'#7E57C2'}
                />
                <Text style={[styles.cardText, textStyles.font]}>Feminino</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton
                  value="third"
                  status={checked === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('third')}
                  color={'#7E57C2'}
                />
                <Text style={[styles.cardText, textStyles.font]}>
                  Indiferente
                </Text>
              </View>
            </View>
            <View style={styles.cardFooter}>
              <BorderlessButton style={styles.button} onPress={() => {}}>
                <Icon name={'arrow-left-circle'} color={'#7E57C2'} size={40} />
              </BorderlessButton>
              <Text style={styles.dot}>•</Text>
              <Text style={styles.dot}>•</Text>
              <Text style={styles.dot}>•</Text>
              <Text style={styles.activeDot}>•</Text>
              <Text style={styles.dot}>•</Text>
              <BorderlessButton style={styles.button} onPress={() => {}}>
                <Icon name={'arrow-right-circle'} color={'#7E57C2'} size={40} />
              </BorderlessButton>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
