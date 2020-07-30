import React from 'react';

import {StatusBar} from 'react-native';

import ProfileSelf from './screens/Profile/ProfileSelf';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#4D2C91'} />
      <ProfileSelf />
    </>
  );
}
