/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  useWindowDimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import Div from '../../../Component/Div';

export default function ResidenceDetailed() {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View style={[styles.headerImgView]}>
          <Image
            style={[
              styles.mainImg,
              {resizeMode: 'cover', width: width, height: height / 4},
            ]}
            source={{
              uri: 'https://i.ytimg.com/vi/p-UOosKS8Ew/maxresdefault.jpg',
            }}
          />
        </View>
        <View style={[styles.bodyView, {width: width - 50}]}>
          <View style={styles.basicInfoView}>
            <Text style={styles.mainTitle}>Título </Text>
            <Text style={styles.location}>Localização,Localização </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.location}>Disponibilidade: </Text>
              <Text style={styles.availableText}>Disponível </Text>
            </View>
            <Text style={styles.price}>R$23,00/Mês </Text>
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
            <Text style={styles.name}>لا احتيال</Text>
            <Text style={styles.subTitle}> Proprietário </Text>
          </View>
          <View style={styles.descriptionView}>
            <View style={styles.titleWithIconView}>
              <Icon name={'home'} size={30} color={'#3F3F3F'} />
              <Text style={styles.title1}>Descrição </Text>
            </View>
            <Text style={styles.description}>
              Essa é uma descrição legal demais cara olha que casa legal oloco
              mano top demais tem tanta coisa um monte de coisa olha isso que
              top.
            </Text>
            <View style={styles.titleWithIconView}>
              <Text style={{fontSize: 30}}>•</Text>
              <MaterialCommunityIcon
                name={'toilet'}
                size={25}
                color={'#3F3F3F'}
              />
              <Text style={styles.descriptionList}>
                Quantidade de banheiros: 72
              </Text>
            </View>
            <View style={styles.titleWithIconView}>
              <Text style={{fontSize: 30, marginRight: 5}}>•</Text>
              <MaterialCommunityIcon
                name={'bed-outline'}
                size={25}
                color={'#3F3F3F'}
              />
              <Text style={styles.descriptionList}>
                Quantidade de quartos: 2
              </Text>
            </View>
          </View>
          <Div threshold={100} />
          <View styles={styles.comfortView}>
            <View style={styles.titleWithIconView}>
              <Icon name={'coffee'} size={30} color={'#3F3F3F'} />
              <Text style={styles.title1}>Comodidades </Text>
            </View>
            <View style={styles.titleWithIconView}>
              <Text style={{fontSize: 30, marginRight: 5}}>•</Text>
              <Icon name={'wifi'} size={25} color={'#3F3F3F'} />
              <Text style={styles.descriptionList}>Wifi</Text>
            </View>
            <View style={styles.titleWithIconView}>
              <Text style={{fontSize: 30, marginRight: 5}}>•</Text>
              <MaterialCommunityIcon
                name={'food-fork-drink'}
                size={25}
                color={'#3F3F3F'}
              />
              <Text style={styles.descriptionList}>Cozinha</Text>
            </View>
            <View style={styles.titleWithIconView}>
              <Text style={{fontSize: 30, marginRight: 5}}>•</Text>
              <MaterialCommunityIcon
                name={'pool'}
                size={25}
                color={'#3F3F3F'}
              />
              <Text style={styles.descriptionList}>Piscina</Text>
            </View>
            <View style={styles.titleWithIconView}>
              <Text style={{fontSize: 30, marginRight: 5}}>•</Text>
              <MaterialCommunityIcon
                name={'food-steak'}
                size={25}
                color={'#3F3F3F'}
              />
              <Text style={styles.descriptionList}>Churrasqueira</Text>
            </View>
            <View style={styles.titleWithIconView}>
              <Text style={{fontSize: 30, marginRight: 5}}>•</Text>
              <Icon name={'tv'} size={25} color={'#3F3F3F'} />
              <Text style={[styles.descriptionList, {top: 10}]}>Televisão</Text>
            </View>
            <View style={styles.titleWithIconView}>
              <Text style={{fontSize: 30, marginRight: 5}}>•</Text>
              <MaterialIcon name={'computer'} size={25} color={'#3F3F3F'} />
              <Text style={styles.descriptionList}>
                Lugar para trabalhar com notebook
              </Text>
            </View>
          </View>
          <Div threshold={100} />
          <View style={styles.conditionView}>
            <View style={styles.titleWithIconView}>
              <Icon name={'alert-octagon'} size={30} color={'#E03826'} />
              <Text style={styles.title1}>Condições </Text>
            </View>
            <View style={styles.titleWithIconView}>
              <Icon name={'users'} size={25} color={'#3F3F3F'} />
              <Text style={styles.descriptionList}>
                Número máximo de ocupantes: 4265
              </Text>
            </View>
            <View style={styles.titleWithIconView}>
              <Icon name={'user'} size={25} color={'#3F3F3F'} />
              <Text style={[styles.descriptionList, {top: 10}]}>
                Número atual de ocupantes: 3
              </Text>
            </View>
            <Text style={[styles.description, {marginTop: 10}]}>
              Não são permitidos:
            </Text>
            <View style={styles.titleWithIconView}>
              <Text style={{fontSize: 30, marginRight: 5}}>•</Text>
              <MaterialIcon name={'pets'} size={25} color={'#3F3F3F'} />
              <Text style={[styles.descriptionList, {top: 10}]}>
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
              <Text style={[styles.descriptionList, {top: 10}]}>
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
              <Text style={[styles.descriptionList, {top: 8}]}>Kaua</Text>
            </View>
          </View>
          <Div threshold={100} />
          <View style={styles.locationView}>
            <View style={styles.titleWithIconView}>
              <Icon name={'map-pin'} size={30} color={'#3F3F3F'} />
              <Text style={styles.title1}>Localização </Text>
            </View>
            <Text style={styles.description}>
              Rua jorge de almeida bairro do limoeiro 7-85
            </Text>
            <TouchableOpacity
              style={[
                styles.button,
                {backgroundColor: '#26E07C', width: width - 75},
              ]}
              onPress={() => {}}>
              <View style={{flexDirection: 'row'}}>
                <Icon name={'map-pin'} size={30} color={'#FFF'} />
                <Text style={styles.buttonText}> Mostrar no Google Maps </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                {backgroundColor: '#7E57C2', width: width - 75},
              ]}
              onPress={() => {}}>
              <Text style={styles.buttonText}>Demonstrar interesse</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
