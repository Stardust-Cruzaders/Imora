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
//import api from '../services/api';
const AuthContext = createContext();

export function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(true);
  const [accessToken, setAccessToken] = useState('');
  const [isRegistered, setIsRegistered] = useState(true);
  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');
      const wasSigned = await AsyncStorage.getItem('@RNAuth:wasSigned');
      console.log(wasSigned);
      if (wasSigned == null) {
        setLoading(false);
      } else if (storagedUser && storagedToken) {
        setUser(storagedUser);
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
          await AsyncStorage.setItem('@RNAuth:token', accessData.accessToken);
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
      },
    );
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
        user,
        phone,
        setPhone,
        FacebookSignIn,
        loading,
        FacebookSignOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
