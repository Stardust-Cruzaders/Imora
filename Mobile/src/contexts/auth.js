import React from 'react';
import {createContext, useState, useEffect, useContext} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

const AuthContext = createContext();

export function AuthProvider({children}) {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

      if (storagedUser && storagedToken) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;

        setUser(JSON.parse(storagedUser));
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
      return response.data;
    } catch (err) {
      console.log(`Erro de autenticação: ${err.message}`);
      return err;
    }
  }
  async function Login(email, password) {
    try {
      const response = await SignIn(email, password);
      setUser(response.user);

      api.defaults.headers.Authorization = `Bearer ${response.token}`;
      await Promise.all([
        AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user)),
        AsyncStorage.setItem('@RNAuth:token', response.token),
      ]);
    } catch (err) {
      console.log('Erro no login ' + err);
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
      }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
