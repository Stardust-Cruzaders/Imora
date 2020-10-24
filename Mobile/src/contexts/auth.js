/* eslint-disable no-shadow */
import React from 'react';
import {createContext, useState, useEffect, useContext} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

const AuthContext = createContext();

export function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  const [name, setName] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user_state, setUserState] = useState('');
  const [user_city, setUserCity] = useState('');
  const [phone, setPhone] = useState('');
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState(
    'https://i.pinimg.com/564x/4c/7e/e3/4c7ee3fd61cb7e3abb4dc5024a1da198.jpg',
  );

  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');
      const wasSigned = await AsyncStorage.getItem('@RNAuth:wasSigned');
      console.log(wasSigned);
      console.log(storagedUser, {token: storagedToken});
      if (
        wasSigned === null ||
        undefined ||
        ((storagedUser === null || undefined) &&
          (storagedToken === null || undefined))
      ) {
        setLoading(false);
      } else if (storagedUser && storagedToken) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;

        setUser(JSON.parse(storagedUser));
        setToken(storagedToken);
        setLoading(false);
      }
    }

    loadStoragedData();
  }, []);
  async function validateToken() {
    await api
      .get('/residences')
      .then(() => {
        return true;
      })
      .catch((error) => {
        if (error.response.status === 401) {
          SignOut();
          return false;
        }
      });
  }
  async function SignIn(email, password) {
    const data = {
      email,
      password,
    };
    try {
      console.log(email, password);
      const response = await api.post('/sessions', data);
      return response.data;
    } catch (err) {
      console.log(`Erro de autenticação: ${err.message}`);
      return err;
    }
  }
  async function Register() {
    const data = {
      name,
      email,
      password,
      avatar,
      bio,
      is_host: false,
      phone,
      user_state,
      user_city,
    };
    try {
      const response = await api.post('/users', data);
      return response.data;
    } catch (err) {
      console.log('Erro ao criar usuário: ' + err);
      throw err;
    }
  }
  async function Login(email, password) {
    try {
      const response = await SignIn(email, password);
      setUser(response.user);

      api.defaults.headers.Authorization = `Bearer ${response.token}`;
      await Promise.all([
        AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user)),
        AsyncStorage.setItem('@RNAuth:wasSigned', JSON.stringify(true)),
        AsyncStorage.setItem('@RNAuth:token', response.token),
      ]);
      return true;
    } catch (err) {
      console.log('Erro no login ' + err);
      return false;
    }
  }
  function SignOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }
  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        setUser,
        Login,
        SignOut,
        Register,
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        user_state,
        setUserState,
        user_city,
        setUserCity,
        phone,
        setPhone,
        bio,
        setBio,
        avatar,
        setAvatar,
        token,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
