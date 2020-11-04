/* eslint-disable react-native/no-inline-styles */
import {REACT_APP_GEOCODING_KEY} from '@env';
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  useWindowDimensions,
  Image,
  ScrollView,
  Linking,
} from 'react-native';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
import {ActivityIndicator} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';

import api from '../../../services/api';
import textStyles from '../../../textStyles';
import Div from '../../../Component/Div';
import ImageSwipe from '../../../Component/ImageSwipe';
import styles from './styles';
import {useAuth} from '../../../contexts/auth';
export default function ResidenceDetailed({route, navigation}) {
  const {user} = useAuth();
  const width = useWindowDimensions().width;
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

  const address = `${route.params.residence.street}, ${route.params.residence.numberr} ${route.params.residence.city} ${route.params.residence.state}`;
  const geoURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${REACT_APP_GEOCODING_KEY}`;
  const [residenceLat, setResidenceLat] = useState('');
  const [residenceLng, setResidenceLng] = useState('');
  const [couldFindAddress, setCouldFindAddress] = useState(false);
  const [interessed_users, setInteressedUsers] = useState([]);
  function openExternalApp(url) {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  }
  function openGps(lat, lng) {
    var url = `http://maps.google.com/maps?daddr=${residenceLat},${residenceLng}`;
    openExternalApp(url);
  }
  function ToggleInterest(residence_id, user_id) {
    api
      .patch(`/residences/${residence_id}/interess`, {
        user_id,
      })
      .then((response) => {
        setInteressedUsers(response.data.interessed_users);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    console.log(`Usuários interessado? ${interessed_users.includes(user.id)}`);
    console.log(
      `Usuários interessado: valor do antigo? ${route.params.residence.interessed_users.includes(
        user.id,
      )}`,
    );
    CreateLocationTypeMessage(route.params.residence.residence_type);
    setComforts(
      [
        {
          id: 'Wifi',
          value: route.params.residence.wifi,
          icon: 'wifi',
        },
        {
          id: 'Televisão',
          value: route.params.residence.tv,
          icon: 'youtube-tv',
        },
        {
          id: 'Ar-condicionado',
          value: route.params.residence.ac,
          icon: 'weather-windy',
        },
        {
          id: 'Lugar de trabalho adequado para notebook',
          value: route.params.residence.notebook_work,
          icon: 'laptop-windows',
        },
        {
          id: 'Cozinha',
          value: route.params.residence.kitchen,
          icon: 'food-fork-drink',
        },
        {
          id: 'Churrasqueira',
          value: route.params.residence.grill,
          icon: 'food-steak',
        },
        {
          id: 'Piscina',
          value: route.params.residence.pool,
          icon: 'pool',
        },
        {
          id: 'Estacionamento',
          value: route.params.residence.parking,
          icon: 'car-side',
        },
      ].filter((element) => element.value === true),
    );
    setConditions(
      [
        {
          id: 'Animais de estimação',
          value: route.params.residence.allow_pets,
          icon: 'pets',
        },
        {
          id: 'Fumar dentro da residência',
          value: route.params.residence.allow_smokers,
          icon: 'smoking-rooms',
        },
      ].filter((element) => element.value === false),
    );
    axios
      .get(geoURL)
      .then((response) => {
        const latitude = response.data.results[0].geometry.location.lat;
        const longitude = response.data.results[0].geometry.location.lng;
        setResidenceLat(latitude);
        setResidenceLng(longitude);
        setCouldFindAddress(true);
      })
      .catch((err) => {
        console.log(err);
        setCouldFindAddress(false);
      })
      .finally(() => setLoading(false));
  }, [
    address,
    geoURL,
    interessed_users,
    route.params.residence.ac,
    route.params.residence.allow_pets,
    route.params.residence.allow_smokers,
    route.params.residence.grill,
    route.params.residence.interessed_users,
    route.params.residence.kitchen,
    route.params.residence.notebook_work,
    route.params.residence.parking,
    route.params.residence.pool,
    route.params.residence.tv,
    route.params.residence.wifi,
    route.params.residence_type,
    user.id,
  ]);

  if (loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator color={'#7E57C2'} size="large" />
        <Text
          style={{
            color: '#3F3F3F',
            fontSize: 20,
            fontFamily: 'Roboto',
          }}>
          Carregando informações.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.scroll}>
      <View style={[styles.headerImgView]}>
        <ImageSwipe img={route.params.residence.images} widthDiff={0} />
      </View>
      <View style={styles.container}>
        <View style={[styles.bodyView, {width: width - 50}]}>
          <View style={styles.basicInfoView}>
            <Text style={[styles.mainTitle, textStyles.font]}>
              {route.params.residence.residence_name}{' '}
            </Text>
            <Text style={[styles.location, textStyles.font]}>
              {route.params.residence.city},{route.params.residence.state}
            </Text>

            <Text style={[styles.price, textStyles.font]}>
              R${route.params.residence.price},00/Mês{' '}
            </Text>
          </View>
          <View style={styles.ownerView}>
            <BorderlessButton
              onPress={() => {
                const user = {
                  name: route.params.residence.name,
                  bio: route.params.residence.bio,
                  avatar: route.params.residence.avatar,
                  email: route.params.residence.email,
                  phone: route.params.residence.phone,
                  is_host: route.params.residence.is_host,
                  user_city: route.params.residence.user_city,
                  user_state: route.params.residence.user_state,
                  is_email_available: route.params.residence.is_email_available,
                  is_phone_available: route.params.residence.is_phone_available,
                  is_location_available:
                    route.params.residence.is_location_available,
                };
                navigation.navigate('ProfileUser', {
                  user,
                });
              }}>
              <View style={styles.profilePicView}>
                <Image
                  style={[styles.profilePic, {resizeMode: 'cover'}]}
                  source={{
                    uri: route.params.residence.avatar,
                    //'https://i.pinimg.com/564x/73/72/ca/7372caf9143345b46f5941218af00af2.jpg',
                  }}
                />
              </View>
            </BorderlessButton>
            <Text style={[styles.name, textStyles.font]}>
              {route.params.residence.name}
            </Text>
            <Text style={[styles.subTitle, textStyles.font]}>Proprietário</Text>
          </View>
          <Div threshold={100} />
          <View style={styles.descriptionView}>
            <View style={styles.titleWithIconView}>
              <Icon name={'home'} size={30} color={'#3F3F3F'} />
              <Text style={[styles.title1, textStyles.font]}>
                {route.params.residence.residence_place}
              </Text>
            </View>
            <Text style={[styles.description, textStyles.font]}>
              {route.params.residence.residence_type}: {locationTypeMessage}
            </Text>
            <Text style={[styles.description, textStyles.font]}>
              {route.params.residence.description}
            </Text>
            <View style={styles.titleWithIconView}>
              <Text style={[textStyles.font, styles.dot]}>•</Text>
              <MaterialCommunityIcon
                name={'toilet'}
                size={25}
                color={'#3F3F3F'}
              />
              <Text style={[styles.descriptionList, textStyles.font]}>
                Banheiros: {route.params.residence.num_bathrooms}
              </Text>
            </View>
            <View style={styles.titleWithIconView}>
              <Text style={[styles.dot, textStyles.font]}>•</Text>
              <MaterialCommunityIcon
                name={'bed-outline'}
                size={25}
                color={'#3F3F3F'}
              />
              <Text style={[styles.descriptionList, textStyles.font]}>
                Quartos: {route.params.residence.num_rooms}
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
                      <Text style={[styles.dot, textStyles.font]}>•</Text>
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
                  {route.params.residence.max_residents}
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
                  {route.params.residence.current_residents}
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
                  <Text style={styles.dot}>•</Text>
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

          <Div threshold={100} height={1.5} />
          <View style={styles.locationView}>
            <View style={styles.titleWithIconView}>
              <Icon name={'map-pin'} size={30} color={'#3F3F3F'} />
              <Text style={[styles.title1, textStyles.font]}>Localização </Text>
            </View>
            <Text style={[styles.description, textStyles.font]}>
              {route.params.residence.street}{' '}
              {route.params.residence.neighborhood}{' '}
              {route.params.residence.numberr}
            </Text>
            {route.params.complement != null && (
              <Text style={[styles.description, {marginBottom: 25}]}>
                Complemento: {route.params.complement}
              </Text>
            )}
            {couldFindAddress && (
              <RectButton
                style={[
                  styles.button,
                  {backgroundColor: '#26E07C', width: width - 75},
                ]}
                onPress={() => {
                  openGps(residenceLat, residenceLng);
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Icon name={'map-pin'} size={30} color={'#FFF'} />
                  <Text style={[styles.buttonText, textStyles.font]}>
                    Mostrar no Google Maps
                  </Text>
                </View>
              </RectButton>
            )}
            <RectButton
              style={[
                styles.button,
                {
                  backgroundColor: interessed_users.includes(user.id)
                    ? 'black'
                    : '#7E57C2',
                  width: width - 75,
                },
              ]}
              onPress={() => {
                ToggleInterest(route.params.residence.id, user.id);
              }}>
              <Text style={[styles.buttonText, textStyles.font]}>
                {interessed_users.includes(user.id)
                  ? 'Você demonstrou interesse'
                  : 'Demonstrar interesse'}
              </Text>
            </RectButton>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
