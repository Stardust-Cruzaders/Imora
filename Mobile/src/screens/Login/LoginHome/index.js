import React from 'react';
import {View, Text, TextInput, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {RectButton} from 'react-native-gesture-handler';

import styles from './styles';

export default function LoginHome(){
    return(
    <View style={styles.container}>
        <ImageBackground 
        source={{uri:'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'}}
        style={styles.imageBackground}
        imageStyle={{opacity: 0.3}}
        > 
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 60}}>
        <Text style={styles.fontTitle}>Bem vindo de volta!</Text>
        
        <View style={styles.whiteBox}>
            <View style={{flexDirection: 'row'}}>
            <Icon name="mail" size={25} color="#7E57C2"/>
            <TextInput 
            style={{height: 20, borderBottomWidth: 1}} 
            placeholder="Email" 
            placeholderTextColor= '#fff' 
            />
            </View>
           
            <View style={{flexDirection: 'row'}}>
            <Icon name="lock" size={25} color="#7E57C2"/>
            <TextInput 
            style={{height: 20, borderBottomWidth: 1}} 
            placeholder="Senha" 
            placeholderTextColor="gray" />
            </View>
          
            <RectButton style={styles.buttonStyle}>
                <Text style={styles.textButton}>Continuar</Text>
            </RectButton>
        </View>
        <Text style={styles.subTextWhite}>Esqueceu sua senha?</Text>
        <Text style={styles.subTextGreen}>Recupere-a aqui</Text>
    
        
        </View>
        
          
          </ImageBackground>
    </View>
    );
}