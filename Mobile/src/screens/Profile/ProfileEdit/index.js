import React, {useEffect, useState} from 'react';
import {View, Text, Alert, ScrollView} from 'react-native';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

import Div from '../../../Component/Div';
import styles from './styles';
import api from '../../../services/api';
import {useFeed} from '../../../contexts/feed';

export default function EditResidenceConfig({navigation}) {
  const {
    isEmailAvailable,
    setIsEmailAvailable,
    isLocationAvailable,
    setIsLocationAvailable,
    isPhoneAvailable,
    setIsPhoneAvailable,
    bio,
    setBio,
    phone,
    setPhone,
    user_state,
    setUserState,
    user_city,
    setUserCity,
  } = useFeed();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
          <View style={styles.section}>
            <View style={styles.headerView}>
              <Text style={styles.title}>Alterar Perfil</Text>
              <Icon
                style={styles.icon}
                name={'edit-3'}
                size={28}
                color={'#3f3f3f'}
              />
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder={'Descrição'}
                multiline
                maxLength={500}
                onChangeText={(text) => {
                  setBio(text);
                }}
                value={bio}
              />
              <TextInput
                style={styles.input}
                placeholder={'Celular'}
                maxLength={15}
                onChangeText={(text) => {
                  setPhone(text);
                }}
                value={phone}
              />
              <TextInput
                style={styles.input}
                placeholder={'Estado ex: SP, MG etc...'}
                maxLength={2}
                onChangeText={(text) => {
                  setUserState(text);
                }}
                value={user_state}
              />
              <TextInput
                style={styles.input}
                placeholder={'Cidade'}
                maxLength={50}
                onChangeText={(text) => {
                  setUserCity(text);
                }}
                value={user_city}
              />
            </View>
          </View>
          <Div threshold={30} />
          <View style={styles.section}>
            <View style={styles.headerView}>
              <Text style={styles.title}>Visibilidade: </Text>
              <Icon
                style={styles.icon}
                name={'eye'}
                size={28}
                color={'#3f3f3f'}
              />
            </View>
            <View>
              <Text style={styles.description}>
                Altere a Visibilidade do seus dados.
              </Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.itemTitle}>Email </Text>
              <BorderlessButton
                onPress={() => {
                  setIsEmailAvailable(!isEmailAvailable);
                }}
                style={[styles.toggleButton]}>
                <Icon
                  style={styles.toggleIcon}
                  name={isEmailAvailable ? 'toggle-right' : 'toggle-left'}
                  size={40}
                  color={isEmailAvailable ? '#26E07C' : '#ff0033'}
                />
              </BorderlessButton>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.itemTitle}>Localização </Text>
              <BorderlessButton
                onPress={() => {
                  setIsLocationAvailable(!isLocationAvailable);
                }}
                style={styles.toggleButton}>
                <Icon
                  style={styles.toggleIcon}
                  name={isLocationAvailable ? 'toggle-right' : 'toggle-left'}
                  size={40}
                  color={isLocationAvailable ? '#26E07C' : '#ff0033'}
                />
              </BorderlessButton>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.itemTitle}>Telefone </Text>
              <BorderlessButton
                onPress={() => {
                  setIsPhoneAvailable(!isPhoneAvailable);
                }}
                style={styles.toggleButton}>
                <Icon
                  style={styles.toggleIcon}
                  name={isPhoneAvailable ? 'toggle-right' : 'toggle-left'}
                  size={40}
                  color={isPhoneAvailable ? '#26E07C' : '#ff0033'}
                />
              </BorderlessButton>
            </View>
          </View>
          <Div threshold={30} />
          <RectButton style={{backgroundColor: 'white', borderRadius: 1}}>
            <View style={styles.section}>
              <View style={styles.headerView}>
                <Text style={styles.title}>Excluir Perfil</Text>
                <Icon
                  style={styles.icon}
                  name={'trash-2'}
                  size={28}
                  color={'#3f3f3f'}
                />
              </View>
              <View>
                <Text style={styles.description}>
                  Clique aqui para excluir o seu perfil permanentemente.
                </Text>
              </View>
            </View>
          </RectButton>
        </View>
      </ScrollView>
      <View style={styles.saveView}>
        <BorderlessButton style={styles.saveButton}>
          <Icon name={'save'} size={40} style={styles.saveIcon} />
        </BorderlessButton>
      </View>
    </View>
  );
}
