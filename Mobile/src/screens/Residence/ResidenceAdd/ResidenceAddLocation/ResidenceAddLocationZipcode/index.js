import React, {useState} from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';

import textStyles from '../../../../../textStyles';
import styles from './styles';

import Icon from 'react-native-vector-icons/Feather';
import Div from '../../../../../Component/Div';
import ResidenceAddHeader from '../../../../../Component/ResidenceAddHeader';

import {TextInput} from 'react-native-paper';
import {useResidenceAdd} from '../../../../../contexts/residenceAdd';

export default function ResidenceAddLocationZipcode({navigation}) {
  const {zipcode, setZipcode, GetAddress} = useResidenceAdd();
  const width = useWindowDimensions().width;
  return (
    <>
      <ResidenceAddHeader />
      <View style={styles.container}>
        <View style={[styles.card, {width: width - 55}]}>
          <Text style={[styles.cardTitle, textStyles.font]}> Localização </Text>
          <Div threshold={120} height={2} />
          <Text style={styles.description}>
            Aqui você pode definir o seu CEP, que será utilizado para definir o
            seu endereço completo.
          </Text>
          <View style={styles.main}>
            <TextInput
              style={[styles.input, {width: width - 80}]}
              value={zipcode}
              onChangeText={(text) => setZipcode(text)}
              placeholder={'Cep:'}
              keyboardType={'numeric'}
              maxLength={8}
            />
          </View>

          <View style={styles.cardFooter}>
            <BorderlessButton
              style={styles.navButton}
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name={'arrow-left-circle'} color={'#7E57C2'} size={40} />
            </BorderlessButton>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.activeDot}>•</Text>
            <Text style={styles.dot}>•</Text>
            <BorderlessButton
              style={styles.navButton}
              onPress={async () => {
                await GetAddress(zipcode);
                navigation.navigate('ResidenceAddLocationAddress');
              }}>
              <Icon name={'arrow-right-circle'} color={'#7E57C2'} size={40} />
            </BorderlessButton>
          </View>
        </View>
      </View>
    </>
  );
}
