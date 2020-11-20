/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, ScrollView, Text, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  RadioButton,
  Divider,
  TextInput,
  ActivityIndicator,
} from 'react-native-paper';
import CheckboxComponent from '../../Component/CheckboxComponent';

import styles from './styles';
import {useFeed} from '../../contexts/feed';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
export default function FilterScreen({navigation}) {
  const {
    price,
    setPrice,
    residenceType,
    setResidenceType,
    residencePlace,
    setResidencePlace,
    allowPets,
    setAllowPets,
    allowSmokers,
    setAllowSmokers,
    wifi,
    setWifi,
    kitchen,
    setKitchen,
    tv,
    setTV,
    ac,
    setAC,
    notebookWork,
    setNotebookWork,
    grill,
    setGrill,
    pool,
    setPool,
    parking,
    setParking,
    city,
    setCity,
    Search,
    loading,
    setLoading,
    setFiltered,
  } = useFeed();

  const width = useWindowDimensions().width;
  if (loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator color={'purple'} size="small" />
        <Text
          style={{
            color: '#3F3F3F',
            fontSize: 20,
            fontFamily: 'Robotto',
          }}>
          Filtrando Residências...
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',

          width,
        }}>
        <BorderlessButton
          style={{alignSelf: 'flex-start', margin: 15}}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name={'arrow-left-circle'} size={45} color={'#3F3F3F'} />
        </BorderlessButton>
        <View
          style={{
            alignItems: 'flex-end',
            flex: 0.55,
          }}>
          <Text style={styles.textTitleStyle}>Filtros</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.filterBox}>
          <View style={styles.marginBox}>
            <TextInput
              style={[styles.textInputStyle, {marginBottom: 20}]}
              onChangeText={(text) => setPrice(text)}
              value={price}
              clearTextOnFocus={true}
              keyboardType={'numeric'}
              placeholder=" $ Preço/Mês"
            />
            <TextInput
              style={styles.textInputStyle}
              onChangeText={(text) => setCity(text)}
              value={city}
              clearTextOnFocus={true}
              placeholder="Sua cidade de preferência"
            />

            <View style={styles.sectionView}>
              <Text style={styles.subTitleStyle}>Tipo de imóvel</Text>
              <View style={styles.radioButtonView}>
                <RadioButton
                  value="Casa"
                  status={residencePlace === 'Casa' ? 'checked' : 'unchecked'}
                  color={'#7E57C2'}
                  onPress={() => setResidencePlace('Casa')}
                />
                <Text style={styles.textStyle}>Casa</Text>
              </View>
              <View style={styles.radioButtonView}>
                <RadioButton
                  value="Apartamento"
                  status={
                    residencePlace === 'Apartamento' ? 'checked' : 'unchecked'
                  }
                  color={'#7E57C2'}
                  onPress={() => setResidencePlace('Apartamento')}
                />
                <Text style={styles.textStyle}>Apartamento</Text>
              </View>

              <View style={styles.radioButtonView}>
                <RadioButton
                  value="República"
                  status={
                    residencePlace === 'República' ? 'checked' : 'unchecked'
                  }
                  color={'#7E57C2'}
                  onPress={() => setResidencePlace('República')}
                />
                <Text style={styles.textStyle}>República</Text>
              </View>
              <View style={styles.radioButtonView}>
                <RadioButton
                  value=""
                  status={residencePlace === '' ? 'checked' : 'unchecked'}
                  color={'#7E57C2'}
                  onPress={() => setResidencePlace('')}
                />
                <Text style={styles.textStyle}>Todas as opções</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <RectButton
        style={styles.filterButton}
        onPress={async () => {
          setLoading(true);
          await Search();
          setFiltered(true);
          navigation.navigate('Feed');
        }}>
        <Icon name={'thumbs-up'} size={34} color={'#FFF'} />
      </RectButton>
    </View>
  );
}
