import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ResidenceAddMain from '../screens/Residence/ResidenceAdd/ResidenceAddMain';
import ResidenceAddComfort from '../screens/Residence/ResidenceAdd/ResidenceAddComfort';
import ResidenceAddLocationZipcode from '../screens/Residence/ResidenceAdd/ResidenceAddLocation/ResidenceAddLocationZipcode';
import ResidenceAddLocationAddress from '../screens/Residence/ResidenceAdd/ResidenceAddLocation/ResidenceAddLocationAddress';
import ResidenceAddConditions from '../screens/Residence/ResidenceAdd/ResidenceAddConditions';
import ResidenceAddType from '../screens/Residence/ResidenceAdd/ResidenceAddType';

import ResidenceEdit from '../screens/Residence/ResidenceEdit';
import ResidenceAddProvider from '../contexts/residenceAdd';
const Stack = createStackNavigator();
export default function ResidenceAddNavigation() {
  return (
    <ResidenceAddProvider>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'ResidenceAddMain'}>
        <Stack.Screen name={'ResidenceAddMain'} component={ResidenceAddMain} />
        <Stack.Screen name={'ResidenceAddType'} component={ResidenceAddType} />
        <Stack.Screen
          name={'ResidenceAddComfort'}
          component={ResidenceAddComfort}
        />
        <Stack.Screen
          name={'ResidenceAddConditions'}
          component={ResidenceAddConditions}
        />
        <Stack.Screen
          name={'ResidenceAddLocationZipcode'}
          component={ResidenceAddLocationZipcode}
        />
        <Stack.Screen
          name={'ResidenceAddLocationAddress'}
          component={ResidenceAddLocationAddress}
        />
        <Stack.Screen name={'ResidenceEdit'} component={ResidenceEdit} />
      </Stack.Navigator>
    </ResidenceAddProvider>
  );
}
