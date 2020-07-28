import React from 'react';

import {StatusBar} from 'react-native';

import ResidenceAddConditions from './screens/Residence/ResidenceAdd/ResidenceAddConditions';
export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#4D2C91'} />
      <ResidenceAddConditions />
    </>
  );
}
