import 'react-native-gesture-handler';
import React from 'react';

import {StatusBar} from 'react-native';

import MainNavigation from './routes/MainNavigation';
import ResidenceAddNavigation from './routes/ResidenceAddNavigation';
export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#4D2C91'} />
      <MainNavigation />
    </>
  );
}
