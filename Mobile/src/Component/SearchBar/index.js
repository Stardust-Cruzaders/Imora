import React, {useState} from 'react';

import { SearchBar } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';
import textStyles from '../../textStyles';

export default function Search(){
    const [search, setSearch] = useState('');

    return(
        <SearchBar
        value={search}
        round
        placeholder="Buscar"
        inputStyle={{backgroundColor:"#7E57C2"}}
        containerStyle={{
          backgroundColor: '#7E57C2',
          borderBottomColor: 'transparent',
          borderTopColor: 'transparent',
          borderRadius: 30,
          margin:22
        }}
        inputContainerStyle={{
          backgroundColor: '#7E57C2',
          flexDirection: 'row-reverse',
        }}
        searchIcon={{name: 'search', size: 40, color: 'white'}}
        placeholderTextColor="#FFF"
      
      />

    );
}