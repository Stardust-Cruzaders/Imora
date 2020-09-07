import 'react-native-gesture-handler';
import React from 'react';

import {StatusBar} from 'react-native';

import ResidenceDetailed from './screens/Residence/ResidenceDetailed';

import MainNavigation from './routes/MainNavigation';
import LoginNavigation from './routes/LoginNavigation';

import LoginEditInfo from './screens/Login/LoginEditInfo';
import LoginOK from './screens/Login/LoginOK';
export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#4D2C91'} />
      <LoginOK />
    </>
  );
}
