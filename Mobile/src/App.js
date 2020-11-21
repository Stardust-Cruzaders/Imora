import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes/Routes';
import {AuthProvider} from './contexts/auth';
import {enableScreens} from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';

enableScreens();
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <StatusBar backgroundColor={'#4D2C91'} />
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </>
  );
}
