import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/Login';
import MainNavigation from './MainNavigation';

const Stack = createStackNavigator();
export default function LoginNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Login'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'MainNavigation'} component={MainNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
