import 'react-native-gesture-handler';
import React from 'react';

import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import Feed from '../screens/Feed';
import FilterScreen from '../screens/FilterScreen';
import ResidenceDetailed from '../screens/Residence/ResidenceDetailed';

import FeedProvider from '../contexts/feed';
const Stack = createNativeStackNavigator();
export default function FeedNavigation() {
  return (
    <FeedProvider>
      <Stack.Navigator
        initialRouteName={'Feed'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Feed'} component={Feed} />
        <Stack.Screen name={'Filter'} component={FilterScreen} />
        <Stack.Screen
          name={'ResidenceDetailed'}
          component={ResidenceDetailed}
        />
      </Stack.Navigator>
    </FeedProvider>
  );
}
