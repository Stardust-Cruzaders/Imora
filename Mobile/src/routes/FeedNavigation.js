import 'react-native-gesture-handler';
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Feed from '../screens/Feed';
import FilterScreen from '../screens/FilterScreen';
import ResidenceDetailed from '../screens/Residence/ResidenceDetailed';

const Stack = createStackNavigator();
export default function FeedNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={'Feed'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Feed'} component={Feed} />
      <Stack.Screen name={'FilterScreen'} component={FilterScreen} />
      <Stack.Screen name={'ResidenceDetailed'} component={ResidenceDetailed} />
    </Stack.Navigator>
  );
}
