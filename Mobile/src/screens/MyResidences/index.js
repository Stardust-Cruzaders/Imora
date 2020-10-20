import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, Text, FlatList} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import Div from '../../Component/Div';
import NotFound from '../../Component/NotFound';
import ResidenceToggle from '../../Component/ResidenceToggle';
import api from '../../services/api';
import styles from './styles';
import {useAuth} from '../../contexts/auth';
import {ActivityIndicator} from 'react-native-paper';

import axios from 'axios';
export default function MyResidences({navigation}) {
  const [myResidences, setMyResidences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    'Você não possui nenhuma residência cadastrada',
  );
  const [errorIcon, setErrorIcon] = useState('archive');
  const {user} = useAuth();

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    api
      .get(`/residences/${user.id}`, {cancelToken: source.token})
      .then((response) => {
        setMyResidences(response.data);
        setLoading(false);
        setError(false);
        if (response.data.length < 1) {
          setError(true);
          setErrorIcon('archive');
          setErrorMessage('Você não possui nenhuma residência cadastrada');
        }
      })
      .catch(() => {
        setLoading(false);
        setError(true);
        setErrorIcon('wifi-off');
        setErrorMessage('Oops! algo deu errado com nosso servidor.');
      });

    return () => {
      source.cancel();
    };
  }, [myResidences, user.id]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.newResidenceView}>
        <RectButton
          onPress={() => {
            navigation.navigate('ResidenceAdd');
          }}
          style={styles.newResidenceButton}>
          <Icon
            style={styles.houseIcon}
            name={'home'}
            size={25}
            color={'#3f3f3f'}
          />
          <Text style={styles.newResidenceButtonText}>Criar novo anúncio </Text>
        </RectButton>
      </View>
      <Div threshold={50} height={1.5} />
      <View style={styles.residenceToggleView}>
        {!loading ? (
          error === false ? (
            <FlatList
              data={myResidences}
              keyExtractor={(item) => item.id}
              renderItem={(item) => {
                return (
                  <ResidenceToggle residence={item} navigation={navigation} />
                );
              }}
            />
          ) : (
            <View style={[styles.residenceToggleView, {marginTop: 250}]}>
              <NotFound message={errorMessage} icon={errorIcon} />
            </View>
          )
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator color={'#7E57C2'} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
