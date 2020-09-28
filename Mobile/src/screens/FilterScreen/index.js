/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {RadioButton, Divider} from 'react-native-paper';
import CheckboxComponent from '../../Component/CheckboxComponent';

import styles from './styles';

import {useFeed} from '../../contexts/feed';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
export default function FilterScreen({navigation}) {
  // InputText
  const [value, onChangeText] = useState();
  const {
    residenceName,
    setResidenceName,
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
  } = useFeed();
  // RadioButtons
  const width = useWindowDimensions().width;
  // CheckBoxes
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
              style={styles.textInputStyle}
              onChangeText={(text) => onChangeText(text)}
              value={price}
              clearTextOnFocus={true}
              keyboardType={'numeric'}
              placeholder=" $ Preço/Mês"
            />

            <View style={styles.sectionView}>
              <Text style={styles.subTitleStyle}>Tipo de Locação</Text>
              <View style={styles.radioButtonView}>
                <RadioButton
                  value="Espaço inteiro"
                  status={
                    residenceType === 'Espaço inteiro' ? 'checked' : 'unchecked'
                  }
                  color={'#7E57C2'}
                  onPress={() => setResidenceType('Espaço inteiro')}
                />
                <Text style={styles.textStyle}>Espaço inteiro</Text>
              </View>
              <Text style={styles.subText}> O espaço todo para você</Text>
              <View style={styles.radioButtonView}>
                <RadioButton
                  value="Quarto inteiro"
                  status={
                    residenceType === 'Quarto inteiro' ? 'checked' : 'unchecked'
                  }
                  color={'#7E57C2'}
                  onPress={() => setResidenceType('Quarto inteiro')}
                />
                <Text style={styles.textStyle}>Quarto inteiro</Text>
              </View>
              <Text style={styles.subText}>
                Um quarto só seu, mas você terá que dividir o espaço com outras
                pessoas.
              </Text>
              <View style={styles.radioButtonView}>
                <RadioButton
                  value="Quarto compartilhado"
                  status={
                    residenceType === 'Quarto compartilhado'
                      ? 'checked'
                      : 'unchecked'
                  }
                  color={'#7E57C2'}
                  onPress={() => setResidenceType('Quarto compartilhado')}
                />
                <Text style={styles.textStyle}>Quarto compartilhado</Text>
              </View>
              <Text style={styles.subText}>
                Você dividirá o espaço, assim como os quartos, com outras
                pessoas.
              </Text>
            </View>
            <Divider style={styles.divider} />
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
                  value="KitNet"
                  status={residencePlace === 'KitNet' ? 'checked' : 'unchecked'}
                  color={'#7E57C2'}
                  onPress={() => setResidencePlace('KitNet')}
                />
                <Text style={styles.textStyle}>KitNet</Text>
              </View>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.sectionView}>
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
            <Divider style={styles.divider} />
            <View style={styles.sectionView}>
              <Text style={styles.subTitleStyle}>Comodidades </Text>
              <CheckboxComponent
                value={wifi}
                setValue={setWifi}
                text={'Wifi'}
              />
              <CheckboxComponent
                value={kitchen}
                setValue={setKitchen}
                text={'Cozinha'}
              />
              <CheckboxComponent
                value={tv}
                setValue={setTV}
                text={'Televisão'}
              />
              <CheckboxComponent
                value={ac}
                setValue={setAC}
                text={'Ar-condicionado'}
              />
              <CheckboxComponent
                value={notebookWork}
                setValue={setNotebookWork}
                text={'Lugar apropriado para trabalho com notebook'}
              />
              <CheckboxComponent
                value={grill}
                setValue={setGrill}
                text={'Churrasqueira'}
              />
              <CheckboxComponent
                value={pool}
                setValue={setPool}
                text={'Piscina'}
              />
              <CheckboxComponent
                value={parking}
                setValue={setParking}
                text={'Estacionamento incluso'}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <RectButton style={styles.filterButton} onPress={() => {}}>
        <Icon name={'thumbs-up'} size={38} color={'#FFF'} />
      </RectButton>
    </View>
  );
}
