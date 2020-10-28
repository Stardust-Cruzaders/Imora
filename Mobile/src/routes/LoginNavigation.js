import 'react-native-gesture-handler';
import React from 'react';

import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import OnBoarding from '../screens/onBoarding';
import Login from '../screens/Login';
import LoginHome from '../screens/Login/LoginHome';
import ForgotPass from '../screens/Login/ForgotPass';
import ForgotPassConclusion from '../screens/Login/ForgotPassConclusion';
import RegisterUser from '../screens/Register/RegisterUser';
import RegisterUser2 from '../screens/Register/RegisterUser2';
import MainNavigation from './MainNavigation';

const Stack = createNativeStackNavigator();
export default function LoginNavigation({isRegistered}) {
  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'LoginHome'} component={LoginHome} />
      <Stack.Screen name={'ForgotPass'} component={ForgotPass} />
      <Stack.Screen
        name={'ForgotPassConclusion'}
        component={ForgotPassConclusion}
      />
      <Stack.Screen name={'RegisterUser'} component={RegisterUser} />
      <Stack.Screen name={'RegisterUser2'} component={RegisterUser2} />
      <Stack.Screen name={'OnBoarding'} component={OnBoarding} />
      <Stack.Screen name={'MainNavigation'} component={MainNavigation} />
    </Stack.Navigator>
  );
}
