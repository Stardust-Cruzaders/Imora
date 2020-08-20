import React from 'react';
import { Text}  from 'react-native';

import {RectButton} from 'react-native-gesture-handler';

import styles from './styles';

export default function FilterComponent(){
    return(
            <RectButton
                style= {styles.filterButtonStyle}
                onPress={() => {
                    console.log("as");
                  }}>
                <Text style= {styles.textFormatation}>Filtrar</Text>
            </RectButton>
    );
}