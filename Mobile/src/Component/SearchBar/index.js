import React from 'react';

import {SearchBar} from 'react-native-elements';
import styles from './styles';

export default function Search({residenceName, setResidenceName}) {
  return (
    <SearchBar
      value={residenceName !== undefined ? residenceName : ''}
      onChangeText={(text) => setResidenceName(text)}
      round
      placeholder="Buscar"
      containerStyle={styles.containerStyle}
      inputContainerStyle={styles.inputContainerStyle}
      searchIcon={{name: 'search', size: 36, color: 'black'}}
      placeholderTextColor="#000"
    />
  );
}
