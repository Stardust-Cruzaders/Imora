/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, useWindowDimensions, Image, ScrollView} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import textStyles from '../../../textStyles';
import Div from '../../../Component/Div';
import ImageSwipe from '../../../Component/ImageSwipe';

export default function ResidenceDetailed() {
  const width = useWindowDimensions().width;

  const [available, setAvailable] = useState(true);

  const images = [
    'https://i.pinimg.com/236x/09/66/4f/09664f3441de659f26bf604a2f1f8f43.jpg',
    'https://i.pinimg.com/236x/1f/9a/44/1f9a4405c1db5d23a13d8608dfba6850.jpg',
    'https://i.pinimg.com/236x/28/b9/43/28b94382c8bea2d56afbabe1369d3b68.jpg',
    'https://i.pinimg.com/564x/9c/40/ac/9c40acb5931b72b8ace4cb446ee0d068.jpg',
    'https://i.pinimg.com/236x/0d/a7/3b/0da73b6592ba04b63385c12280d1bf6a.jpg',
  ];
  return (
    <ScrollView style={styles.scroll}>
      <View style={[styles.headerImgView]}>
        <ImageSwipe img={images} />
      </View>
      <View style={styles.container}>
        <View style={[styles.bodyView, {width: width - 50}]}>
          <View style={styles.basicInfoView}>
            <Text style={[styles.mainTitle, textStyles.font]}>Título </Text>
            <Text style={[styles.location, textStyles.font]}>
              Localização,Localização
            </Text>
            <Text style={[styles.location, textStyles.font]}>
              Disponibilidade:{' '}
              <Text
                style={[
                  available ? styles.availableText : styles.unavailableText,
                  textStyles.font,
                ]}>
                {available ? 'Disponível' : 'Indisponível'}
              </Text>
            </Text>

            <Text style={[styles.price, textStyles.font]}>R$23,00/Mês </Text>
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
            <Text style={[styles.subTitle, textStyles.font]}>Proprietário</Text>
          </View>
          <Div threshold={100} />
          <View style={styles.descriptionView}>
            <View style={styles.titleWithIconView}>
              <Icon name={'home'} size={30} color={'#3F3F3F'} />
              <Text style={[styles.title1, textStyles.font]}>Mansão</Text>
            </View>
            <Text style={[styles.description, textStyles.font]}>
              A casa toda pra você
            </Text>
            <Text style={[styles.description, textStyles.font]}>
              Essa é uma descrição legal demais cara olha que casa legal oloco
              mano top demais tem tanta coisa um monte de coisa olha isso que
              top.
            </Text>
            <View style={styles.titleWithIconView}>
              <Text style={[textStyles.font, {fontSize: 30}]}>•</Text>
              <MaterialCommunityIcon
                name={'toilet'}
                size={25}
                color={'#3F3F3F'}
              />
              <Text style={[styles.descriptionList, textStyles.font]}>
                Quantidade de banheiros: 72
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
                Quantidade de quartos: 2
              </Text>
            </View>
          </View>
          <Div threshold={100} />
          <View styles={styles.comfortView}>
            <View style={styles.titleWithIconView}>
              <Icon name={'coffee'} size={30} color={'#3F3F3F'} />
              <Text style={[styles.title1, textStyles.font]}>Comodidades </Text>
            </View>
            <View style={styles.titleWithIconView}>
              <Text style={[{fontSize: 30, marginRight: 5}, textStyles.font]}>
                •
              </Text>
              <Icon name={'wifi'} size={25} color={'#3F3F3F'} />
              <Text style={[styles.descriptionList, textStyles.font]}>
                Wifi
              </Text>
            </View>
            <View style={styles.titleWithIconView}>
              <Text style={[{fontSize: 30, marginRight: 5}, textStyles.font]}>
                •
              </Text>
              <MaterialCommunityIcon
                name={'food-fork-drink'}
                size={25}
                color={'#3F3F3F'}
              />
              <Text style={[styles.descriptionList, textStyles.font]}>
                Cozinha
              </Text>
            </View>
            <View style={styles.titleWithIconView}>
              <Text style={[{fontSize: 30, marginRight: 5}, textStyles.font]}>
                •
              </Text>
              <MaterialCommunityIcon
                name={'pool'}
                size={25}
                color={'#3F3F3F'}
              />
              <Text style={[styles.descriptionList, textStyles.font]}>
                Piscina
              </Text>
            </View>
            <View style={styles.titleWithIconView}>
              <Text style={[{fontSize: 30, marginRight: 5}, textStyles.font]}>
                •
              </Text>
              <MaterialCommunityIcon
                name={'food-steak'}
                size={25}
                color={'#3F3F3F'}
              />
              <Text style={[styles.descriptionList, textStyles.font]}>
                Churrasqueira
              </Text>
            </View>
            <View style={styles.titleWithIconView}>
              <Text style={[{fontSize: 30, marginRight: 5}, textStyles.font]}>
                •
              </Text>
              <Icon name={'tv'} size={25} color={'#3F3F3F'} />
              <Text
                style={[styles.descriptionList, textStyles.font, {top: 10}]}>
                Televisão
              </Text>
            </View>
            <View style={styles.titleWithIconView}>
              <Text style={[{fontSize: 30, marginRight: 5}, textStyles.font]}>
                •
              </Text>
              <MaterialIcon name={'computer'} size={25} color={'#3F3F3F'} />
              <Text style={[styles.descriptionList, textStyles.font]}>
                Lugar para trabalhar com notebook
              </Text>
            </View>
          </View>
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
                  {' '}
                  8
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
                  15
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
            <Text
              style={[
                styles.descriptionList,
                textStyles.font,
                {top: 10, marginLeft: 25, fontWeight: 'bold'},
              ]}>
              Não são permitidos:
            </Text>
            <View style={styles.titleWithIconView}>
              <Text style={{fontSize: 30, marginRight: 5}}>•</Text>
              <MaterialIcon name={'pets'} size={25} color={'#3F3F3F'} />
              <Text
                style={[styles.descriptionList, textStyles.font, {top: 10}]}>
                Animais de estimação
              </Text>
            </View>
            <View style={styles.titleWithIconView}>
              <Text style={{fontSize: 30, marginRight: 5}}>•</Text>
              <MaterialIcon
                name={'smoking-rooms'}
                size={25}
                color={'#3F3F3F'}
              />
              <Text
                style={[styles.descriptionList, textStyles.font, {top: 10}]}>
                Fumantes dentro de casa
              </Text>
            </View>
            <View style={styles.titleWithIconView}>
              <Text style={{fontSize: 30, marginRight: 5}}>•</Text>
              <MaterialCommunityIcon
                name={'crown'}
                size={25}
                color={'#3F3F3F'}
              />
              <Text style={[styles.descriptionList, textStyles.font, {top: 8}]}>
                Kaua
              </Text>
            </View>
          </View>
          <Div threshold={100} />
          <View style={styles.locationView}>
            <View style={styles.titleWithIconView}>
              <Icon name={'map-pin'} size={30} color={'#3F3F3F'} />
              <Text style={[styles.title1, textStyles.font]}>Localização </Text>
            </View>
            <Text style={[styles.description, textStyles.font]}>
              Rua jorge de almeida bairro do limoeiro 7-85
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
