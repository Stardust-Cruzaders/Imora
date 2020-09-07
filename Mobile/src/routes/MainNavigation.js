/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';

import Feed from '../screens/Feed';
import Offers from '../screens/Offers';
import Chat from '../screens/Chat';
import ProfileSelfNavigation from './ProfileSelfNavigation';

const Tab = createMaterialBottomTabNavigator();
export default function MainNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Explorar"
      activeColor="#f0edf6"
      barStyle={{backgroundColor: '#7E57C2', paddingVertical: 5}}
      shifting={true}>
      <Tab.Screen
        name="Explorar"
        component={Feed}
        options={{
          tabBarLabel: 'Explorar',
          tabBarIcon: () => <Icon name={'compass'} size={26} color={'#fff'} />,
        }}
      />
      <Tab.Screen
        name="Ofertas"
        component={Offers}
        options={{
          tabBarLabel: 'Ofertas',
          tabBarIcon: () => <Icon name={'zap'} size={26} color={'#FFF'} />,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Mensagens',
          tabBarIcon: () => (
            <Icon name={'message-circle'} size={26} color={'#FFF'} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileSelfNavigation}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: () => <Icon name={'user'} size={26} color={'#FFF'} />,
        }}
      />
    </Tab.Navigator>
  );
}
