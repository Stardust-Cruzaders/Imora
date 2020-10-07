import 'react-native-gesture-handler';

import React from 'react';

import ProfileSelf from '../screens/Profile/ProfileSelf';

import MyResidences from '../screens/MyResidences';
import ProfileHeader from '../Component/ProfileHeader';

import ProfileEdit from '../screens/Profile/ProfileEdit';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

const Tabs = createMaterialBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();
/**
 * Perfil:
 *  - ProfileSelf
 *  - ProfileEdit
 * Minhas residências
 *  - MyResidences
 *  - ProfileEdit
 *  - ResidenceAdd
 */
function ProfileTab() {
  return (
    <Stack.Navigator
      initialRouteName={'ProfileSelf'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'ProfileSelf'} component={ProfileSelf} />
      <Stack.Screen name={'ProfileEdit'} component={ProfileEdit} />
    </Stack.Navigator>
  );
}
function MyResidencesTab() {
  return (
    <Stack.Navigator
      initialRouteName={'MyResidences'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'MyResidences'} component={MyResidences} />
      <Stack.Screen name={'ProfileEdit'} component={ProfileEdit} />
    </Stack.Navigator>
  );
}
export default function ProfileSelfNavigation() {
  return (
    <>
      <ProfileHeader />
      <TopTab.Navigator
        initialRouteName={'ProfileTab'}
        screenOptions={{headerShown: false}}
        tabBarPosition={'top'}
        tabBarOptions={{
          indicatorStyle: {
            backgroundColor: '#FFF',
            height: 3,

            marginVertical: 5,

            borderRadius: 2,
            width: '45%',
            marginLeft: 5,
          },
          labelStyle: {fontSize: 14},
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
        <Stack.Screen name={'Perfil'} component={ProfileTab} />
        <Stack.Screen name={'Minhas residências'} component={MyResidencesTab} />
      </TopTab.Navigator>
    </>
  );
}
