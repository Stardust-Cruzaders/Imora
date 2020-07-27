import React from 'react';

import Checkbox from '@react-native-community/checkbox';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  checkboxText: {
    fontSize: 20,
  },
  checkbox: {},
});
export default function CheckboxComponent({value, setValue, text}) {
  return (
    <View style={[styles.checkbox, {flexDirection: 'row'}]}>
      <Checkbox
        disabled={false}
        value={value}
        onValueChange={(newValue) => setValue(newValue)}
        tintColors={{true: '#7E57C2', false: 'black'}}
      />
      <Text style={[styles.checkboxText, {alignSelf: 'center'}]}>{text}</Text>
    </View>
  );
}
