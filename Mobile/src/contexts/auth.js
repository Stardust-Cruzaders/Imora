import React from 'react';
import {createContext, useState, useEffect, useContext} from 'react';

import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
import AsyncStorage from '@react-native-community/async-storage';

//import * from as auth from '../services/auth';
import api from '../services/api';

const AuthContext = createContext();

export function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  const [phone, setPhone] = useState('');
  const [bio, setBio] = useState('');
  const [city, setCity] = useState('');
  const [st, setSt] = useState('');

  const [loading, setLoading] = useState(true);
  const [accessToken, setAccessToken] = useState('');
  const [isRegistered, setIsRegistered] = useState(true);

  async function CreateUser(
    name,
    email,
    profile_pic,
    phone_num,
    description,
    state,
    city,
  ) {
    const data = {
      name,
      email,
      avatar: profile_pic,
      bio: description,
      phone: phone_num,
      user_state: state,
      user_city: city,
    };

    const response = await api.post('/users', data);
    setUser(response.data);
    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.data));
  }
  async function checkIfUserExists(email) {
    const data = {
      email,
    };
    try {
      const response = await api.post('/users/find', data);
      console.log('Is registered: ' + response.data.is_registered);
      if (response.data.is_registered) {
        await AsyncStorage.setItem(
          '@RNAuth:user',
          JSON.stringify(response.data.user),
        );
        setUser(response.data.user);
        return response !== undefined ? response.data.is_registered : response;
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');
      const wasSigned = await AsyncStorage.getItem('@RNAuth:wasSigned');
      console.log('waSigned: ' + wasSigned);
      console.log('token de acesso: ' + storagedToken);
      if (wasSigned === null || undefined) {
        setLoading(false);
      } else if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        console.log(`Usuário armazenado: ${storagedUser}`);
        setAccessToken(storagedToken);
        setLoading(false);
      }
    }

    loadStoragedData();
  }, []);
  async function getUserCallback(error, result) {
    if (error) {
      console.log('getUserError', error);
    } else {
      setLoading(false);
      setUser(result);

      await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(result));
      await AsyncStorage.setItem('@RNAuth:wasSigned', JSON.stringify(true));
      setIsRegistered(await checkIfUserExists(result.email));
    }
  }
  function getUserInfo(token) {
    const infoRequest = new GraphRequest(
      '/me',
      {
        accessToken: token,
        parameters: {
          fields: {string: 'email, name,  picture.type(large)'},
        },
      },
      getUserCallback,
    );
    new GraphRequestManager().addRequest(infoRequest).start();
  }
  function FacebookSignIn() {
    api
      .get('/')
      .then(() => {
        LoginManager.logInWithPermissions(['public_profile', 'email']).then(
          async function (result) {
            if (result.isCancelled) {
              console.log('Login Cancelled');
            } else {
              console.log(
                'Login success with permissions ' +
                  result.grantedPermissions.toString(),
              );
              const accessData = await AccessToken.getCurrentAccessToken();

              getUserInfo(accessData.accessToken);
              setAccessToken(accessData.accessToken);
              await AsyncStorage.setItem(
                '@RNAuth:token',
                accessData.accessToken,
              );
            }
          },
          function (error) {
            console.log('Login fail with error: ' + error);
          },
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function FacebookSignOut() {
    AsyncStorage.clear().then(() => {
      LoginManager.logOut();
      setUser(null);
      setAccessToken(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        isRegistered,
        setIsRegistered,
        user,
        phone,
        setPhone,
        FacebookSignIn,
        loading,
        FacebookSignOut,
        CreateUser,
        setUser,
        bio,
        setBio,
        st,
        setSt,
        city,
        setCity,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
