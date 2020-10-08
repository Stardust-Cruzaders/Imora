import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes/Routes';
import {AuthProvider} from './contexts/auth';
import {enableScreens} from 'react-native-screens';

enableScreens();
import MainNavigation from './routes/MainNavigation';
import ResidenceAddNavigation from './routes/ResidenceAddNavigation';
export default function App() {
  return (
    <>
      <NavigationContainer>
        <AuthProvider>
          <StatusBar backgroundColor={'#4D2C91'} />
          <ResidenceAddNavigation />
        </AuthProvider>
      </NavigationContainer>
    </>
  );
}
