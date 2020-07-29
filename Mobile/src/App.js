import React from 'react';

import {StatusBar} from 'react-native';

import ResidenceAddLocation from './screens/Residence/ResidenceAdd/ResidenceAddLocation';
import ResidenceDetailed from './screens/Residence/ResidenceDetailed';
export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#4D2C91'} />
      <ResidenceDetailed />
    </>
  );
}
