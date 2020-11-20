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
  const [avatar, setAvatar] = useState('');

  const [token, setToken] = useState(null);
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
        wasSigned === undefined ||
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

  async function SignIn(email, password) {
    const data = {
      email,
      password,
    };
    try {
      console.log(email, password);
      const response = await api.post('/sessions', data);
      console.log(response.data.token);
      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
      return response.data;
    } catch (err) {
      console.log(`Erro de autenticação: ${err.message}`);
      return err;
    }
  }
  async function Register(profile_picture) {
    const data = {
      name,
      email,
      password,
      avatar: profile_picture,
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
      setToken(response.token);
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
