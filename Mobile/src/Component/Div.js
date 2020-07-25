/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {useWindowDimensions} from 'react-native';
import {Divider} from 'react-native-elements';

export default function Div({threshold}) {
  const width = useWindowDimensions().width;
  return (
    <Divider
      style={{
        backgroundColor: '#3F3F3F',
        width: width - threshold,
        height: 1,
        marginBottom: 25,
        alignSelf: 'center',
      }}
    />
  );
}
