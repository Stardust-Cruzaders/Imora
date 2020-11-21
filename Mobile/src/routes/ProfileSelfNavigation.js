import 'react-native-gesture-handler';

import React from 'react';

import ProfileSelf from '../screens/Profile/ProfileSelf';

import MyResidences from '../screens/MyResidences';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const TopTab = createMaterialTopTabNavigator();

export default function MyResidencesTab() {
  return (
    <TopTab.Navigator
      initialRouteName={'ProfileTab'}
      screenOptions={{headerShown: true}}
      tabBarOptions={{
        indicatorStyle: {
          backgroundColor: '#FFF',
          height: 3,

          marginVertical: 5,

          borderRadius: 2,
          width: '45%',
          marginLeft: 5,
        },
        labelStyle: {fontSize: 12},
        elevation: 0,
        activeTintColor: '#FFF',
        style: {
          backgroundColor: '#7e57c2',

          elevation: 0,
          shadowColor: '#000000',
          shadowOffset: {width: 0, height: 10}, // change this for more shadow
          shadowOpacity: 0.4,
          shadowRadius: 6,
        },
        tabBarLabel: {
          focused: true,
          color: '#fff',
        },
      }}>
      <TopTab.Screen name={'Perfil'} component={ProfileSelf} />
      <TopTab.Screen name={'Minhas residências'} component={MyResidences} />
    </TopTab.Navigator>
  );
}
