import React from 'react';

import {StatusBar} from 'react-native';

import ResidenceAddComfort from './screens/Residence/ResidenceAdd/ResidenceAddComfort';
export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#4D2C91'} />
      <ResidenceAddComfort />
    </>
  );
}
