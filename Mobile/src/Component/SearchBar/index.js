import React, {useState} from 'react';

import { SearchBar } from 'react-native-elements';
import styles from './styles';

export default function Search(){
    const [search, setSearch] = useState('');

    return(
        <SearchBar
        value={search}
        round
        placeholder="Buscar"
        inputStyle={{backgroundColor:"#7E57C2"}}
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainerStyle}
        searchIcon={{name: 'search', size: 40, color: 'white'}}
        placeholderTextColor="#FFF"
      
      />

    );
}