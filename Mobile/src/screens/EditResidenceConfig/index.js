/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
import React, {useEffect, useState} from 'react';
import {View, Text, Alert, FlatList} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {ActivityIndicator} from 'react-native-paper';

import UserRow from '../../Component/UserRow';
import Div from '../../Component/Div';
import api from '../../services/api';
import NotFound from '../../Component/NotFound';
import styles from './styles';
export default function EditResidenceConfig({route, navigation}) {
  const [available, setAvailable] = useState(route.params.residence.available);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    'Parece que não tem ninguém interessado nessa residência no momento',
  );
  const [errorIcon, setErrorIcon] = useState('archive');
  function DeleteImagesFromGCS() {
    const data = {
      imagesToDelete: route.params.residence.images,
    };
    api
      .post(`/residences/${route.params.residence.id}/upload/delete`, data)
      .catch((err) => {
        console.log('erro ao tentar excluir imagens' + err);
      });
  }

  function handleResidenceDeletion(residence_id) {
    api
      .delete(`/residences/${residence_id}`)
      .then(() => {
        DeleteImagesFromGCS();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function handleUpdateAvailability(residence_id) {
    api
      .patch(`/residences/${residence_id}/available`)
      .then((response) => {
        setAvailable(response.data.available);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function showDeleteAlert() {
    Alert.alert(
      'Deletar residência',
      'Você tem certeza que quer deletar essa residência? Essa ação é permanente e irreversível.',
      [
        {
          text: 'cancelar',
          style: 'cancel',
        },
        {
          text: 'deletar',
          onPress: () => {
            handleResidenceDeletion(route.params.residence.id);
            navigation.goBack();
          },
        },
      ],
      {cancelable: false},
    );
  }
  useEffect(() => {
    let mounted = true;
    function listInterestedUsers(residence_id) {
      api
        .get(`/residences/${residence_id}/interess`)
        .then((response) => {
          if (mounted) {
            setUsers(response.data);
            setError(false);
            setErrorIcon('archive');
            setErrorMessage(
              'Parece que não tem ninguém interessado nessa residência no momento',
            );
          }
        })
        .catch(() => {
          setError(true);
          setErrorIcon('wifi-off');
          setErrorMessage('Oops! parece que algo deu errado no nosso servidor');
        })
        .finally(() => setLoading(false));
    }

    listInterestedUsers(route.params.residence.id);

    return () => {
      mounted = false;
    };
  }, [route.params.residence.id, users]);
  return (
    <>
      {!loading ? (
        error === false ? (
          <FlatList
            ListHeaderComponent={
              <View style={styles.container}>
                <RectButton
                  onPress={() =>
                    handleUpdateAvailability(route.params.residence.id)
                  }>
                  <View style={styles.section}>
                    <View style={styles.infoView}>
                      <Text style={styles.title}>Disponibilidade: </Text>
                      <Text
                        style={[
                          styles.status,
                          {color: available ? '#26E07C' : '#ff0033'},
                        ]}>
                        {available ? 'disponível' : 'indisponível'}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.description}>
                        Clique aqui para alterar a disponibilidade. Se sua
                        residência constar como indisponível, a residência não
                        será mostrada aos usuários.
                      </Text>
                    </View>
                  </View>
                </RectButton>
                <Div threshold={32} height={1.6} />
                <RectButton
                  onPress={() => {
                    navigation.navigate('ResidenceAdd', {
                      screen: 'ResidenceAddMain',
                      params: {
                        residence: route.params.residence,
                      },
                    });
                  }}>
                  <View style={styles.section}>
                    <View style={styles.headerView}>
                      <Text style={styles.title}>Alterar anúncio</Text>
                      <Icon
                        style={styles.icon}
                        name={'edit-3'}
                        size={28}
                        color={'#3f3f3f'}
                      />
                    </View>
                    <View>
                      <Text style={styles.description}>
                        Clique aqui para alterar as informações dessa
                        residência.
                      </Text>
                    </View>
                  </View>
                </RectButton>
                <Div threshold={32} height={1.5} />
                <RectButton
                  onPress={() => {
                    navigation.navigate('ResidenceEditPhotos', {
                      residence: route.params.residence,
                    });
                  }}>
                  <View style={styles.section}>
                    <View style={styles.headerView}>
                      <Text style={styles.title}>Alterar Fotos</Text>
                      <Icon
                        style={styles.icon}
                        name={'image'}
                        size={28}
                        color={'#3f3f3f'}
                      />
                    </View>
                    <View>
                      <Text style={styles.description}>
                        Clique aqui para alterar as fotos dessa residência.
                      </Text>
                    </View>
                  </View>
                </RectButton>
                <Div threshold={32} height={1.5} />
                <RectButton
                  onPress={() => {
                    showDeleteAlert();
                  }}>
                  <View style={styles.section}>
                    <View style={styles.headerView}>
                      <Text style={styles.title}>Excluir anúncio</Text>
                      <Icon
                        style={styles.icon}
                        name={'trash-2'}
                        size={28}
                        color={'#3f3f3f'}
                      />
                    </View>
                    <View>
                      <Text style={styles.description}>
                        Clique aqui para excluir o seu anúncio permanentemente.
                      </Text>
                    </View>
                  </View>
                </RectButton>
                <Div threshold={32} height={1.5} />
                <View>
                  <View style={styles.section}>
                    <View style={styles.headerView}>
                      <Text style={styles.title}>Interessados</Text>
                      <Icon
                        style={styles.icon}
                        name={'users'}
                        size={28}
                        color={'#3f3f3f'}
                      />
                    </View>
                  </View>
                </View>
              </View>
            }
            data={users}
            keyExtractor={(item) => item.id}
            renderItem={(item) => {
              return <UserRow navigation={navigation} user={item.item} />;
            }}
          />
        ) : (
          <NotFound message={errorMessage} icon={errorIcon} />
        )
      ) : (
        <ActivityIndicator color={'#7E57C2'} />
      )}
    </>
  );
}
