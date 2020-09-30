/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Text, View, useWindowDimensions, Image, ScrollView} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import textStyles from '../../../textStyles';
import Div from '../../../Component/Div';
import ImageSwipe from '../../../Component/ImageSwipe';
import api from '../../../services/api';
import {ActivityIndicator} from 'react-native-paper';

export default function ResidenceDetailed({route, navigation}) {
  const width = useWindowDimensions().width;
  const [residence, setResidence] = useState(null);
  const [loading, setLoading] = useState(true);
  const [locationTypeMessage, setLocationTypeMessage] = useState('');
  const [comforts, setComforts] = useState([]);
  const [conditions, setConditions] = useState([]);
  function checkIfArrayIsEmpty(array) {
    if (array.length < 1) {
      return true;
    } else {
      return false;
    }
  }
  function CreateLocationTypeMessage(typeOfLocation) {
    switch (typeOfLocation) {
      case 'Espaço inteiro':
        return setLocationTypeMessage('Você terá o espaço todo só para você');
      case 'Quarto inteiro':
        return setLocationTypeMessage(
          'Você terá um quarto seu, mas também dividirá o espaço com outras pessoas',
        );
      case 'Quarto compartilhado':
        return setLocationTypeMessage(
          'Você terá que compartilhar um dormitório, assim como o espaço com outras pessoas',
        );
      default:
        setLocationTypeMessage('Sla kk');
        break;
    }
  }
  useEffect(() => {
    async function GetResidence(id) {
      const response = await api.get(`/residences/${id}`);

      if (response.data === undefined) {
        return response;
      } else {
        setResidence(response.data);
        CreateLocationTypeMessage(response.data[0].residence_type);
        setComforts(
          [
            {id: 'Wifi', value: response.data[0].wifi, icon: 'wifi'},
            {id: 'Televisão', value: response.data[0].tv, icon: 'youtube-tv'},
            {
              id: 'Ar-condicionado',
              value: response.data[0].ac,
              icon: 'weather-windy',
            },
            {
              id: 'Lugar de trabalho adequado para notebook',
              value: response.data[0].notebook_work,
              icon: 'laptop-windows',
            },
            {
              id: 'Cozinha',
              value: response.data[0].kitchen,
              icon: 'food-fork-drink',
            },
            {
              id: 'Churrasqueira',
              value: response.data[0].grill,
              icon: 'food-steak',
            },
            {id: 'Piscina', value: response.data[0].pool, icon: 'pool'},
            {
              id: 'Estacionamento',
              value: response.data[0].parking,
              icon: 'car-side',
            },
          ].filter((element) => element.value === true),
        );
        setConditions(
          [
            {
              id: 'Animais de estimação',
              value: response.data[0].allow_pets,
              icon: 'pets',
            },
            {
              id: 'Fumar dentro da residência',
              value: response.data[0].allow_smokers,
              icon: 'smoking-rooms',
            },
          ].filter((element) => element.value === false),
        );
        setLoading(false);
        return response.data;
      }
    }
    GetResidence(route.params.id);
  });

  if (loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator color={'purple'} size="large" />
        <Text
          style={{
            color: '#3F3F3F',
            fontSize: 32,
            fontFamily: 'Roboto',
          }}>
          UwU
        </Text>
      </View>
    );
  }
  return (
    <ScrollView style={styles.scroll}>
      <View style={[styles.headerImgView]}>
        <ImageSwipe img={residence[0].images} widthDiff={0} />
      </View>
      <View style={styles.container}>
        <View style={[styles.bodyView, {width: width - 50}]}>
          <View style={styles.basicInfoView}>
            <Text style={[styles.mainTitle, textStyles.font]}>
              {residence[0].residence_name}{' '}
            </Text>
            <Text style={[styles.location, textStyles.font]}>
              {residence[0].city},{residence[0].state}
            </Text>

            <Text style={[styles.price, textStyles.font]}>
              R${residence[0].price},00/Mês{' '}
            </Text>
          </View>
          <View style={styles.ownerView}>
            <View style={styles.profilePicView}>
              <Image
                style={[styles.profilePic, {resizeMode: 'cover'}]}
                source={{
                  uri: residence[0].avatar,
                  //'https://i.pinimg.com/564x/73/72/ca/7372caf9143345b46f5941218af00af2.jpg',
                }}
              />
            </View>
            <Text style={[styles.name, textStyles.font]}>
              {residence[0].name}
            </Text>
            <Text style={[styles.subTitle, textStyles.font]}>Proprietário</Text>
          </View>
          <Div threshold={100} />
          <View style={styles.descriptionView}>
            <View style={styles.titleWithIconView}>
              <Icon name={'home'} size={30} color={'#3F3F3F'} />
              <Text style={[styles.title1, textStyles.font]}>
                {residence[0].residence_place}
              </Text>
            </View>
            <Text style={[styles.description, textStyles.font]}>
              {residence[0].residence_type}: {locationTypeMessage}
            </Text>
            <Text style={[styles.description, textStyles.font]}>
              {residence[0].description}
            </Text>
            <View style={styles.titleWithIconView}>
              <Text style={[textStyles.font, {fontSize: 30}]}>•</Text>
              <MaterialCommunityIcon
                name={'toilet'}
                size={25}
                color={'#3F3F3F'}
              />
              <Text style={[styles.descriptionList, textStyles.font]}>
                Quantidade de banheiros: {residence[0].num_bathrooms}
              </Text>
            </View>
            <View style={styles.titleWithIconView}>
              <Text style={[{fontSize: 30, marginRight: 5}, textStyles.font]}>
                •
              </Text>
              <MaterialCommunityIcon
                name={'bed-outline'}
                size={25}
                color={'#3F3F3F'}
              />
              <Text style={[styles.descriptionList, textStyles.font]}>
                Quantidade de quartos: {residence[0].num_rooms}
              </Text>
            </View>
          </View>
          {checkIfArrayIsEmpty(comforts) === false && (
            <>
              <Div threshold={100} />
              <View styles={styles.comfortView}>
                <View style={styles.titleWithIconView}>
                  <Icon name={'coffee'} size={30} color={'#3F3F3F'} />
                  <Text style={[styles.title1, textStyles.font]}>
                    Comodidades{' '}
                  </Text>
                </View>
                {comforts.map((comfort) => {
                  return (
                    <View key={comfort.id} style={styles.titleWithIconView}>
                      <Text
                        style={[
                          {fontSize: 30, marginRight: 5},
                          textStyles.font,
                        ]}>
                        •
                      </Text>
                      <MaterialCommunityIcon
                        name={comfort.icon}
                        size={25}
                        color={'#3F3F3F'}
                      />
                      <Text style={[styles.descriptionList, textStyles.font]}>
                        {comfort.id}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </>
          )}
          <Div threshold={100} />
          <View style={styles.conditionView}>
            <View style={styles.titleWithIconView}>
              <Icon name={'alert-octagon'} size={30} color={'#E03826'} />
              <Text style={[styles.title1, textStyles.font]}>Condições </Text>
            </View>
            <View style={styles.titleWithIconView}>
              <Text
                style={[
                  styles.descriptionList,
                  textStyles.font,
                  {fontWeight: 'bold', top: 10},
                ]}>
                Nº máximo de ocupantes:
                <Text
                  style={[
                    styles.descriptionList,
                    textStyles.font,
                    {fontWeight: 'normal', top: 10},
                  ]}>
                  {residence[0].max_residents}
                </Text>
              </Text>
            </View>
            <View style={styles.titleWithIconView}>
              <Text
                style={[
                  styles.descriptionList,
                  textStyles.font,
                  {fontWeight: 'bold', top: 10},
                ]}>
                Nº atual de ocupantes:
                <Text
                  style={[
                    styles.descriptionList,
                    textStyles.font,
                    {fontWeight: 'normal', top: 10},
                  ]}>
                  {residence[0].current_residents}
                </Text>
              </Text>
            </View>
            <View style={[styles.titleWithIconView]}>
              <Text
                style={[
                  styles.descriptionList,
                  textStyles.font,
                  {fontWeight: 'bold', top: 10},
                ]}>
                Preferência de residentes:
                <Text
                  style={[
                    styles.descriptionList,
                    textStyles.font,
                    {fontWeight: 'normal', top: 10},
                  ]}>
                  {' '}
                  Indiferente
                </Text>
              </Text>
            </View>
            {checkIfArrayIsEmpty(conditions) === false && (
              <Text
                style={[
                  styles.descriptionList,
                  textStyles.font,
                  {top: 10, marginLeft: 25, fontWeight: 'bold'},
                ]}>
                Não são permitidos:
              </Text>
            )}
            {conditions.map((condition) => {
              return (
                <View key={condition.id} style={styles.titleWithIconView}>
                  <Text style={{fontSize: 30, marginRight: 5}}>•</Text>
                  <MaterialIcon
                    name={condition.icon}
                    size={25}
                    color={'#3F3F3F'}
                  />
                  <Text
                    style={[
                      styles.descriptionList,
                      textStyles.font,
                      {top: 10},
                    ]}>
                    {condition.id}
                  </Text>
                </View>
              );
            })}
          </View>

          <Div threshold={100} />
          <View style={styles.locationView}>
            <View style={styles.titleWithIconView}>
              <Icon name={'map-pin'} size={30} color={'#3F3F3F'} />
              <Text style={[styles.title1, textStyles.font]}>Localização </Text>
            </View>
            <Text style={[styles.description, textStyles.font]}>
              {residence[0].street} {residence[0].neighborhood}{' '}
              {residence[0].numberr}
            </Text>
            <RectButton
              style={[
                styles.button,
                {backgroundColor: '#26E07C', width: width - 75},
              ]}
              onPress={() => {}}>
              <View style={{flexDirection: 'row'}}>
                <Icon name={'map-pin'} size={30} color={'#FFF'} />
                <Text style={[styles.buttonText, textStyles.font]}>
                  {' '}
                  Mostrar no Google Maps{' '}
                </Text>
              </View>
            </RectButton>
            <RectButton
              style={[
                styles.button,
                {backgroundColor: '#7E57C2', width: width - 75},
              ]}
              onPress={() => {}}>
              <Text style={[styles.buttonText, textStyles.font]}>
                Demonstrar interesse
              </Text>
            </RectButton>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
