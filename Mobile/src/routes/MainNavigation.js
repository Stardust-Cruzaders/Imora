/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';

import FeedNavigation from './FeedNavigation';
import ProfileUser from '../screens/Profile/ProfileUser';
import ResidenceDetailed from '../screens/Residence/ResidenceDetailed';
import FilterScreen from '../screens/FilterScreen';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import FeedProvider from '../contexts/feed';
import ProfileEdit from '../screens/Profile/ProfileEdit';
import MyResidences from '../screens/MyResidences';
import ResidenceAddNavigation from './ResidenceAddNavigation';
import EditResidenceConfig from '../screens/EditResidenceConfig';
import ResidenceEditPhotos from '../screens/Residence/ResidenceEditPhotos';

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
        <Stack.Screen name={'ProfileUser'} component={ProfileUser} />
        <Stack.Screen name={'MyResidences'} component={MyResidences} />
        <Stack.Screen
          name={'ResidenceAdd'}
          component={ResidenceAddNavigation}
        />
        <Stack.Screen
          name={'EditResidenceConfig'}
          component={EditResidenceConfig}
        />
        <Stack.Screen
          name={'ResidenceEditPhotos'}
          component={ResidenceEditPhotos}
        />
        <Stack.Screen name={'ProfileEdit'} component={ProfileEdit} />
      </Stack.Navigator>
    </FeedProvider>
  );
}
