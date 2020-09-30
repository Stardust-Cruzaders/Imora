/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';

import FeedNavigation from './FeedNavigation';

import Favorites from '../screens/Favorites';
import Chat from '../screens/Chat';
import ProfileSelfNavigation from './ProfileSelfNavigation';
import ResidenceDetailed from '../screens/Residence/ResidenceDetailed';
import FilterScreen from '../screens/FilterScreen';
import Feed from '../screens/Feed';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import FeedProvider from '../contexts/feed';

const Stack = createNativeStackNavigator();
export default function MainNavigation() {
  return (
    <FeedProvider>
      <Stack.Navigator
        initialRouteName={'Feed'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Feed'} component={FeedNavigation} />
        <Stack.Screen name={'Filter'} component={FilterScreen} />
        <Stack.Screen
          name={'ResidenceDetailed'}
          component={ResidenceDetailed}
        />
      </Stack.Navigator>
    </FeedProvider>
  );
}
