import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/Login';
import LoginEditInfo from '../screens/Login/LoginEditInfo';
import LoginOK from '../screens/Login/LoginOK';
import MainNavigation from './MainNavigation';

const Stack = createStackNavigator();
export default function LoginNavigation({isRegistered}) {
  return (
    <Stack.Navigator
      initialRouteName={isRegistered ? 'Login' : 'LoginEditInfo'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'LoginEditInfo'} component={LoginEditInfo} />
      <Stack.Screen name={'LoginOK'} component={LoginOK} />
      <Stack.Screen name={'MainNavigation'} component={MainNavigation} />
    </Stack.Navigator>
  );
}
