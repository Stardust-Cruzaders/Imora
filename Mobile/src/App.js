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
import Login from './screens/Login';
import LoginHome from './screens/Login/LoginHome';

export default function App() {
  return (
    <>
<<<<<<< HEAD
      <StatusBar backgroundColor={'#4D2C91'} />
      <LoginHome />
=======
      <NavigationContainer>
        <AuthProvider>
          <StatusBar backgroundColor={'#4D2C91'} />
          <Routes />
        </AuthProvider>
      </NavigationContainer>
>>>>>>> 798cffa35afa7398dafa8439684b08ce37a697d7
    </>
  );
}
