/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';

import Feed from '../screens/Feed';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import MyResidencesTab from './ProfileSelfNavigation';
import Favorites from '../screens/Favorites';
const Tab = createMaterialBottomTabNavigator();
export default function FeedNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Explorar"
      activeColor="#f0edf6"
      barStyle={{
        backgroundColor: '#7E57C2',
        paddingVertical: 5,
      }}
      shifting={true}>
      <Tab.Screen
        name="Explorar"
        component={Feed}
        options={{
          tabBarLabel: 'Explorar',
          tabBarIcon: () => <Icon name={'compass'} size={24} color={'#fff'} />,
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: () => <Icon name={'heart'} size={24} color={'#FFF'} />,
        }}
      />

      <Tab.Screen
        name="MyResidences"
        component={MyResidencesTab}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: () => <Icon name={'user'} size={24} color={'#FFF'} />,
        }}
      />
    </Tab.Navigator>
  );
}
