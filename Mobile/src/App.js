import React from 'react';

import {StatusBar} from 'react-native';

import ResidenceEdit from './screens/Residence/ResidenceEdit';
import ResidenceAddType from './screens/Residence/ResidenceAdd/ResidenceAddType';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#4D2C91'} />
      <ResidenceAddType />
    </>
  );
}
