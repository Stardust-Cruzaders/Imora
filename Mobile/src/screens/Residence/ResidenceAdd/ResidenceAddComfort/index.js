import React, {useState} from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import styles from './styles';

import Icon from 'react-native-vector-icons/Feather';
import Div from '../../../../Component/Div';

import CheckboxComponent from '../../../../Component/CheckboxComponent';
import ResidenceAddHeader from '../../../../Component/ResidenceAddHeader';

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
      <ResidenceAddHeader />
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
            <BorderlessButton style={styles.button} onPress={() => {}}>
              <Icon name={'arrow-left-circle'} color={'#7E57C2'} size={40} />
            </BorderlessButton>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.activeDot}>•</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.dot}>•</Text>
            <BorderlessButton style={styles.button} onPress={() => {}}>
              <Icon name={'arrow-right-circle'} color={'#7E57C2'} size={40} />
            </BorderlessButton>
          </View>
        </View>
      </View>
    </>
  );
}
