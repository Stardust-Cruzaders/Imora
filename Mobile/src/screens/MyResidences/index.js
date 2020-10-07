import React from 'react';
import {View, SafeAreaView, Text, ScrollView} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import Div from '../../Component/Div';
import ResidenceToggle from '../../Component/ResidenceToggle';

import styles from './styles';
export default function MyResidences() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.newResidenceView}>
        <RectButton onPress={() => {}} style={styles.newResidencesButton}>
          <Icon name={'home'} size={30} color={'#3f3f3f'} />
          <Text style={styles.newResidencesButtonText}>
            Criar novo anúncio{' '}
          </Text>
        </RectButton>
      </View>
      <Div threshold={100} />
      <ScrollView>
        <ResidenceToggle />
        <ResidenceToggle />
        <ResidenceToggle />
        <ResidenceToggle />
        <ResidenceToggle />
      </ScrollView>
    </SafeAreaView>
  );
}
