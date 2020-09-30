import 'react-native-gesture-handler';
import React from 'react';

import Feed from '../screens/Feed';

import FeedProvider from '../contexts/feed';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import ProfileSelfNavigation from './ProfileSelfNavigation';
import Chat from '../screens/Chat';
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
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Mensagens',
          tabBarIcon: () => (
            <Icon name={'message-circle'} size={24} color={'#FFF'} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileSelfNavigation}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: () => <Icon name={'user'} size={24} color={'#FFF'} />,
        }}
      />
    </Tab.Navigator>
  );
}
