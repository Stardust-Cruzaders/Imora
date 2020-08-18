import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileSelf from '../screens/Profile/ProfileSelf';
import Favorites from '../screens/Favorites';
import MyAds from '../screens/MyAds';
import MyResidences from '../screens/MyResidences';
import ProfileEdit from '../screens/Profile/ProfileEdit';

const Stack = createStackNavigator();
export default function ProfileSelfNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={'ProfileSelf'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'ProfileSelf'} component={ProfileSelf} />
      <Stack.Screen name={'Favorites'} component={Favorites} />
      <Stack.Screen name={'MyAds'} component={MyAds} />
      <Stack.Screen name={'MyResidences'} component={MyResidences} />
      <Stack.Screen name={'ProfileEdit'} component={ProfileEdit} />
    </Stack.Navigator>
  );
}
