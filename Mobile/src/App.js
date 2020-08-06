import 'react-native-gesture-handler';
import React from 'react';

import {StatusBar} from 'react-native';

import Login from './screens/Login/';
export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#4D2C91'} />
      <Login />
    </>
  );
}
