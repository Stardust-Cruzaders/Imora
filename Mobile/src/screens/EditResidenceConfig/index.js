import React from 'react';
import {View, Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import Div from '../../Component/Div';

import styles from './styles';
export default function EditResidenceConfig() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.section}>
          <View style={styles.buttonView}>
            <RectButton style={styles.button}>
              <Text styles={styles.title}>
                Disponibilidade:{' '}
                <Text style={[styles.title, {color: '#26E07C'}]}>
                  Disponível{' '}
                </Text>
              </Text>
              <Icon name={'power'} size={28} color={'#26E07C'} />
            </RectButton>
          </View>
          <Text style={styles.description}>
            Se isso estiver desligado, a residência constará como ocupada e não
            será mostrada aos usuários.
          </Text>
        </View>
        <Div threshold={100} />
        <View style={styles.section}>
          <View style={styles.buttonView}>
            <RectButton style={styles.button}>
              <Text styles={styles.title}>Alterar anúncio</Text>
              <Icon name={'edit-3'} size={28} color={'#3f3f3f'} />
            </RectButton>
          </View>
          <Text style={styles.description}>
            Clique aqui para alterar as informações dessa residência.
          </Text>
        </View>
        <Div threshold={100} />
        <View style={styles.section}>
          <View style={styles.buttonView}>
            <RectButton style={styles.button}>
              <Text styles={styles.title}>Excluir anúncio</Text>
              <Icon name={'trash-2'} size={28} color={'#3f3f3f'} />
            </RectButton>
          </View>
          <Text style={styles.description}>
            Essa opção excluirá seu anúncio permanentemente.
          </Text>
        </View>
        <Div threshold={100} />
        <View style={styles.section}>
          <Text styles={styles.title}>Residentes</Text>

          <Text style={styles.description}>Nenhum</Text>
        </View>
      </View>
    </View>
  );
}
