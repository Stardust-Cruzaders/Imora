import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
  TextInput,
} from 'react-native';
import {Divider} from 'react-native-elements';
import styles from './styles';

import Icon from 'react-native-vector-icons/Feather';
import Div from '../../../../Component/Div';

export default function ResidenceAddMain() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const width = useWindowDimensions().width;
  return (
    <>
      <View style={[styles.header, {width: width}]}>
        <Text style={styles.headerText}> Configure seu anúncio </Text>
        <Divider style={[styles.headerDivider, {width: width - 100}]} />
      </View>
      <View style={styles.container}>
        <View style={[styles.card, {width: width - 55}]}>
          <Text style={styles.cardTitle}> Introdução </Text>
          <Div threshold={120} height={2} />
          <Text style={styles.description}>
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

          <TouchableOpacity
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
          </TouchableOpacity>

          <View style={styles.cardFooter}>
            <TouchableOpacity style={styles.navButton} onPress={() => {}}>
              <Icon name={'log-out'} color={'#E03826'} size={40} />
            </TouchableOpacity>
            <Text style={styles.activeDot}>•</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.dot}>•</Text>
            <TouchableOpacity style={styles.navButton} onPress={() => {}}>
              <Icon name={'arrow-right-circle'} color={'#7E57C2'} size={40} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
