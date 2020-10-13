import React, {useState, useEffect} from 'react';
import {View, Text, Alert, ScrollView} from 'react-native';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import {Popup, Root} from 'popup-ui';
import Div from '../../../Component/Div';
import styles from './styles';
import api from '../../../services/api';
import {useFeed} from '../../../contexts/feed';
import {useAuth} from '../../../contexts/auth';
import AsyncStorage from '@react-native-community/async-storage';

export default function EditResidenceConfig({navigation}) {
  const {
    isEmailAvailable,
    setIsEmailAvailable,
    isLocationAvailable,
    setIsLocationAvailable,
    isPhoneAvailable,
    setIsPhoneAvailable,
  } = useFeed();
  const {user, FacebookSignOut, setUser} = useAuth();
  const [bio, setBio] = useState('');
  const [phone, setPhone] = useState('');
  const [user_state, setUserState] = useState('');
  const [user_city, setUserCity] = useState('');

  function handleUserDeletion(user_id) {
    api
      .delete(`/users/${user_id}`)
      .then(() => {
        FacebookSignOut().catch((err) => {
          console.log('Erro ao tentar sair: ' + err);
        });
      })
      .catch((error) => {
        console.log('Erro ao tentar deletar conta: ' + error);
      });
  }
  function showDeleteAlert() {
    Alert.alert(
      'Deletar conta',
      'Você tem certeza que quer deletar sua conta? Essa ação é permanente e irreversível.',
      [
        {
          text: 'cancelar',
          style: 'cancel',
        },
        {
          text: 'deletar',
          onPress: () => {
            handleUserDeletion(user.id);
          },
        },
      ],
      {cancelable: false},
    );
  }
  function UpdateUserData(id) {
    const data = {
      bio,
      phone,
      user_state,
      user_city,
    };
    api
      .put(`/users/${id}`, data)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  }
  async function storeDataPreferences() {
    try {
      await Promise.all([
        AsyncStorage.setItem(
          '@isEmailAvailable',
          JSON.stringify(isEmailAvailable),
        ),
        AsyncStorage.setItem(
          '@isPhoneAvailable',
          JSON.stringify(isPhoneAvailable),
        ),
        AsyncStorage.setItem(
          '@isLocationAvailable',
          JSON.stringify(isLocationAvailable),
        ),
      ]);
    } catch (e) {
      console.log(e);
    }
  }
  function ConfirmationAlert() {
    Alert.alert(
      'Confirmar',
      'Deseja alterar suas informações? Você será desconectado do app.',
      [
        {
          text: 'cancelar',
          style: 'cancel',
        },
        {
          text: 'atualizar informações',
          onPress: () => {
            storeDataPreferences().then(() => {
              const newUser = UpdateUserData(user.id);
              if (newUser !== null) {
                setUser(newUser);
              }
            });
          },
        },
      ],
      {cancelable: false},
    );
  }

  useEffect(() => {
    function setCurrentData() {
      setBio(user.bio);
      setPhone(user.phone);
      setUserState(user.user_state);
      setUserCity(user.user_city);
    }
    function getDataPreference() {
      Promise.all([
        AsyncStorage.getItem('@isEmailAvailable'),
        AsyncStorage.getItem('@isPhoneAvailable'),
        AsyncStorage.getItem('@isLocationAvailable'),
      ])
        .then((values) => {
          setIsEmailAvailable(JSON.parse(values[0]));
          setIsPhoneAvailable(JSON.parse(values[1]));
          setIsLocationAvailable(JSON.parse(values[2]));
          console.log(
            JSON.parse(values[0], JSON.parse(values[1]), JSON.parse(values[2])),
          );
        })
        .catch((e) => {
          console.log(e);
        });
    }
    setCurrentData();
    getDataPreference();
  }, [
    user.bio,
    user.phone,
    user.user_state,
    user.user_city,
    setIsEmailAvailable,
    setIsPhoneAvailable,
    setIsLocationAvailable,
  ]);
  return (
    <Root>
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
                  keyboardType={'number-pad'}
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
            <RectButton
              onPress={() => showDeleteAlert()}
              style={{backgroundColor: 'white', borderRadius: 1}}>
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
          <BorderlessButton
            onPress={() => {
              ConfirmationAlert();
            }}
            style={styles.saveButton}>
            <Icon name={'save'} size={40} style={styles.saveIcon} />
          </BorderlessButton>
        </View>
      </View>
    </Root>
  );
}
