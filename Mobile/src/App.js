import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import Routes from './routes/Routes';
export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#4D2C91'} />
      <Routes />
    </>
  );
}
