import React from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import {BorderlessButton, ScrollView} from 'react-native-gesture-handler';

import textStyles from '../../../../../textStyles';
import styles from './styles';

import Icon from 'react-native-vector-icons/Feather';
import Div from '../../../../../Component/Div';
import ResidenceAddHeader from '../../../../../Component/ResidenceAddHeader';

import {ActivityIndicator, TextInput} from 'react-native-paper';
import {useResidenceAdd} from '../../../../../contexts/residenceAdd';
import {Root, Popup} from 'popup-ui';
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
    loading,
    complement,
    setComplement,
  } = useResidenceAdd();
  const width = useWindowDimensions().width;
  function VerifyFields() {
    if (
      street != '' &&
      number != '' &&
      neighborhood != '' &&
      city != '' &&
      state != ''
    ) {
      return true;
    } else {
      return false;
    }
  }

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color={'#7e57c2'} />
        <Text style={{fontSize: 20, fontFamily: 'Roboto', color: '#3f3f3f'}}>
          Buscando endereço.
        </Text>
      </View>
    );
  }
  return (
    <>
      <Root>
        <ResidenceAddHeader />
        <ScrollView>
          <View style={styles.container}>
            <View style={[styles.card, {width: width - 55}]}>
              <Text style={[styles.cardTitle, textStyles.font]}>
                {' '}
                Localização{' '}
              </Text>
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
                  maxLength={250}
                />

                <TextInput
                  style={[styles.input, {width: width - 80}]}
                  value={number}
                  onChangeText={(text) => setNumber(text)}
                  placeholder={'Número'}
                  keyboardType={'numeric'}
                  maxLength={15}
                />

                <TextInput
                  style={[styles.input, {width: width - 80}]}
                  value={neighborhood}
                  onChangeText={(text) => setNeighborhood(text)}
                  placeholder={'Bairro'}
                  maxLength={250}
                />
                <TextInput
                  style={[styles.input, {width: width - 80}]}
                  value={city}
                  onChangeText={(text) => setCity(text)}
                  placeholder={'Cidade'}
                  maxLength={250}
                />
                <TextInput
                  style={[styles.input, {width: width - 80}]}
                  value={state}
                  onChangeText={(text) => setState(text)}
                  placeholder={'Estado'}
                  maxLength={2}
                />
                <TextInput
                  style={[styles.input, {width: width - 80}]}
                  value={complement}
                  onChangeText={(text) => setComplement(text)}
                  placeholder={
                    'Complemento: como número de apartamento, etc...'
                  }
                  maxLength={250}
                />
              </View>

              <View style={styles.cardFooter}>
                <BorderlessButton
                  style={styles.navButton}
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
                <Text style={styles.dot}>•</Text>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.activeDot}>•</Text>
                <BorderlessButton
                  style={styles.navButton}
                  onPress={() => {
                    if (VerifyFields()) {
                      navigation.navigate('ResidenceEdit');
                    } else {
                      Popup.show({
                        type: 'Danger',
                        title: 'Campos não preenchidos',
                        button: true,
                        textBody: 'Preencha todos os campos',
                        buttontext: 'OK',
                        callback: () => Popup.hide(),
                      });
                    }
                  }}>
                  <Icon name={'check-circle'} color={'#26E07C'} size={40} />
                </BorderlessButton>
              </View>
            </View>
          </View>
        </ScrollView>
      </Root>
    </>
  );
}
