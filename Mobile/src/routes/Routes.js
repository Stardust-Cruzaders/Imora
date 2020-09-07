import 'react-native-gesture-handler';
import React from 'react';

import LoginNavigation from './LoginNavigation';
import MainNavigation from './MainNavigation';
import {useAuth} from '../contexts/auth';
export default function Routes() {
  const {signed, isRegistered} = useAuth();
  console.log(signed);
  return signed === true && isRegistered === true ? (
    <MainNavigation />
  ) : (
    <LoginNavigation />
  );
}
