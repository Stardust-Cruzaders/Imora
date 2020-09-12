import 'react-native-gesture-handler';
import React from 'react';

import LoginNavigation from './LoginNavigation';
import MainNavigation from './MainNavigation';
import {useAuth} from '../contexts/auth';
import {ActivityIndicator, View} from 'react-native';
export default function Routes() {
  const {signed, isRegistered, loading} = useAuth();
  console.log(signed);

  if (loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return signed === true && isRegistered === true ? (
    <MainNavigation />
  ) : (
    <LoginNavigation />
  );
}
