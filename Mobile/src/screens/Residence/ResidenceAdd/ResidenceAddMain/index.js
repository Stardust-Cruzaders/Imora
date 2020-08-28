import React, {useState} from 'react';
import {Text, View, useWindowDimensions, TextInput} from 'react-native';

import styles from './styles';
import textStyles from '../../../../textStyles';

import Icon from 'react-native-vector-icons/Feather';
import Div from '../../../../Component/Div';

import ResidenceAddHeader from '../../../../Component/ResidenceAddHeader';
import {BorderlessButton} from 'react-native-gesture-handler';

export default function ResidenceAddMain({navigation}) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const width = useWindowDimensions().width;
  return (
    <>
      <ResidenceAddHeader />
      <View style={styles.container}>
        <View style={[styles.card, {width: width - 55}]}>
          <Text style={[styles.cardTitle, textStyles.font]}> Introdução </Text>
          <Div threshold={120} height={2} />
          <Text style={[styles.description, textStyles.font]}>
            Escolhe um nome, preço, e tire algumas fotos do seu imóvel. :D
          </Text>
          <View style={styles.main}>
            <TextInput
              style={[styles.input, {width: width - 80}]}
              value={title}
              onChangeText={(text) => setTitle(text)}
              placeholder={'Título: Ex: Casa com 4 quartos'}
            />

            <TextInput
              style={[styles.input, {width: width - 80}]}
              value={price.toString()}
              onChangeText={(text) => setPrice(text)}
              placeholder={'Preço/Mês '}
              keyboardType={'decimal-pad'}
            />
            <TextInput
              style={[styles.input, {width: width - 80}]}
              value={price.toString()}
              onChangeText={(text) => setPrice(text)}
              placeholder={'Quantidade de quartos disponíveis '}
              keyboardType={'number-pad'}
            />
            <TextInput
              style={[styles.input, {width: width - 80}]}
              value={price.toString()}
              onChangeText={(text) => setPrice(text)}
              placeholder={'Quantidade de banheiros disponíveis'}
              keyboardType={'number-pad'}
            />
          </View>

          <BorderlessButton
            style={[styles.button, {width: width - 80}]}
            onPress={() => {}}>
            <View style={{flexDirection: 'row'}}>
              <Icon name={'paperclip'} color={'#3F3F3F'} size={24} />
              <Text style={styles.buttonText}>Anexar Foto </Text>
              <Icon
                name={'chevron-right'}
                color={'#3F3F3F'}
                size={24}
                style={{position: 'absolute', left: 290}}
              />
            </View>
          </BorderlessButton>

          <View style={styles.cardFooter}>
            <BorderlessButton
              style={styles.navButton}
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name={'log-out'} color={'#E03826'} size={40} />
            </BorderlessButton>
            <Text style={styles.activeDot}>•</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.dot}>•</Text>
            <BorderlessButton
              style={styles.navButton}
              onPress={() => {
                navigation.navigate('ResidenceAddType');
              }}>
              <Icon name={'arrow-right-circle'} color={'#7E57C2'} size={40} />
            </BorderlessButton>
          </View>
        </View>
      </View>
    </>
  );
}
