import React from 'react';
import {createContext, useState, useEffect, useContext} from 'react';

import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

//import * from as auth from '../services/auth';
//import api from '../services/api';
const AuthContext = createContext();

export function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(true);
  const [accessToken, setAccessToken] = useState('');
  const [isRegistered, setIsRegistered] = useState(true);
  // useEffect(() => {}, []);
  function getUserCallback(error, result) {
    if (error) {
      console.log('getUserError', error);
    } else {
      setLoading(false);
      setUser(result);
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
          setLoading(true);
          getUserInfo(accessData.accessToken);
          setAccessToken(accessData.accessToken);
          //console.log(accessToken, user);
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
      },
    );
  }
  function FacebookSignOut() {
    LoginManager.logOut();
    setUser(null);
    setAccessToken(null);
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
