import 'react-native-gesture-handler';

import React from 'react';

import ProfileSelf from '../screens/Profile/ProfileSelf';

import MyResidences from '../screens/MyResidences';

import ProfileEdit from '../screens/Profile/ProfileEdit';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tabs = createMaterialBottomTabNavigator();

export default function ProfileSelfNavigation() {
  return (
    <Tabs.Navigator
      initialRouteName={'ProfileSelf'}
      screenOptions={{headerShown: false}}>
      <Tabs.Screen name={'ProfileSelf'} component={ProfileSelf} />
      <Tabs.Screen name={'MyResidences'} component={MyResidences} />
      <Tabs.Screen name={'ProfileEdit'} component={ProfileEdit} />
    </Tabs.Navigator>
  );
}
