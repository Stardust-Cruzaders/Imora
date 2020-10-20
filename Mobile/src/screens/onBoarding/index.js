import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity, StatusBar} from 'react-native';

import Feed from '../Feed';
import styles from './styles';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Swiper from 'react-native-swiper';

export default class SwiperComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isIntroApp: true,
    };
  }

  onButtonPress = () => {
    this.setState({
      isIntroApp: false,
    });
  };

  render() {
    if (this.state.isIntroApp) {
      return (
        <Swiper loop={false}>
          <View style={styles.slide1}>
            <Image
              source={require('../../img/girl.gif')}
              style={styles.girlImage}
            />
            <Text style={styles.title}>Bem vindo ao</Text>
            <Text style={styles.title}>Imora!</Text>
            <Text
              style={[
                styles.text,
                {marginHorizontal: 30, marginBottom: 60, textAlign: 'center'},
              ]}>
              O imora é um aplicativo que conecta estudantes com donos de
              imóveis, com o intuito de facilitar o acesso ao ensino superior em
              outras cidades.
            </Text>
          </View>

          <View style={styles.slide2}>
            <View style={{margin: 45}}>
              <Text style={styles.title}>Seja você...</Text>
              <Text style={styles.text}>
                Um estudante procurando por uma república, apartamento ou casa
                em outra cidade. Ou procurando um colega de quarto para dividir
                o aluguel.
              </Text>
            </View>
            <Image
              source={require('../../img/boy.gif')}
              style={styles.boyImage}
            />
          </View>

          <View style={styles.slide3}>
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                marginHorizontal: 30,
                marginBottom: 40,
              }}>
              <Text style={styles.title}>Ou...</Text>
              <Text style={styles.text}>
                Um dono de propriedade com um imóvel, quarto ou república
                disponível, procurando uma graninha extra.
              </Text>
            </View>
            <Image source={require('../../img/house.png')} />
          </View>

          <View style={styles.slide3}>
            <View style={{position: 'absolute', top: 45, left: 40}}>
              <Text style={styles.title}>Então vamos lá ?</Text>
            </View>
            <Image
              source={require('../../img/fim.png')}
              style={styles.endImage}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={this.onButtonPress}>
              <Text style={styles.textButton}>Vamos!</Text>
            </TouchableOpacity>
          </View>
        </Swiper>
      );
    } else {
      return <Feed />;
    }
  }
}
