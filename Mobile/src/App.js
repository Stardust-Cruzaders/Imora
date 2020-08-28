import 'react-native-gesture-handler';
import React from 'react';

import {StatusBar} from 'react-native';

import ResidenceDetailed from './screens/Residence/ResidenceDetailed';

import ResidenceAddComfort from './screens/Residence/ResidenceAdd/ResidenceAddComfort';
import ResidenceAddConditions from './screens/Residence/ResidenceAdd/ResidenceAddConditions';
import ResidenceAddLocation from './screens/Residence/ResidenceAdd/ResidenceAddLocation';
import ResidenceAddMain from './screens/Residence/ResidenceAdd/ResidenceAddMain';
import ResidenceAddType from './screens/Residence/ResidenceAdd/ResidenceAddType';
import Feed from './screens/Feed';
import FilterScreen from './screens/FilterScreen';
export default function App() {
    return (
        <>
            <StatusBar backgroundColor={'#4D2C91'} />
            <Feed />
        </>
    );
}
