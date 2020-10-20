import 'react-native-gesture-handler';
import React from 'react';

import {StatusBar} from 'react-native';

import MainNavigation from './routes/MainNavigation';
import ResidenceAddNavigation from './routes/ResidenceAddNavigation';
import Login from './screens/Login';
import LoginHome from './screens/Login/LoginHome';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#4D2C91'} />
      <LoginHome />
    </>
  );
}
