/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, useWindowDimensions, Image, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {Root, Popup} from 'popup-ui';

import styles from './styles';
import textStyles from '../../../textStyles';
import Div from '../../../Component/Div';
import ResidenceAddHeader from '../../../Component/ResidenceAddHeader';

import ImageSwipe from '../../../Component/ImageSwipe';

import {RectButton, BorderlessButton} from 'react-native-gesture-handler';

import {useResidenceAdd} from '../../../contexts/residenceAdd';
import {useAuth} from '../../../contexts/auth';

export default function ResidenceEdit({navigation}) {
  const width = useWindowDimensions().width;
  const {user} = useAuth();
  const {
    title,
    price,
    numRooms,
    numBathrooms,
    locationTypeMessage,
    checkedHouseType,
    description,
    maxResidentNum,
    street,
    number,
    neighborhood,
    city,
    state,
    comforts,
    conditions,
    checkIfEmpty,
    resourcePath,
    complement,
    currentResidents,
    HandleResidenceAdd,
    isUpdatingValues,
    HandleResidenceUpdate,
    residence_id,
  } = useResidenceAdd();

  return (
    <Root>
      <ResidenceAddHeader
        title={'Está feliz com seu anúncio?'}
        subtitle={'Clique no lápis para alterar uma sessão'}
      />
      <ScrollView style={styles.scroll}>
        <View style={[styles.headerImgView]} />
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

              <Text style={[styles.price, textStyles.font]}>
                R${price}/Mês{' '}
              </Text>
            </View>
            <View style={styles.ownerView}>
              <View style={styles.profilePicView}>
                <Image
                  style={[styles.profilePic, {resizeMode: 'cover'}]}
                  source={{
                    uri: user.avatar,
                    //'https://i.pinimg.com/564x/73/72/ca/7372caf9143345b46f5941218af00af2.jpg',
                  }}
                />
              </View>
              <Text style={[styles.name, textStyles.font]}>{user.name}</Text>
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
                    navigation.navigate('ResidenceAddConditions');
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
                    {' '}
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
                    {' '}
                    {currentResidents}
                  </Text>
                </Text>
              </View>
              <View style={[styles.titleWithIconView]}>
                <Text
                  style={[
                    styles.descriptionList,
                    textStyles.font,
                    {fontWeight: 'bold', top: 10},
                  ]}
                />
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
              {complement != null && (
                <Text style={[styles.description, {marginBottom: 25}]}>
                  Complemento: {complement}
                </Text>
              )}
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
          onPress={() => {
            if (isUpdatingValues === false) {
              HandleResidenceAdd(user.id);
              Popup.show({
                type: 'Success',
                title: 'Residência adicionada com sucesso',
                button: true,
                textBody:
                  'Sua residência foi adicionada com sucesso! 🥳🥳 Você pode ver e modificar seu anúncio na aba de minhas residências, em seu perfil ^^',
                buttontext: 'OK',
                callback: () => {
                  Popup.hide();
                  navigation.navigate('Feed');
                },
              });
            } else {
              HandleResidenceUpdate(residence_id);
              Popup.show({
                type: 'Success',
                title: 'Residência Alterada com sucesso',
                button: true,
                textBody:
                  'Sua residência foi alterada com sucesso! 🥳🥳 Você pode ver e modificar seu anúncio na aba de minhas residências, em seu perfil ^^',
                buttontext: 'OK',
                callback: () => {
                  Popup.hide();
                  navigation.navigate('Feed');
                },
              });
            }
          }}>
          <Text style={styles.buttonText}>Publicar</Text>
        </RectButton>
      </View>
    </Root>
  );
}
