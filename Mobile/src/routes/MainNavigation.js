/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';

import FeedNavigation from './FeedNavigation';
import ProfileUser from '../screens/Profile/ProfileUser';
import ResidenceDetailed from '../screens/Residence/ResidenceDetailed';
import FilterScreen from '../screens/FilterScreen';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import FeedProvider from '../contexts/feed';
import ProfileSelf from '../screens/Profile/ProfileSelf';
import MyResidences from '../screens/MyResidences';
import ProfileEdit from '../screens/Profile/ProfileEdit';
import ProfileSelfNavigation from './ProfileSelfNavigation';

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
