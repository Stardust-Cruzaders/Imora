/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, useWindowDimensions, Image, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import textStyles from '../../../textStyles';
import Div from '../../../Component/Div';
import ResidenceAddHeader from '../../../Component/ResidenceAddHeader';

import ImageSwipe from '../../../Component/ImageSwipe';

import {RectButton, BorderlessButton} from 'react-native-gesture-handler';

import {useResidenceAdd} from '../../../contexts/residenceAdd';

export default function ResidenceEdit({navigation}) {
  const width = useWindowDimensions().width;

  const images = [
    'https://i.pinimg.com/236x/09/66/4f/09664f3441de659f26bf604a2f1f8f43.jpg',
    'https://i.pinimg.com/236x/1f/9a/44/1f9a4405c1db5d23a13d8608dfba6850.jpg',
    'https://i.pinimg.com/236x/28/b9/43/28b94382c8bea2d56afbabe1369d3b68.jpg',
    'https://i.pinimg.com/564x/9c/40/ac/9c40acb5931b72b8ace4cb446ee0d068.jpg',
    'https://i.pinimg.com/236x/0d/a7/3b/0da73b6592ba04b63385c12280d1bf6a.jpg',
  ];

  const {
    title,
    price,
    numRooms,
    numBathrooms,
    locationTypeMessage,
    checkedHouseType,
    description,
    maxResidentNum,
    genderPreference,
    street,
    number,
    neighborhood,
    city,
    state,
    comforts,
    conditions,
    checkIfEmpty,
  } = useResidenceAdd();
  return (
    <>
      <ResidenceAddHeader
        title={'Está feliz com seu anúncio?'}
        subtitle={'Clique no lápis para alterar uma sessão'}
      />
      <ScrollView style={styles.scroll}>
        <View style={[styles.headerImgView]}>
          <ImageSwipe img={images} />
        </View>
        <View style={styles.container}>
          <View style={[styles.bodyView, {width: width - 50}]}>
            <View style={styles.basicInfoView}>
              <View style={[styles.titleWithEditOption, {width: width - 100}]}>
                <Text style={[styles.mainTitle, textStyles.font]}>
                  {title}{' '}
                </Text>
                <BorderlessButton
                  style={styles.editButton}
                  onPress={() => {
                    navigation.navigate('ResidenceAddMain');
                  }}>
                  <Icon name={'edit-2'} size={30} color={'#7E57C2'} />
                </BorderlessButton>
              </View>
              <Text style={[styles.location, textStyles.font]}>
                {state},{city}
              </Text>
              <Text style={[styles.location, textStyles.font]}>
                Disponibilidade:{' '}
              </Text>

              <Text style={[styles.price, textStyles.font]}>
                R${price}/Mês{' '}
              </Text>
            </View>
            <View style={styles.ownerView}>
              <View style={styles.profilePicView}>
                <Image
                  style={[styles.profilePic, {resizeMode: 'cover'}]}
                  source={{
                    uri:
                      'https://i.pinimg.com/564x/73/72/ca/7372caf9143345b46f5941218af00af2.jpg',
                  }}
                />
              </View>
              <Text style={[styles.name, textStyles.font]}>لا احتيال</Text>
              <Text style={[styles.subTitle, textStyles.font]}>
                Proprietário
              </Text>
            </View>
            <Div threshold={100} />
            <View style={styles.descriptionView}>
              <View style={[styles.titleWithEditOption, {width: width - 80}]}>
                <View style={styles.titleWithIconView}>
                  <Icon name={'home'} size={30} color={'#3F3F3F'} />
                  <Text style={[styles.title1, textStyles.font]}>
                    {checkedHouseType}
                  </Text>
                </View>
                <BorderlessButton
                  style={styles.editButton}
                  onPress={() => {
                    navigation.navigate('ResidenceAddType');
                  }}>
                  <Icon name={'edit-2'} size={30} color={'#7E57C2'} />
                </BorderlessButton>
              </View>
              <Text style={[styles.description, textStyles.font]}>
                {locationTypeMessage}
              </Text>
              <Text style={[styles.description, textStyles.font]}>
                {description}
              </Text>
              <View style={styles.titleWithIconView}>
                <Text style={[textStyles.font, {fontSize: 30}]}>•</Text>
                <MaterialCommunityIcon
                  name={'toilet'}
                  size={25}
                  color={'#3F3F3F'}
                />
                <Text style={[styles.descriptionList, textStyles.font]}>
                  Quantidade de banheiros: {numBathrooms}
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
                  Quantidade de quartos: {numRooms}
                </Text>
              </View>
            </View>
            {checkIfEmpty(comforts) === false && (
              <>
                <Div threshold={100} />
                <View styles={styles.comfortView}>
                  <View
                    style={[styles.titleWithEditOption, {width: width - 75}]}>
                    <View style={styles.titleWithIconView}>
                      <Icon name={'coffee'} size={30} color={'#3F3F3F'} />
                      <Text style={[styles.title1, textStyles.font]}>
                        Comodidades
                      </Text>
                    </View>
                    <BorderlessButton
                      style={styles.editButton}
                      onPress={() => {
                        navigation.navigate('ResidenceAddComfort');
                      }}>
                      <Icon name={'edit-2'} size={30} color={'#7E57C2'} />
                    </BorderlessButton>
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
              <View style={[styles.titleWithEditOption, {width: width - 80}]}>
                <View style={styles.titleWithIconView}>
                  <Icon name={'alert-octagon'} size={30} color={'#E03826'} />
                  <Text style={styles.title1}>Condições </Text>
                </View>
                <BorderlessButton
                  style={styles.editButton}
                  onPress={() => {
                    navigation.navigate('ResidenceAddComfort');
                  }}>
                  <Icon name={'edit-2'} size={30} color={'#7E57C2'} />
                </BorderlessButton>
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
                    {maxResidentNum}
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
                    {0}
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
                    {genderPreference}
                  </Text>
                </Text>
              </View>
              {checkIfEmpty(conditions) === false && (
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
              <View style={[styles.titleWithEditOption, {width: width - 80}]}>
                <View style={styles.titleWithIconView}>
                  <Icon name={'map-pin'} size={30} color={'#3F3F3F'} />
                  <Text style={styles.title1}>Localização </Text>
                </View>
                <BorderlessButton
                  style={styles.editButton}
                  onPress={() => {
                    navigation.navigate('ResidenceAddLocationZipcode');
                  }}>
                  <Icon name={'edit-2'} size={30} color={'#7E57C2'} />
                </BorderlessButton>
              </View>

              <Text style={[styles.description, {marginBottom: 25}]}>
                {street} {neighborhood} {number}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footerView}>
        <RectButton
          style={[
            styles.button,
            {backgroundColor: '#26E07C', width: width - 245},
          ]}
          onPress={() => {
            navigation.navigate('ResidenceAddLocationAddress');
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.buttonText}>Voltar</Text>
          </View>
        </RectButton>
        <RectButton
          style={[
            styles.button,
            {backgroundColor: '#7E57C2', width: width - 245},
          ]}
          onPress={() => {}}>
          <Text style={styles.buttonText}>Publicar</Text>
        </RectButton>
      </View>
    </>
  );
}
