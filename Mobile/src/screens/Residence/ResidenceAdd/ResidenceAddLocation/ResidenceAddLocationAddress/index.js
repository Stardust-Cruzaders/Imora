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

export default function ResidenceAddLocationAddress({navigation}) {
  const {
    street,
    setStreet,
    number,
    setNumber,
    neighborhood,
    setNeighborhood,
    city,
    setCity,
    state,
    setState,
  } = useResidenceAdd();
  const width = useWindowDimensions().width;
  return (
    <>
      <ResidenceAddHeader />
      <View style={styles.container}>
        <View style={[styles.card, {width: width - 55}]}>
          <Text style={[styles.cardTitle, textStyles.font]}> Localização </Text>
          <Div threshold={120} height={2} />
          <Text style={styles.description}>
            Aqui você pode definir a Localização da residência.
          </Text>
          <View style={styles.main}>
            <TextInput
              style={[styles.input, {width: width - 80}]}
              value={street}
              onChangeText={(text) => setStreet(text)}
              placeholder={'Rua:'}
            />

            <TextInput
              style={[styles.input, {width: width - 80}]}
              value={number}
              onChangeText={(text) => setNumber(text)}
              placeholder={'Número'}
              keyboardType={'numeric'}
            />

            <TextInput
              style={[styles.input, {width: width - 80}]}
              value={neighborhood}
              onChangeText={(text) => setNeighborhood(text)}
              placeholder={'Bairro'}
            />
            <TextInput
              style={[styles.input, {width: width - 80}]}
              value={city}
              onChangeText={(text) => setCity(text)}
              placeholder={'Cidade'}
            />
            <TextInput
              style={[styles.input, {width: width - 80}]}
              value={state}
              onChangeText={(text) => setState(text)}
              placeholder={'Estado'}
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
            <Text style={styles.dot}>•</Text>
            <Text style={styles.activeDot}>•</Text>
            <BorderlessButton
              style={styles.navButton}
              onPress={() => {
                navigation.navigate('ResidenceEdit');
              }}>
              <Icon name={'check-circle'} color={'#26E07C'} size={40} />
            </BorderlessButton>
          </View>
        </View>
      </View>
    </>
  );
}
