import React from 'react';

import {StatusBar} from 'react-native';

import ResidenceAddMain from './screens/Residence/ResidenceAdd/ResidenceAddMain';
export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#4D2C91'} />
      <ResidenceAddMain />
    </>
  );
}
