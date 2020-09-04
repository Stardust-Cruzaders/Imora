import React, {useState} from 'react';

import {SearchBar} from 'react-native-elements';
import styles from './styles';

export default function Search() {
    const [search, setSearch] = useState('');

    return (
        <SearchBar
            value={search}
            round
            placeholder="Buscar"
            inputStyle={{backgroundColor: '#FFF'}}
            containerStyle={styles.containerStyle}
            inputContainerStyle={styles.inputContainerStyle}
            searchIcon={{name: 'search', size: 36, color: 'black'}}
            placeholderTextColor="#000"
        />
    );
}
