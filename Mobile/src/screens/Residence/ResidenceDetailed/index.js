/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Text, View, useWindowDimensions, Image, ScrollView} from 'react-native';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
import {ActivityIndicator} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './styles';
import textStyles from '../../../textStyles';
import Div from '../../../Component/Div';
import ImageSwipe from '../../../Component/ImageSwipe';

export default function ResidenceDetailed({route, navigation}) {
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
  useEffect(() => {
    CreateLocationTypeMessage(route.params.residence_type);
    setComforts(
      [
        {id: 'Wifi', value: route.params.residence.wifi, icon: 'wifi'},
        {id: 'Televisão', value: route.params.residence.tv, icon: 'youtube-tv'},
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
        {id: 'Piscina', value: route.params.residence.pool, icon: 'pool'},
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
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator color={'#7E57C2'} size="large" />
        <Text
          style={{
            color: '#3F3F3F',
            fontSize: 32,
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
              <Text style={[textStyles.font, {fontSize: 30}]}>•</Text>
              <MaterialCommunityIcon
                name={'toilet'}
                size={25}
                color={'#3F3F3F'}
              />
              <Text style={[styles.descriptionList, textStyles.font]}>
                Quantidade de banheiros: {route.params.residence.num_bathrooms}
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
                Quantidade de quartos: {route.params.residence.num_rooms}
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
            <View style={styles.mapView}>
              <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}
                region={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}
              />
            </View>
            <RectButton
              style={[
                styles.button,
                {backgroundColor: '#26E07C', width: width - 75},
              ]}
              onPress={() => {
                console.log(route.params);
              }}>
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
