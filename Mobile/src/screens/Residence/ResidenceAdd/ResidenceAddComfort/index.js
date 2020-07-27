import React, {useState} from 'react';
import {Text, View, TouchableOpacity, useWindowDimensions} from 'react-native';
import {Divider, CheckBox} from 'react-native-elements';
import styles from './styles';

import Icon from 'react-native-vector-icons/Feather';
import Div from '../../../../Component/Div';

import CheckboxComponent from '../../../../Component/CheckboxComponent';

export default function ResidenceAddComfort() {
  const [hasWifi, setHasWifi] = useState(false);
  const [hasTV, setHasTV] = useState(false);
  const [hasAC, setHasAC] = useState(false);
  const [hasNotebookWork, setHasNotebookWork] = useState(false);
  const [hasKitchen, setHasKitchen] = useState(false);
  const [hasGrill, setHasGrill] = useState(false);

  const [hasPool, setHasPool] = useState(false);
  const [hasParkingLot, setHasParkingLot] = useState(false);

  const width = useWindowDimensions().width;
  return (
    <>
      <View style={[styles.header, {width: width}]}>
        <Text style={styles.headerText}> Configure seu anúncio </Text>
        <Divider style={[styles.headerDivider, {width: width - 100}]} />
      </View>
      <View style={styles.container}>
        <View style={[styles.card, {width: width - 55}]}>
          <Text style={styles.cardTitle}> Comodidades </Text>
          <Div threshold={120} height={2} />
          <Text style={styles.description}>
            Cheque todos os itens que o residente terá acesso.
          </Text>
          <View style={styles.checklist}>
            <CheckboxComponent
              value={hasWifi}
              setValue={setHasWifi}
              text={'Wifi'}
            />
            <CheckboxComponent
              value={hasKitchen}
              setValue={setHasKitchen}
              text={'Cozinha'}
            />
            <CheckboxComponent value={hasTV} setValue={setHasTV} text={'TV'} />
            <CheckboxComponent
              value={hasAC}
              setValue={setHasAC}
              text={'Ar-condicionado'}
            />
            <CheckboxComponent
              value={hasNotebookWork}
              setValue={setHasNotebookWork}
              text={'Espaço de trabalho para notebook adequado'}
            />
            <CheckboxComponent
              value={hasGrill}
              setValue={setHasGrill}
              text={'Churrasqueira'}
            />
            <CheckboxComponent
              value={hasPool}
              setValue={setHasPool}
              text={'Piscina'}
            />
            <CheckboxComponent
              value={hasParkingLot}
              setValue={setHasParkingLot}
              text={'Estacionamento Incluso'}
            />
          </View>
          <View style={styles.cardFooter}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Icon name={'arrow-left-circle'} color={'#7E57C2'} size={40} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Icon name={'arrow-right-circle'} color={'#7E57C2'} size={40} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
