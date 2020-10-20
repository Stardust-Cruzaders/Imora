import React from 'react';
import {View, Text, TextInput, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {RectButton} from 'react-native-gesture-handler';

import styles from './styles';

export default function LoginHome(){
    return(
    <View style={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 60}}>
        <Text style={styles.fontTitle}>Esqueceu sua senha?</Text>
    
        <View style={styles.whiteBox}>
            <View style={{flexDirection: 'row'}}>
            <Icon name="mail" size={25} color="#7E57C2"/>
            <TextInput 
            style={{height: 20, borderWidth: 1, borderColor: '#7E57C2'}} 
            placeholder="Email de resgate" 
            placeholderTextColor= '#8D8d87' 
            />
            </View>
          
            <RectButton style={styles.buttonStyle}>
                <Text style={styles.buttonFont}>Enviar</Text>
            </RectButton>
        </View>
        
        </View>
    </View>
    );
}