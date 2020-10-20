import React from 'react';
import {View, Text, TextInput, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {RectButton} from 'react-native-gesture-handler';

import styles from './styles';

export default function ForgotPassConclusion(){
    return(
    <View style={styles.container}> 
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 80}}>
        <Text style={styles.fontTitle}>Esqueceu sua senha?</Text>
    
        <View style={styles.whiteBox}>
   
            <Text style={styles.fontBox}>Não se preocupe. Nós enviaremos uma senha temporária para seu email de resgate.</Text>
            <Text style={styles.fontBox}>Não recebeu a senha ainda? Por favor cheque sua pasta de spam, ou <Text style={styles.fontHighlight}>Reevie a senha</Text></Text>
            <View style={{marginHorizontal: 20}}>
            <RectButton style={styles.buttonStyle}>
                <Text style={styles.buttonFont}>Recebi</Text>
            </RectButton>
            </View>
        </View>
        
        </View>
    </View>
    );
}