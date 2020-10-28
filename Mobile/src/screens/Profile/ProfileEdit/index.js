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
import UserRowEditAvatar from '../../../Component/UserRowEditAvatar';

export default function EditResidenceConfig({navigation}) {
  const {
    is_email_available,
    setIsEmailAvailable,
    is_phone_available,
    setIsPhoneAvailable,
    is_location_available,
    setIsLocationAvailable,
    changedAvatar,
    setChangedAvatar,
  } = useFeed();
  const {user, avatar, SignOut, setUser} = useAuth();
  const [bio, setBio] = useState('');
  const [phone, setPhone] = useState('');
  const [user_state, setUserState] = useState('');
  const [user_city, setUserCity] = useState('');

  function handleUserDeletion(user_id) {
    api
      .delete(`/users/${user_id}`)
      .then(() => {
        SignOut().catch((err) => {
          console.log('Erro ao tentar sair: ' + err);
          return false;
        });
        return true;
      })
      .catch((error) => {
        console.log('Erro ao tentar deletar conta: ' + error);
        return false;
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
            if (handleUserDeletion(user.id) === false) {
              ErrorAlert('Erro ao deletar a conta');
            }
          },
        },
      ],
      {cancelable: false},
    );
  }
  function ErrorAlert(message) {
    return Popup.show({
      type: 'Danger',
      title: 'Oops!! Parece que algo deu errado.',
      button: true,
      textBody: message,
      buttontext: 'OK',
      callback: () => {
        Popup.hide();
      },
    });
  }
  function uploadUserPhoto(id, formData) {
    const url = 'http://192.168.15.14:3333/users/upload';
    const config = {
      method: 'POST',
      'Content-Type': 'multipart/form-data',
      body: formData,
    };
    let oldFileName = user.avatar.substr(8).split('/')[2];
    const data = {
      file_name: oldFileName,
    };
    fetch(url, config)
      .then((response) => response.json())
      .then((result) => {
        try {
          UpdateUserData(id, result.imageUrl);
          api.post('/users/upload/delete', data).catch(() => {
            Popup.show({
              type: 'Danger',
              title: 'Tente Novamente',
              button: true,
              textBody:
                'Oops!! Parece que algo deu errado com a atualização das informações',
              buttontext: 'OK',
              callback: () => {
                Popup.hide();
              },
            });
          });
        } catch (err) {
          console.log(err);
          Popup.show({
            type: 'Danger',
            title: 'Tente Novamente',
            button: true,
            textBody:
              'Oops!! Parece que algo deu errado com a atualização das informações',
            buttontext: 'OK',
            callback: () => {
              Popup.hide();
            },
          });
        }
      });
  }

  function UpdateUserData(id, profile_pic) {
    const data = {
      bio,
      phone,
      avatar: profile_pic,
      user_state,
      user_city,
      is_email_available,
      is_phone_available,
      is_location_available,
    };
    api
      .put(`/users/${id}`, data)
      .then((response) => {
        console.log(response.data);

        setChangedAvatar(false);
        return response.data;
      })
      .catch((err) => {
        console.log('Erro ao tentar cadastrar usuário: ' + err);
        return null;
      });
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
            const formData = new FormData();
            formData.append('image', avatar);
            console.log('Usuario alterou avatar? ' + changedAvatar);
            if (changedAvatar) {
              uploadUserPhoto(user.id, formData);
            } else {
              UpdateUserData(user.id, user.avatar);
            }

            SignOut();
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

    setCurrentData();
  }, [user.bio, user.phone, user.user_state, user.user_city]);
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
                <Text style={styles.title}>Trocar avatar</Text>
                <Icon
                  style={styles.icon}
                  name={'image'}
                  size={28}
                  color={'#3f3f3f'}
                />
              </View>
              <View>
                <Text style={styles.description}>
                  Altere sua foto de perfil.
                </Text>
                <View>
                  <UserRowEditAvatar user={user} />
                </View>
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
                    setIsEmailAvailable(!is_email_available);
                  }}
                  style={[styles.toggleButton]}>
                  <Icon
                    style={styles.toggleIcon}
                    name={is_email_available ? 'toggle-right' : 'toggle-left'}
                    size={40}
                    color={is_email_available ? '#26E07C' : '#ff0033'}
                  />
                </BorderlessButton>
              </View>
              <View style={styles.itemView}>
                <Text style={styles.itemTitle}>Localização </Text>
                <BorderlessButton
                  onPress={() => {
                    setIsLocationAvailable(
                      is_location_available ? false : true,
                    );
                  }}
                  style={styles.toggleButton}>
                  <Icon
                    style={styles.toggleIcon}
                    name={
                      is_location_available ? 'toggle-right' : 'toggle-left'
                    }
                    size={40}
                    color={is_location_available ? '#26E07C' : '#ff0033'}
                  />
                </BorderlessButton>
              </View>
              <View style={styles.itemView}>
                <Text style={styles.itemTitle}>Telefone </Text>
                <BorderlessButton
                  onPress={() => {
                    setIsPhoneAvailable(!is_phone_available);
                  }}
                  style={styles.toggleButton}>
                  <Icon
                    style={styles.toggleIcon}
                    name={is_phone_available ? 'toggle-right' : 'toggle-left'}
                    size={40}
                    color={is_phone_available ? '#26E07C' : '#ff0033'}
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
